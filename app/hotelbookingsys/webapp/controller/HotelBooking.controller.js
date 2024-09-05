sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/m/Dialog",
    "sap/m/MessageToast"
],
function (Controller, JSONModel, Fragment, Dialog, MessageToast) {
    "use strict";

    return Controller.extend("hotelbooking.hotelbookingsys.controller.HotelBooking", {
        onInit: function () {
            // Initialization code, if needed
        },

        onLogin: function() {
            if (!this._oLoginDialogItem) {
                this._oLoginDialogItem = sap.ui.xmlfragment("hotelbooking.hotelbookingsys.fragments.onLogin", this);
                this.getView().addDependent(this._oLoginDialogItem); // Add dependent to the view
            }
            this._oLoginDialogItem.open();
            
        },
        onShowPasswordToggle: function (oEvent) {
            // Get the state of the checkbox
            var bSelected = oEvent.getParameter("selected");

            // Get the password input field from the fragment using sap.ui.getCore().byId
            var oPasswordInput = sap.ui.getCore().byId("ipPassword");

            // Toggle the password visibility
            if (bSelected) {
                oPasswordInput.setType("Text");
            } else {
                oPasswordInput.setType("Password");
            }
        },
        onShowPasswordTogglesu: function (oEvent) {
            // Get the state of the checkbox
            var bSelected = oEvent.getParameter("selected");

            // Get the password input field from the fragment using sap.ui.getCore().byId
            var oPasswordInput = sap.ui.getCore().byId("inputPassword");

            // Toggle the password visibility
            if (bSelected) {
                oPasswordInput.setType("Text");
            } else {
                oPasswordInput.setType("Password");
            }
        },

        onCloseLoginDialog: function() {
            this._oLoginDialogItem.close();
        },

        onSignup: function() {
            if (!this._oSignupDialogItem) {
                this._oSignupDialogItem = sap.ui.xmlfragment("hotelbooking.hotelbookingsys.fragments.onSignup", this);
                this.getView().addDependent(this._oSignupDialogItem); // Add dependent to the view
            }
            this._oSignupDialogItem.open();
        },
        onsubmitSignup : function(){
            var suUsername = sap.ui.getCore().byId("inputusername").getValue();
            var suemail = sap.ui.getCore().byId("ipEmail").getValue();
            var supassword = sap.ui.getCore().byId("inputPassword").getValue();

            if(!suUsername || !supassword || !suemail){
                MessageToast.show("Please Fill in All The Entries!");
                return;
            }
            else{
            MessageToast.show("User Registered Successfully!Please Log In!");
            this._oSignupDialogItem.close();
            }
        },
        onCloseSignupDialog: function() {
            this._oSignupDialogItem.close();
        },
        // onsubmitSignup : function(){
        //     this._oSignupDialogItem.close();
        // }

        onSubmitlogin: function() {
            // Retrieve input values from the dialog
            var sUsername = sap.ui.getCore().byId("ipUsername").getValue();
            var sPassword = sap.ui.getCore().byId("ipPassword").getValue();

            // Check for null or empty values
            if (!sUsername || !sPassword) {
                MessageToast.show("Please enter both username and password.");
                return; // Exit the function if validation fails
            }

            // Hardcoded admin credentials
            var sAdminUsername = "admin";
            var sAdminPassword = "admin";
            var sUserUsername = "user";
            var sUserPassword = "user";

            // Check credentials
            if (sUsername === sAdminUsername && sPassword === sAdminPassword) {
                MessageToast.show("Login successful!");
                this.onCloseLoginDialog(); // Close the dialog after successful login
                this.getOwnerComponent().getRouter().navTo("RouteAdminview");
                //this.getOwnerComponent().getRouter().navTo("RouteUserview"); // Navigate to user view
            } 
            else if(sUsername === sUserUsername && sPassword === sUserPassword){
                MessageToast.show("Login successful!");
                this.onCloseLoginDialog(); // Close the dialog after successful login
                //this.getOwnerComponent().getRouter().navTo("RouteAdminview");
                this.getOwnerComponent().getRouter().navTo("RouteUserview"); 
            }
            else {
                MessageToast.show("Invalid username or password.");
            }
        },

    });
});









