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
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(myAccounts),'myAccounts');
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(userModel),'userModel' );
        
	},
	navigateCompany:function(){
	alert('click');
	}


});