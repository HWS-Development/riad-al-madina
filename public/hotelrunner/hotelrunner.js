(function () {
  // figure out the script base, e.g. http://localhost:3000/hotelrunner/
  var script = document.currentScript || document.scripts[document.scripts.length - 1];
  var baseHref = new URL('.', script.src).href;   // .../hotelrunner/
  var vb3Href  = new URL('bv3/', baseHref).href;  // if your folder is 'bv3'
  var searchHref = new URL('search/', vb3Href).href;

  function httpGet(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    try { xhr.send(null); } catch (e) {
      console.error('[hotelrunner] XHR failed:', url, e);
      return null;
    }
    return (xhr.status >= 200 && xhr.status < 300) ? xhr.responseText : null;
  }

  function ReplaceContent(html) {
    var host = document.getElementById('hr_search_widget');
    if (host) { host.innerHTML = html; return; }
    document.open(); document.write(html); document.close();
  }

  window.addEventListener('load', function () {
    var url = vb3Href + 'index.html?search_root=' + encodeURIComponent(searchHref);
    var html = httpGet(url);
    if (!html) {
      console.error('[hotelrunner] Could not load vb3/index.html at', url);
      return;
    }
    ReplaceContent(html);
  });
})();
