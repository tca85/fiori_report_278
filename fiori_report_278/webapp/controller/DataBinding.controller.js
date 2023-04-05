sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("br.com.cliente.gestao.fiorireport278.controller.DataBinding", {
        onInit() {
          var oModelJSON = new sap.ui.model.json.JSONModel;
          oModelJSON.loadData("data/Produtos.json");
          this.getView().setModel(oModelJSON, "Model_JSON_Produtos");
        },

        /**
         * Simple form doesn't accept a collection only one item
         * sap.ui.layout.form:SimpleForm
         */
        getRegion: function(){
          var oRegionModelJSON = new sap.ui.model.json.JSONModel;
          oRegionModelJSON.loadData("data/Regions.json");
          this.getView().setModel(oRegionModelJSON, "Model_JSON_Regions");

          var oForm = this.getView().byId("formRegions");
          oForm.bindElement("Model_JSON_Regions>/regions/1");
        }

      });

    }
  );
  