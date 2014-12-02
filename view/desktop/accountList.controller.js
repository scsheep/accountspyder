sap.ui.controller("view.desktop.accountList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf accountSpyder.view.desktop.accountList
*/
	onInit: function() {
        sap.m.StandardListItem.extend("HoverList", {
 
            // the control API:
            metadata : {
                events : {
                    hover : {}
                }
            },
            // the hover event handler:
            onmouseover : function(evt) {   // is called when the Button is hovered - no event registration required
                this.fireHover();
            },

            renderer : {}
        });
        
	},
navigateCompany:function(){
    
},
companyHover:function(){
    alert("hovered");
}
});