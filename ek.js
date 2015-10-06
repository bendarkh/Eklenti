// ==UserScript==
// @name         Koz Eklenti
// @version      1.0
// @author       Acydwarp
// @match        http://agar.io/*
// @match        https://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// ==/UserScript==

window.stop()
document.documentElement.innerHTML = null

GM_xmlhttpRequest({method: 'GET', url: 'https://zt-acydwarp.rhcloud.com/agar',
  onload: function(r) {
    document.open()
    document.write(r.responseText)
    document.close()
  }
})
