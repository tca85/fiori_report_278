sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("br.com.cliente.gestao.fiorireport278.controller.Lista", {
            onInit: function () {
                console.log
            },

            /**
             * Called by the FilterBar search event
             * "This event is fired when the Go button is pressed."
             * https://ui5.sap.com/1.111.1/#/api/sap.ui.comp.filterbar.FilterBar
             * -------
             * 
             */
            onSearch: function (event) {
                var oProductIdInput = this.getView().byId("productIdInput").getValue();
                var oProductNameInput = this.getView().byId("productNameInput").getValue();

                // these properties comes from the localService\metadata.xml file
                var oFilter = new Filter({
                    filters: [
                        new Filter("ProductId", FilterOperator.Contains, oProductIdInput),
                        new Filter("Name", FilterOperator.Contains, oProductNameInput)
                    ],
                    and: true
                });

                // sap.m.Table
                var oTable = this.getView().byId("productsTable");

                // this is the property 'items' from the sap.m.Table
                // <sap.m:Table xmlns:sap.m="sap.m" noDataText="{i18n>tbNoData}" id="productsTable" items="{/Products}">
                var binding = oTable.getBinding("items");

                // apply the filter to the databind
                binding.filter(oFilter);
            }


        });
    });
