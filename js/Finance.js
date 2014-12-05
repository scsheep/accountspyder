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

    
    /**
     * 
     * The code below this point is written in an attempt to tidy up the functionality and increase speed
     * 
     */
    historicFinanceModel:function(){
        var companyModel = sap.ui.getCore().getModel('companyModel').getData();
        var ticker = companyModel.ticker;
       
        //time and start date
        var dataNeeded = {
            week:{date:Finance.createStartDate(7),title:'week'},
            month:{date:Finance.createStartDate(31),title:'month'},
            quarter:{date:Finance.createStartDate(93),title:'quarter'},
            year:{date:Finance.createStartDate(365),title:'year'}
        };
        var financeModelData = {
            filters:[]
        };
        var financialModel = (sap.ui.getCore().getModel('historicFinancialModel') !== undefined) ? sap.ui.getCore().getModel('historicFinancialModel') : new sap.ui.model.json.JSONModel(financeModelData);
        
        //step through the data needed and create the correct dates
        for(var i in dataNeeded){
                if(i !== null){
                var name = dataNeeded[i].title;
                var date = dataNeeded[i].date;
                
                Finance.makeQuery(name,date,ticker,financialModel);
                }
                
            }
        },
 
    makeQuery:function(name,date,ticker,financialModel){
        var endDate = Finance.createStartDate(1);
        var yqlQuery = "select * from yahoo.finance.historicaldata where symbol = '"+ticker+"' and startDate = '"+date+"'and endDate = '"+endDate+"'";
        var queryURL = location.protocol+"//query.yahooapis.com/v1/public/yql?q="+yqlQuery+"&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys";
                    
        $.getJSON(queryURL,function(json){
            var data = financialModel.getData();
            data.filters.push({
                    title:name,
                    data:json.query.results.quote
            });
            sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(data),'historicFinanceModel');
        }); 
    },
    createStartDate:function(days){
        var dt = new Date();
        dt.setDate(dt.getDate() - days);
        function zeroIndex(number){
            number = parseInt(number,10);
            if(number < 10){
                number = "0"+number;
            }
            return number;
        }
        var formattedDate =  ""+dt.getFullYear()+"-"+zeroIndex(dt.getMonth()+1)+"-"+zeroIndex(dt.getDate());
        return formattedDate;
    }
    
};