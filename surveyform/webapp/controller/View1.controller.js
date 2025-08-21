sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.ui5.training.surveyform.controller.View1", {
        onInit() {
        },

        onClear: function () {
            var oView = this.getView();
                oView.byId("inputName").setValue("");
                oView.byId("inputZip").setValue("");
                oView.byId("inputCity").setValue("");
                oView.byId("inputStreet").setValue("");
                oView.byId("inputNo").setValue("");
        }
    });
});