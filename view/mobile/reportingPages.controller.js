sap.ui.controller("view.mobile.reportingPages", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.mobile.reportingPages
*/
	onInit: function() {
    console.log( sap.ui.getCore().getModel('companyModel'));
    var companyModel = sap.ui.getCore().getModel('companyModel');
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.mobile.reportingPages
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.mobile.reportingPages
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.mobile.reportingPages
*/
//	onExit: function() {
//
//	},
backPage:function() {
        var app = sap.ui.getCore().byId("idApp");
	    app.backToPage("idmobileMain");
}

});