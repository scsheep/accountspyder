sap.ui.controller("view.mobile.accountList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf accountSpyder.view.mobile.accountList
*/
	onInit: function() {
	    var myAccounts = {
            accounts:[
                {
                    accountName:"Diageo",
                    pipeLineRemaining:15 ,
                    totalPipeline:10 ,
                    lastWorked:"12/05/2014"
                },
                 {
                    accountName:"Mondelez",
                    pipeLineRemaining:20,
                    totalPipeline:21,
                    lastWorked:"15/08/2014"
                },
                 {
                    accountName:"Acme Accounting",
                    pipeLineRemaining:1,
                    totalPipeline:7,
                    lastWorked:"20/11/2014"
                },
                 {
                    accountName:"CompriseIT",
                    pipeLineRemaining:0,
                    totalPipeline:0,
                    lastWorked:"25/11/2014"
                }
                ]
        };
	    
	    var userModel = {
	        firstName:"Sean",
            surname:"Campbell",
            region:"UK, Midlands",
            cover:17,
            currency:"GBP"
        };
        //setup function for the model in the final app this is where we will call C4C to obtain 
        //logged in user and the accounts directly assigned to them, 
        sap.ui.core.setModel(new sap.ui.model.json.JSONModel(myAccounts),'myAccounts');
        sap.ui.core.setModel(new sap.ui.model.json.JSONModel(userModel),'userModel' );
        
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf accountSpyder.view.mobile.accountList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf accountSpyder.view.mobile.accountList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf accountSpyder.view.mobile.accountList
*/
//	onExit: function() {
//
//	}

});