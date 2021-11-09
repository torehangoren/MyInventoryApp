sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var aboutBlock = BlockBase.extend("GOTO.pageContent.about.aboutBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "GOTO.pageContent.about.aboutBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "GOTO.pageContent.about.aboutBlock",
					type: ViewType.XML
				}
			}
		}
	});
	return aboutBlock;
});
