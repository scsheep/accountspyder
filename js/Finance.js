var Finance = {
    getQuote:function(){
        var companyModel = sap.ui.getCore().getModel('companyModel').getData();
        var ticker = companyModel.ticker;
        
        //Current Data
        var yqlURL = location.protocol+"//query.yahooapis.com/v1/public/yql?q=";
        var dataFormat = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        var realtimeQ = yqlURL + "select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + ticker + "%22)%0A%09%09&" + dataFormat;
        $(function () {
            $.getJSON(realtimeQ, function (json) {
                sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(json.query.results.quote),  "financeModel");
            }); //End CallBack
        });//End Anon
    },
        
        
    getHistoricData:function(startDate){
        var companyModel = sap.ui.getCore().getModel('companyModel').getData();
        var ticker = companyModel.ticker;

    
    
        function zeroIndex(number){
            number = parseInt(number,10);
            if(number < 10){
                number = "0"+number;
            }
            return number;
        }
        
        startDate =  ""+startDate.getFullYear()+"-"+zeroIndex(startDate.getMonth()+1)+"-"+zeroIndex(startDate.getDate());   
        
        //Assume end date will always be today    
        var endDate = new Date();    
        endDate = ""+endDate.getFullYear()+"-"+zeroIndex(endDate.getMonth()+1)+"-"+zeroIndex(endDate.getDate());        
      
     
        
        //this will be the historic data. Initial call will hit this to get first graph ???    
        var yqlQuery = "select * from yahoo.finance.historicaldata where symbol = '"+ticker+"' and startDate = '"+startDate+"'and endDate = '"+endDate+"'";
        var queryURL = location.protocol+"//query.yahooapis.com/v1/public/yql?q="+yqlQuery+"&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys";
        $(function(){
            $.getJSON(queryURL,function(json){
               sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(json.query.results.quote),  "historicFinanceModel");
            });
        });
    }
    
};