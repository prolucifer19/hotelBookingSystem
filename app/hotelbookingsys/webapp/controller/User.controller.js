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
       onBookHotel : function(){
        MessageToast.show("Redirecting to Booking Page!");
        this.getOwnerComponent().getRouter().navTo("RouteBookHotelview"); 
       },
       onBookingHistory : function(){
        MessageToast.show("Redirecting to Booking History!");
        this.getOwnerComponent().getRouter().navTo("RouteBookingHistoryview"); 
       }
      });
    }
  );
  