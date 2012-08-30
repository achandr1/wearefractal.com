
define(["templates/index"], function(index) {
  return $(function() {
    var bubble, classes, fill, format, r, vis;
    $("#main").html(index());
    classes = function(root) {
      var recurse;
      recurse = function(name, node) {
        if (node.children) {
          return node.children.forEach(function(child) {
            return recurse(node.name, child);
          });
        } else {
          return classes.push({
            packageName: name,
            className: node.name,
            value: node.size
          });
        }
      };
      classes = [];
      recurse(null, root);
      return {
        children: classes
      };
    };
    r = 700;
    format = d3.format(",d");
    fill = d3.scale.category20b();
    bubble = d3.layout.pack().sort(null).size([r, r]).padding(1.5);
    vis = d3.select("#chart").append("svg").attr("width", r).attr("height", r).attr("class", "bubble");
    return d3.json('../../data/repos.json', function(json) {
      var node;
      node = vis.selectAll("g.node").data(bubble.nodes(classes(json)).filter(function(d) {
        return !d.children;
      })).enter().append("g").attr("class", "node").attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
      node.append("title").text(function(d) {
        return d.className + ": " + format(d.value);
      });
      node.append("circle").transition().duration(750).delay(function(d, i) {
        return i * 23;
      }).attr("r", function(d) {
        return d.r;
      }).style("fill", function(d) {
        return fill(d.packageName);
      });
      return node.append("text").attr("text-anchor", "middle").attr("dy", ".3em").text(function(d) {
        return d.className.substring(0, d.r / 3);
      });
    });
  });
});
