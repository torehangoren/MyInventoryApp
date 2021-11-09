sap.ui.define([
  "sap/ui/core/mvc/Controller",
], function(Controller) {
  "use strict";

  return Controller.extend("demo.controller.children.Child1", {
    onInit: function() {
      this._navContainerDelegate = { onBeforeShow: this.onBeforeShow };
      this.getView().addEventDelegate(this._navContainerDelegate, this);
    },

    onBeforeShow: function() {
      console.log("onBeforeShow was called"); // For https://stackoverflow.com/q/48097675/5846045
    },

    onExit: function() { // Don't forget to deregister the delegate on exit.
      this.getView().removeEventDelegate(this._navContainerDelegate);
      this._navContainerDelegate = null;
    },

  });
});