(function() { 

        var myAccounts = {
            accounts:[
                {
                    accountName:"Diageo",
                    pipeLineRemaining:15 ,
                    totalPipeline:10 ,
                    lastWorked:"12/05/2014",
                    ticker:"DGE.L"
                },
                 {
                    accountName:"Mondelez",
                    pipeLineRemaining:20,
                    totalPipeline:21,
                    lastWorked:"15/08/2014",
                    ticker:"MDLZ"
                },
                {
                    accountName:"BP",
                    pipeLineRemaining:20,
                    totalPipeline:21,
                    lastWorked:"15/08/2014",
                    ticker:"BP.L"
                },
                {
                    accountName:"Barclays",
                    pipeLineRemaining:20,
                    totalPipeline:21,
                    lastWorked:"15/08/2014",
                    ticker:"BARC.L"
                },
                {
                    accountName:"Marks and Spencer",
                    pipeLineRemaining:20,
                    totalPipeline:21,
                    lastWorked:"15/08/2014",
                    ticker:"MKS.L"
                },
                {
                    accountName:"Electrolux",
                    pipeLineRemaining:20,
                    totalPipeline:21,
                    lastWorked:"15/08/2014",
                    ticker:"ELUX-B.ST"
                },
                {
                    accountName:"EC",
                    pipeLineRemaining:20,
                    totalPipeline:21,
                    lastWorked:"15/08/2014",
                    ticker:"ECM.L"
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
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(myAccounts),"myAccounts" );
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(userModel),"userModel" );
    })();