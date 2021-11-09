sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var publicationBlock = BlockBase.extend("GOTO.pageContent.professionalSkills.publicationBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "GOTO.pageContent.professionalSkills.publicationBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "GOTO.pageContent.professionalSkills.publicationBlock",
					type: ViewType.XML
				}
			},
			manifest: "json"
		}
		
	})
	return publicationBlock;

	
});
