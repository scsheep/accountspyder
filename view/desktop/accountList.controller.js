sap.ui.controller("view.desktop.accountList", {

	onInit: function() {
        //Create the application model 
        var data = {customers:{}};
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(data),"applicationModel");
        
        var companyModelData = {};
        companyModelData.name = "Diageo";
        companyModelData.ticker = "DGE.L";
        companyModelData.finance = {
            dataSheet:{},
            historic:[]
        };
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(companyModelData),"companyModel");
        RSSQuery.findFeeds();
        Finance.getQuote();
        var dt = new Date();
        dt.setMonth(dt.getMonth() - 1);
        Finance.getHistoricData(dt);
	},
	
navigateCompany:function(evt){
    var applicationModelData = sap.ui.getCore().getModel("applicationModel").getData();
    var currentModel = sap.ui.getCore().getModel("companyModel").getData();
    var name = evt.getSource().getBindingContext("myAccounts").getObject().accountName;
    var ticker = evt.getSource().getBindingContext("myAccounts").getObject().ticker;
    var companyModelData = {};
   
    //Set the application model using the current companyModel this way we dont need to reload the rssfeeds if they are current. 
     currentModel.lastRead = new Date();
     currentModel.finance = {
         currentData:sap.ui.getCore().getModel("financeModel").getData(),
         historicData:sap.ui.getCore().getModel("historicFinanceModel").getData()
     };
    applicationModelData[currentModel.name] = currentModel;

    companyModelData.name = name;
    companyModelData.ticker = ticker;
    
    
    //check for the selected business name againszt the existing application model
    if(applicationModelData[name] !== undefined && applicationModelData[name].lastRead !== undefined){
        //TODO add an extra check here against the last read date this will keep it current instead of just loading once
        companyModelData = applicationModelData[name];
        console.log(companyModelData);
    }else{
        //doesnt exist in the application model so we are going to load a fresh version of the RSS feeds. 
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(companyModelData),"companyModel");
        RSSQuery.findFeeds(null);
        Finance.getQuote();
        var dt = new Date();
        dt.setMonth(dt.getMonth() - 1);
        Finance.getHistoricData(dt);
    }
    
    
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(applicationModelData),"applicationModel");
        console.log(sap.ui.getCore().getModel('applicationModel').getData());
}
});