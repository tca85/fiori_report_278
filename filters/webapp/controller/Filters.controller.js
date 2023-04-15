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

        return Controller.extend("br.com.filters.filters.controller.Filters", {
            onInit: function () {

            },

            /**
             * Using filters programmatically
             * @param {*} event 
             */
            onSimpleFilter: function (event) {
                var oSearchFieldValue = event.getSource().getValue();

                // create a filter based on the SearchField value
                // var oFilter = new Filter("ProductName", FilterOperator.Contains, oSearchFieldValue);
                var oFilter = new Filter("UnitsInStock", FilterOperator.BT, oSearchFieldValue, 90);

                // create the filter binding
                var oList = this.getView().byId("list0");
                var binding = oList.getBinding("items"); // item --> aggregation where we apply the filter

                // apply the filter to the databind
                binding.filter(oFilter);
            },

            /**
             * https://sapui5.hana.ondemand.com/#/api/sap.ui.model.Filter
             * @param {*} event 
             */
            onComplexFilter: function (event) {
                debugger;
                var oSearchFieldValue = event.getSource().getValue();

                var oFilter = new Filter({
                    filters: [
                        new Filter("ProductName", FilterOperator.Contains, oSearchFieldValue),
                        new Filter("QuantityPerUnit", FilterOperator.Contains, oSearchFieldValue),
                        new Filter("Category/CategoryName", FilterOperator.Contains, oSearchFieldValue)
                    ],
                    and: false
                });

                var oList = this.getView().byId("list0");
                var binding = oList.getBinding("items");
                binding.filter(oFilter);
            }

        });
    });
