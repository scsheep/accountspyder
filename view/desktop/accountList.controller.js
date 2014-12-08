sap.ui.controller("view.desktop.accountList", {

	onInit: function() {
        //Create the application model 
        var data = {};
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(data),"applicationModel");
	},
	
navigateCompany:function(evt){
    var applicationModelData = sap.ui.getCore().getModel("applicationModel").getData();
    var currentModel = sap.ui.getCore().getModel("companyModel").getData();
    var name = evt.getSource().getBindingContext("myAccounts").getObject().accountName;
    var ticker = evt.getSource().getBindingContext("myAccounts").getObject().ticker;
    var companyModelData = {};
    
     console.log(sap.ui.getCore().getModel('financeModel').getData());
   
    //Set the application model using the current companyModel this way we dont need to reload the rssfeeds if they are current. 
     currentModel.lastRead = new Date();
     currentModel.currentData = sap.ui.getCore().getModel("financeModel").getData();
     currentModel.historicData = sap.ui.getCore().getModel("historicFinanceModel").getData();

    applicationModelData[currentModel.name] = currentModel;

    companyModelData.name = name;
    companyModelData.ticker = ticker;
    
    
    //check for the selected business name againszt the existing application model
    if(applicationModelData[name] !== undefined && applicationModelData[name].lastRead !== undefined){
    
        companyModelData = applicationModelData[name];
        var financeModelData = companyModelData.currentData;
        var historicModelData = companyModelData.historicData;
        
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(financeModelData),"financeModel");
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel( historicModelData),"historicFinanceModel");
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(companyModelData),"companyModel");
    }else{
        //doesnt exist in the application model so we are going to load a fresh version of the RSS feeds. 
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(companyModelData),"companyModel");
        RSSQuery.findFeeds(null);
        Finance.getQuote();
        Finance.historicFinanceModel();
    }
    
        
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(applicationModelData),"applicationModel");
        console.log(sap.ui.getCore().getModel('applicationModel').getData());
}
});