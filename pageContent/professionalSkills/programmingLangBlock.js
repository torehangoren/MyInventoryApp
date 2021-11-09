sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var programmingLangBlock = BlockBase.extend("GOTO.pageContent.professionalSkills.programmingLangBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "GOTO.pageContent.professionalSkills.programmingLangBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "GOTO.pageContent.professionalSkills.programmingLangBlock",
					type: ViewType.XML
				}
			},
			manifest: "json"
		}
		
	})
	return programmingLangBlock;

	
});
