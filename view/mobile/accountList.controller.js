sap.ui.controller("view.mobile.accountList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf accountSpyder.view.mobile.accountList
*/
	onInit: function() {
	  this.setIdentifiers();
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
	},
	setIdentifiers:function(){
	    //Little function to set the back ground colors based on pipeline algorithm 
	    var myAccounts = sap.ui.gteCore().getModel('myAccounts').getData().accounts;
	 
	    $(myAccounts).each(function(i){
	       // var account = myAccounts[i];
	       // var pipeline = account.pipeLineRemaining;
	       // var totalPipe = account.totalPipeline;
	       // var lastWorked
	    })
	}


});