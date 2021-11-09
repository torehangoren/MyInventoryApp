sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function(Controller) {
	"use strict";

	return Controller.extend("goto.inventor.controller.Parent", {
		onInit: function() {
			const router = this.getOwnerComponent().getRouter();
			router.attachRoutePatternMatched(this.onRoutePatternMatched, this);
			this._navContainerDelegate = { onAfterShow: this.onAfterShow };
			this.getView().addEventDelegate(this._navContainerDelegate, this);
		},

		onRoutePatternMatched: function(event) {
			const key = event.getParameter("name");
			this.byId("childViewSegmentedButton").setSelectedKey(key);
		},

		onAfterShow: function() {
			const router = this.getOwnerComponent().getRouter();
			router.navTo("childRoute1");
		},

		onSelect: function(event) {
			const router = this.getOwnerComponent().getRouter();
			router.navTo(event.getParameter("key"));
		},

		onExit: function() {
			const router = this.getOwnerComponent().getRouter();
			router.detachRoutePatternMatched(this.onRoutePatternMatched, this);
			this.getView().removeEventDelegate(this._navContainerDelegate, this);
			this._navContainerDelegate = null;
		},

	});
});