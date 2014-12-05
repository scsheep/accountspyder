sap.ui.controller("view.mobile.reportingPages", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.mobile.reportingPages
*/
	onInit: function() {
	   reportingPagesController = this;
		
		this.getView().addEventDelegate({
			onBeforeShow: function() {
				reportingPagesController.onBeforeShow();
			}
		});	
    
	},

onBeforeShow : function() {
    var historicModelData = {};
    sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(historicModelData),"historicFinanceModel");
        Finance.getQuote();
        var dt = new Date();
        dt.setMonth(dt.getMonth() - 1);
        Finance.getHistoricData(dt);
        var historicModel = sap.ui.getCore().getModel("historicFinanceModel").getData();
        console.log("finance modelRP***");
    console.log(historicModel );
    var companyModel = sap.ui.getCore().getModel("companyModel");
    var oVizFrame = this.getView().byId("idVizFrameLine");
    var oPopOver = this.getView().byId("idPopOver");

    console.log(companyModel);
    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
        dimensions:[
                      {
                      name: "Date",
                      value: {
                                            path : '{historicFinanceModel>Date}' ,
                                            formatter : function(fval) {
                                              jQuery.sap.require("sap.ui.core.format.DateFormat");
                                              var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "dd-MM"});
                                              return oDateFormat.format(new Date(fval));
                     
                                            }
                             }
                      }
                    ],
                    measures : [
                      {
                        name : 'High',
                        value: {
                             path : '{historicFinanceModel>high}'
                        }
                      }, {
                        name : 'Low',
                        value: {
                             path : '{historicFinanceModel>low}'
                        }    
	                }
	                ],
	                data : {
                        path : "{historicFinanceModel}"
                    }
                    
    });
    
    
    oVizFrame.setDataset(oDataset);
    oPopOver.connect(oVizFrame.getVizUid());
    
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