sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var languageBlock = BlockBase.extend("GOTO.pageContent.language.languageBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "GOTO.pageContent.language.languageBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "GOTO.pageContent.language.languageBlock",
					type: ViewType.XML
				}
			},
			manifest: "json"
		}
		
	})
	return languageBlock;

	
});
