define(function() {
  return function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var __jade = [ {
      lineno: 1,
      filename: "/home/x51/apps/wearefractal.com/app/web/client/templates/index.jade"
    } ];
    try {
      var buf = [];
      with (locals || {}) {
        var interp;
        __jade.unshift({
          lineno: 1,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 2,
          filename: __jade[0].filename
        });
        buf.push("<header>");
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 2,
          filename: __jade[0].filename
        });
        buf.push('<img id="logo" src="img/fractalLogo.png"/>');
        __jade.shift();
        __jade.unshift({
          lineno: 4,
          filename: __jade[0].filename
        });
        buf.push('<a target="_blank" href="http://github.com/wearefractal">');
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 4,
          filename: __jade[0].filename
        });
        buf.push('<img src="img/githubGreen.png" border="0" class="icon"/>');
        __jade.shift();
        __jade.shift();
        buf.push("</a>");
        __jade.shift();
        __jade.unshift({
          lineno: 6,
          filename: __jade[0].filename
        });
        buf.push('<a target="_blank" href="http://twitter.com/wearefractal">');
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 6,
          filename: __jade[0].filename
        });
        buf.push('<img src="img/twitter.png" class="icon"/>');
        __jade.shift();
        __jade.shift();
        buf.push("</a>");
        __jade.shift();
        __jade.shift();
        buf.push("</header>");
        __jade.shift();
        __jade.unshift({
          lineno: 7,
          filename: __jade[0].filename
        });
        buf.push('<div class="feature">');
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 8,
          filename: __jade[0].filename
        });
        buf.push('<div class="grey">');
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 8,
          filename: __jade[0].filename
        });
        buf.push("We do Open Source.");
        __jade.shift();
        __jade.shift();
        buf.push("</div>");
        __jade.shift();
        __jade.unshift({
          lineno: 9,
          filename: __jade[0].filename
        });
        buf.push("with over 80 Open Source projects, ");
        __jade.shift();
        buf.push("\n");
        __jade.unshift({
          lineno: 10,
          filename: __jade[0].filename
        });
        buf.push("we know how to translate the power ");
        __jade.shift();
        __jade.unshift({
          lineno: 12,
          filename: __jade[0].filename
        });
        buf.push("<br/>");
        __jade.shift();
        __jade.unshift({
          lineno: 12,
          filename: __jade[0].filename
        });
        buf.push("of community into an Open Source ");
        __jade.shift();
        buf.push("\n");
        __jade.unshift({
          lineno: 13,
          filename: __jade[0].filename
        });
        buf.push("strategy that works.");
        __jade.shift();
        __jade.unshift({
          lineno: 15,
          filename: __jade[0].filename
        });
        buf.push("<br/>");
        __jade.shift();
        __jade.unshift({
          lineno: 16,
          filename: __jade[0].filename
        });
        buf.push("<br/>");
        __jade.shift();
        __jade.unshift({
          lineno: 16,
          filename: __jade[0].filename
        });
        buf.push('<span class="contact">');
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 16,
          filename: __jade[0].filename
        });
        buf.push(" ");
        __jade.shift();
        buf.push("\n");
        __jade.unshift({
          lineno: 17,
          filename: __jade[0].filename
        });
        buf.push("contact us ");
        __jade.shift();
        __jade.unshift({
          lineno: 18,
          filename: __jade[0].filename
        });
        buf.push('<a target="_blank" href="http://twitter.com/wearefractal">');
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 18,
          filename: __jade[0].filename
        });
        buf.push("@WeAreFractal");
        __jade.shift();
        __jade.shift();
        buf.push("</a>");
        __jade.shift();
        __jade.shift();
        buf.push("</span>");
        __jade.shift();
        __jade.unshift({
          lineno: 19,
          filename: __jade[0].filename
        });
        buf.push('<div id="chart" class="feature">');
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.shift();
        buf.push("</div>");
        __jade.shift();
        __jade.shift();
        buf.push("</div>");
        __jade.shift();
        __jade.shift();
      }
      return buf.join("");
    } catch (err) {
      rethrow(err, __jade[0].filename, __jade[0].lineno);
    }
  };
});