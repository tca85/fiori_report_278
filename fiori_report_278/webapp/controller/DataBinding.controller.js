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
        }

      });

    }
  );
  