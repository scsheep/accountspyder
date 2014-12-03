var RSSQuery = {
    findFeeds:function() {		
        //var userKeyWords = sap.ui.getCore().getModel("userModel").keyWords;
        var companyModel = sap.ui.getCore().getModel("companyModel").getData();
        var userKeywords = ['Merger','Sale','Financial'];
        var feedList = [];
        $(userKeywords).each(function(i){
          var keysearch = userKeywords[i] +" "+companyModel.name;
          var newModel = {
                            title:userKeywords[i] +" News",
                            key:userKeywords[i],
                            news:[]
              
          }
            google.feeds.findFeeds(keysearch, function(result) {
                if (!result.error) {
                    for (var i = 0; i < result.entries.length; i++) {
                        var entry = result.entries[i];
                        
                        newModel.news.push({
                            url:entry.url,
                            favicon:location.protocol+"//s2.googleusercontent.com/s2/favicons?domain='" + entry.link + "'",
                            snippet:RSSQuery.removeHTMLTags(entry.contentSnippet)
                        });
                    }
                    feedList.push(newModel);
                    companyModel.feedList = feedList;
                    sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(companyModel),"companyModel" );
    	        }
            }); 
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