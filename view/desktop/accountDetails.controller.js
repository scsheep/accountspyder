sap.ui.controller("view.desktop.accountDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf accountSpyder.view.desktop.accountDetails
*/
//	onInit: function() {
//
//	},
itemSelected:function(evt){
    console.log(evt)
    
},
addKeyterm:function(){
    console.log('triggered')
    var keyTerm = "swhitfield";
    RSSQuery.findFeeds(keyTerm);
}

});