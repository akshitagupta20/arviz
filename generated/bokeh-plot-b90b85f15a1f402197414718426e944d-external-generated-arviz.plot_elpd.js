(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("01c1cbf3-d43a-48b7-955e-548e734110c5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '01c1cbf3-d43a-48b7-955e-548e734110c5' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"55c595e2-7306-419c-8ef8-047cdf712096":{"roots":{"references":[{"attributes":{},"id":"100570","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"100590"}],"tools":[{"id":"100580"},{"id":"100581"},{"id":"100582"},{"id":"100583"},{"id":"100584"},{"id":"100585"},{"id":"100586"},{"id":"100587"}]},"id":"100616","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"100616"},"toolbar_location":"above"},"id":"100617","type":"ToolbarBox"},{"attributes":{},"id":"100581","type":"PanTool"},{"attributes":{"source":{"id":"100600"}},"id":"100602","type":"CDSView"},{"attributes":{"data_source":{"id":"100600"},"glyph":{"id":"100599"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"100602"}},"id":"100601","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"100609"},"ticker":{"id":"100573"}},"id":"100572","type":"LinearAxis"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"100607"},"ticker":{"id":"100577"}},"id":"100576","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"100611"},"selection_policy":{"id":"100610"}},"id":"100600","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"100580"},{"id":"100581"},{"id":"100582"},{"id":"100583"},{"id":"100584"},{"id":"100585"},{"id":"100586"},{"id":"100587"}]},"id":"100590","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"100588","type":"BoxAnnotation"},{"attributes":{},"id":"100610","type":"UnionRenderers"},{"attributes":{},"id":"100566","type":"DataRange1d"},{"attributes":{},"id":"100577","type":"BasicTicker"},{"attributes":{"callback":null},"id":"100587","type":"HoverTool"},{"attributes":{},"id":"100573","type":"BasicTicker"},{"attributes":{"children":[[{"id":"100563"},0,0]]},"id":"100615","type":"GridBox"},{"attributes":{"axis":{"id":"100576"},"dimension":1,"ticker":null},"id":"100579","type":"Grid"},{"attributes":{},"id":"100607","type":"BasicTickFormatter"},{"attributes":{},"id":"100611","type":"Selection"},{"attributes":{},"id":"100609","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"100572"}],"center":[{"id":"100575"},{"id":"100579"}],"left":[{"id":"100576"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"100601"}],"title":{"id":"100603"},"toolbar":{"id":"100590"},"toolbar_location":null,"x_range":{"id":"100564"},"x_scale":{"id":"100568"},"y_range":{"id":"100566"},"y_scale":{"id":"100570"}},"id":"100563","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"100589","type":"PolyAnnotation"},{"attributes":{},"id":"100585","type":"UndoTool"},{"attributes":{},"id":"100580","type":"ResetTool"},{"attributes":{"overlay":{"id":"100588"}},"id":"100582","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"100589"}},"id":"100584","type":"LassoSelectTool"},{"attributes":{"text":"centered model - non centered model"},"id":"100603","type":"Title"},{"attributes":{},"id":"100586","type":"SaveTool"},{"attributes":{},"id":"100583","type":"WheelZoomTool"},{"attributes":{},"id":"100564","type":"DataRange1d"},{"attributes":{"axis":{"id":"100572"},"ticker":null},"id":"100575","type":"Grid"},{"attributes":{"children":[{"id":"100617"},{"id":"100615"}]},"id":"100618","type":"Column"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"100599","type":"Cross"},{"attributes":{},"id":"100568","type":"LinearScale"}],"root_ids":["100618"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"55c595e2-7306-419c-8ef8-047cdf712096","root_ids":["100618"],"roots":{"100618":"01c1cbf3-d43a-48b7-955e-548e734110c5"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();