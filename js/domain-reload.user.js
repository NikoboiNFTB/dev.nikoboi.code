// ==UserScript==
// @name         Domain Reload
// @namespace    https://github.com/NikoboiNFTB/dev.nikoboi.code
// @downloadURL  https://code.nikoboi.dev/js/domain-reload.user.js
// @version      2.0
// @description  Ctrl+Shift+F5 navigates to the current domain's root or a configured override.
// @author       Nikoboi
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @icon         https://github.githubassets.com/favicons/favicon-dark.svg
// ==/UserScript==

(function () {
	"use strict";

	// Here you can add domain-specific destination overrides
	// Here are some examples:
	const overrides = [
		{
			domain: "https://www.youtube.com",
			destination: "https://www.youtube.com/playlist?list=WL",
		},
		{
			domain: "https://www.bbc.co.uk",
			destination: "https://www.bbc.co.uk/iplayer/continue-watching",
		},
		{
			domain: "https://github.com",
			destination: "https://github.com/NikoboiNFTB?tab=repositories",
		},
	];

	document.addEventListener(
		"keydown",
		(event) => {
			if (event.ctrlKey && event.shiftKey && event.key === "F5") {
				event.preventDefault();
				event.stopPropagation();

				const override = overrides.find((item) => item.domain === window.location.origin);

				window.location.href = override?.destination ?? `${window.location.origin}/`;
			}
		},
		true,
	);
})();
