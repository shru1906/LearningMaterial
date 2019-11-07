sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Sorter",
	"sap/ui/table/library",
		"sap/ui/model/Filter"

], function (Controller) {
	"use strict";

	return Controller.extend("mtable.MTable.controller.View1", {
		onInit: function () {
var oData = new sap.ui.model.json.JSONModel();
			oData.loadData("./model/DataJson.json");
			this.getView().setModel(oData, "oData1");
		}
	});
});