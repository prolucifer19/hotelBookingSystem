sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/ui/core/Fragment',
    "sap/m/Dialog",
],
function (Controller,Fragment,JSONModel,Dialog) {
    "use strict";

    return Controller.extend("hotelbooking.hotelbookingsys.controller.HotelBooking", {
        onInit: function () {

        },

        onLogin : function(){
            if (!this._oLoginDialogItem) {
                this._oLoginDialogItem = sap.ui.xmlfragment("hotelbooking.hotelbookingsys.fragments.onLogin", this);
                //oView.addDependent(this._oLoginDialogItem);
            }
            this._oLoginDialogItem.open();
            // console.log("login fragment called");
        },

		onCloseLoginDialog : function () {
			this._oLoginDialogItem.close();
		},
        onSignup : function(){
            if (!this._oSignupDialogItem) {
                this._oSignupDialogItem = sap.ui.xmlfragment("hotelbooking.hotelbookingsys.fragments.onSignup", this);
                // console.log("signup fragment called");
                //oView.addDependent(this._oDialogItem);
            }
            this._oSignupDialogItem.open();
        },

		onCloseSignupDialog : function () {
			this._oSignupDialogItem.close();
		},
        // if (ipUsername=="ADMIN") {
            
        // } else {
        //     
            
        // }
        
        onSubmitlogin : function(){
                    let onsubmit = this.getOwnerComponent().getRouter();
                    onsubmit.navTo("RouteUserview");
                }
        
        
    });
   
});
