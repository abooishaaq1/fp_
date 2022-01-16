// ==UserScript==
// @name         fp
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       ammar
// @match        https://foreignpolicy.com/*/*/*/*
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector(".post-content-main .content-ungated").innerHTML += document.querySelector(".post-content-main .content-gated").innerHTML;
    document.styleSheets[0].insertRule("div.content-ungated::before { content: none; background-image: none !important }", 1);
})();
