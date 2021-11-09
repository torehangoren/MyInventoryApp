sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var educationBlock = BlockBase.extend("GOTO.pageContent.education.educationHighSchoolBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "GOTO.pageContent.education.educationHighSchoolBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "GOTO.pageContent.education.educationHighSchoolBlock",
					type: ViewType.XML
				}
			},
			manifest: "json"
		}
		
	})
	return educationBlock;

	
});
