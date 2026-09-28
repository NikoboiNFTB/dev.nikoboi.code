// ==UserScript==
// @name         Domain Reload
// @namespace    https://github.com/NikoboiNFTB/dev.nikoboi.code
// @downloadURL  https://code.nikoboi.dev/js/domain-reload.user.js
// @version      1.0
// @description  Ctrl+Shift+F5 navigates to the current domain's root
// @author       Nikoboi
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @icon         https://github.githubassets.com/favicons/favicon-dark.svg
// ==/UserScript==

(function () {
	"use strict";

	document.addEventListener(
		"keydown",
		(event) => {
			if (event.ctrlKey && event.shiftKey && event.key === "F5") {
				event.preventDefault();
				event.stopPropagation();

				window.location.href = `${window.location.origin}/`;
			}
		},
		true,
	);
})();
