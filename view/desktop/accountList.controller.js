sap.ui.controller("view.desktop.accountList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf accountSpyder.view.desktop.accountList
*/
	onInit: function() {
        var companyModelData = {name:'Diageo'};
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(companyModelData),'companyModel');
        RSSQuery.findFeeds();
console.log( sap.ui.getCore().getModel('companyModel'))
       
	},
navigateCompany:function(){
      
    
}

});