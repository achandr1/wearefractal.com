define ["templates/index"], (index) ->
  $ ->
    $("#main").html index()
          
    ## graphing
    # Returns a flattened hierarchy containing all leaf nodes under the root.
    classes = (root) ->
      recurse = (name, node) ->
        if node.children
          node.children.forEach (child) ->
            recurse node.name, child
        else
          classes.push
            packageName: name
            className: node.name
            value: node.size

      classes = []
      recurse null, root
      children: classes

    r = 700
    format = d3.format(",d")
    fill = d3.scale.category20b()
    bubble = 
      d3.layout.pack().sort(null)
      .size([r, r]).padding(1.5)

    vis = d3.select("#chart")
      .append("svg").attr("width", r)
      .attr("height", r).attr("class", "bubble")      

    d3.json '../../data/repos.json', (json) ->
      node = vis.selectAll("g.node")
        .data(bubble.nodes(classes(json))
        .filter((d) -> not d.children))
        .enter().append("g").attr("class", "node")
        .attr("transform", (d) ->
          "translate(" + d.x + "," + d.y + ")")
      
      node.append("title").text (d) ->
        d.className + ": " + format(d.value)

      node.append("circle")
        .transition().duration(750).delay((d,i) -> i *23)
        .attr("r", (d) -> d.r).style "fill", (d) ->
          fill d.packageName

      node.append("text").attr("text-anchor", "middle").attr("dy", ".3em").text (d) ->
        d.className.substring 0, d.r / 3

      #$(".bubble").mouseover (e) ->
      #  @.css("background-color", "#5ED306")
