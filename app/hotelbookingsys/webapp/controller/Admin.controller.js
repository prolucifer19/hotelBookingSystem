sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ],
    function(BaseController,MessageToast) {
      "use strict";
  
      return BaseController.extend("hotelbooking.hotelbookingsys.controller.App", {
        onInit: function() {
        },
        onAddHotel : function(){
          console.log("function called");
          MessageToast.show("Redirecting to Add/Remove Hotel Page");
          this.getOwnerComponent().getRouter().navTo("RouteAddHotelview");
      },
      onUserInfo : function(){
          console.log("function called");
          MessageToast.show("Redirecting to User Information");
          this.getOwnerComponent().getRouter().navTo("RouteUserInfoview");
      }
      });
    }
  );
  