sap.ui.controller("view.desktop.accountList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf accountSpyder.view.desktop.accountList
*/
	onInit: function() {
       
	},
navigateCompany:function(evt){
    var companyModelData = {}
    companyModelData.name = evt.getSource().getBindingContext('myAccounts').getObject().accountName;
    sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(companyModelData),"companyModel");
    RSSQuery.findFeeds();
    
}

});