import { Notice, Plugin } from "obsidian";

export default class NativeScrollbarPlugin extends Plugin {
	async onload() {
		document.body.addClass('native-scrollbars');

		this.registerEvent(
			this.app.workspace.on("css-change", () => {
				this.removeScrollbarStyles();
			})
		);

		// Wait for plugins to register before removing scrollbars
		setTimeout(() => {
			this.removeScrollbarStyles();
		})
	}

	removeScrollbarStyles() {
		for (let i = 0, len = document.styleSheets.length; i < len; i++) {
			const sheet = document.styleSheets.item(i);

			try {
				const ruleSet = sheet.cssRules;

				for (let j = 0; j < ruleSet.length; j++) {
					const rule = ruleSet.item(j) as CSSStyleRule;

					if (/-webkit-scrollbar/.test(rule.selectorText)) {
						// Adjust index to compensate for deletion
						sheet.deleteRule(j--);
					}
				}
			} catch (e) {
				console.debug('Obsidian Native Scrollbars: ', e);
			}
		}
	}

	onunload() {
		document.body.removeClass('native-scrollbars');

		new Notice(
			"Native scrollbars disabled. Restart is required to take effect.",
			5000
		);
	}
}
