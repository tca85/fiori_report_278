sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
  ],
  function (BaseController, MessageBox) {
    "use strict";

    return BaseController.extend("br.com.cliente.gestao.fiorireport278.controller.i18n", {
      onInit() {
      },

      /**
       * Display the form data into a sap.m.messagebox
       */
      sendForm: function () {
        //msgConfirmation
        var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

        var customer = this.getView().byId("inpCustomer").getValue();
        var city = this.getView().byId("inpCity").getValue();
        var state = this.getView().byId("inpState").getValue();

        var sMessage = oResourceBundle.getText("msgConfirmation", [customer, city, state]);
        MessageBox.confirm(sMessage);
      }

    });
  }
);
