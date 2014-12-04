var RSSQuery = {
    findFeeds:function(keyWord) {
         var companyModel = sap.ui.getCore().getModel("companyModel").getData();
        if(keyWord === null || keyWord === undefined){
        //var userKeyWords = sap.ui.getCore().getModel("userModel").keyWords;
       
        var userKeywords = ['Merger','Sale','Financial'];
        var feedList = [];
        $(userKeywords).each(function(i){
          var keysearch = userKeywords[i] +" "+companyModel.name;
          var newModel = {
                            title:userKeywords[i] +" News",
                            key:userKeywords[i],
                            news:[]
          };
        RSSQuery.googleIT(keysearch,newModel,feedList,companyModel);
    
          
        });
        companyModel.feedList = feedList;
        //set the model
        sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(companyModel),"companyModel" );
        }else{
               var newModel = {
                            title:keyWord+" News",
                            key:keyWord,
                            news:[]
          };
         RSSQuery.googleIT(keyWord, newModel,companyModel.feedList,companyModel);
          
        }
    

    },
    googleIT:function(keyWords,newModel,feedList,companyModel){
        google.feeds.findFeeds(keyWords, function(result) {
                if (!result.error) {
                    for (var i = 0; i < result.entries.length; i++) {
                        var entry = result.entries[i];
                        
                        newModel.news.push({
                            url:entry.url,
                            favicon:location.protocol+"//getfavicon.appspot.com/" + entry.link,
                            title:RSSQuery.removeHTMLTags(entry.title),
                            link:entry.link,
                            snippet:RSSQuery.removeHTMLTags(entry.contentSnippet)
                        });
                    }
                    
                    feedList.push(newModel);
                    companyModel.feedList = feedList;
                    sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(companyModel),"companyModel" );
                    
    	        }
            }); 
    },
    
    removeHTMLTags:function(snippet){
        var cleanHTML = 
			snippet.replace(/&(lt|gt);/g, function (strMatch, p1){
 		 		return (p1 === "lt")? "<":">" ;
				});
 		return cleanHTML.replace(/<\/?[^>]+(>|$)/g, "");
    },
    getNews:function(feedName){
        var companyModelData = sap.ui.getCore().getModel("companyModel").getData();
        var feedList = companyModelData.feedList;
        var feedModel = feedList[feedName];
        
        var feed = new google.feeds.Feed(feedModel.uri);
		feed.setNumEntries(20); 
		var fullReports = [];
		feed.load(function(result) {
			if (!result.error) {
				for (var c = 0; c < result.feed.entries.length; c++) {
				    var entry = result.feed.entries[c];
				    
				    fullReports.push(entry);
				}
			}
		});
		feedModel.fullReports = fullReports;
		feedList[feedName] = feedModel;
		companyModelData.feedList = feedList;
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(companyModelData),'companyModel' );
    }
};