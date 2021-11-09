sap.ui.define(
  ["sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel",
   "sap/m/library"],
  function (Controller, JSONModel, ResourceModel, mobileLibrary) {
    "use strict";
    return Controller.extend("GOTO.App", {

      onInit: function () {
        sap.ui.getCore().getConfiguration().setLanguage("EN");

			var oModel = new JSONModel("./pageContent/content.json");
			this.getView().setModel(oModel);

      // set i18n model on view
      var i18nModel = new ResourceModel({
        bundleName: "GOTO.i18n.i18n"
     });
     this.getView().setModel(i18nModel, "i18n");
      },

     
    });
  }
);
