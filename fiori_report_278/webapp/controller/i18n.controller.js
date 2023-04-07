sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
  ],
  function (BaseController, MessageBox) {
    "use strict";

    return BaseController.extend("br.com.cliente.gestao.fiorireport278.controller.i18n", {
      onInit() {
        //this.changeLanguage();
        //sap-language=pt-BR
        //sap-language=en
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
      },

      /**
       * Change the app language
       */
      changeLanguage: function () {
        var i18nModel = new sap.ui.model.resource.ResourceModel({
          bundleUrl: "i18n/i18n.properties",
          bundleLocale: "fr",
          bundleName: "br.com.cliente.gestao.fiorireport278.i18n.i18n_fr"
        });

        // replaces the default i18n with i18n_fr. The name must be i18n because it's in the manifest bundle property
        this.getView().setModel(i18nModel, "i18n");
      }

    });
  }
);
