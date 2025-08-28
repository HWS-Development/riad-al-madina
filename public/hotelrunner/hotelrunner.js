(function () {
    // Derive ROOT based on where this script is served from
    var script = document.currentScript || (function () {
      var s = document.getElementsByTagName('script');
      return s[s.length - 1];
    })();
    var base = new URL('.', script.src).href;   // e.g. https://host/amh/hotelrunner/
    var ROOT = base + 'vb3';                    // -> .../hotelrunner/vb3
  
    function httpGet(url) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, false); // sync, matches HR snippet
      try { xhr.send(null); } catch (e) { return null; }
      return (xhr.status >= 200 && xhr.status < 300) ? xhr.responseText : null;
    }
  
    function ReplaceContent(html) {
      var el = document.getElementById("hr_search_widget");
      if (el) {
        el.innerHTML = html;         // embed inside SPA route
        return;
      }
      document.open();               // fallback: full-page replace
      document.write(html);
      document.close();
    }
  
    window.addEventListener("load", function () {
      // Try text.txt first; fall back to index.html if absent
      var url1 = ROOT + "/text.txt?search_root=" + encodeURIComponent(ROOT + "/search");
      var html = httpGet(url1);
      if (!html) {
        var url2 = ROOT + "/index.html?search_root=" + encodeURIComponent(ROOT + "/search");
        html = httpGet(url2);
      }
      if (!html) {
        console.error("[hotelrunner] Could not load vb3. Check that /public/hotelrunner/vb3 exists and is reachable.");
        return;
      }
      ReplaceContent(html);
    });
  })();
  