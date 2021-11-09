sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var computerSkillsBlock = BlockBase.extend("GOTO.pageContent.professionalSkills.computerSkillsBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "GOTO.pageContent.professionalSkills.computerSkillsBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "GOTO.pageContent.professionalSkills.computerSkillsBlock",
					type: ViewType.XML
				}
			},
			manifest: "json"
		}
		
	})
	return computerSkillsBlock;

	
});
