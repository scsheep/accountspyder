sap.ui.controller("view.mobile.accountList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf accountSpyder.view.mobile.accountList
*/
	onInit: function() {
	   
	},
	navigateCompany:function(evt){
	    
	    var itemClick = evt.getSource().getBindingContext("myAccounts").getObject();
	    var companyModelData = {};
        companyModelData.name = itemClick;
        companyModelData.ticker = "DGE.L";
        companyModelData.finance = {
            dataSheet:{},
            historic:[]
        };
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(companyModelData),"companyModel");
        RSSQuery.findFeeds();
       
	   //var companyModel = {companyName:itemClick};
	   //RssQuery.getFeeds
	    var app = sap.ui.getCore().byId("idApp");
	    app.to("idreportingPage");
	}


});