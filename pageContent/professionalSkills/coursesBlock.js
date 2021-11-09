sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var projectsBlock = BlockBase.extend("GOTO.pageContent.professionalSkills.coursesBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "GOTO.pageContent.professionalSkills.coursesBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "GOTO.pageContent.professionalSkills.coursesBlock",
					type: ViewType.XML
				}
			},
			manifest: "json"
		}
		
	})
	return projectsBlock;

	
});
