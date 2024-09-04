sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("hotelbooking.hotelbookingsys.controller.App", {
        onInit: function() {
        },
        onSubmitlogin : function(){
            let onsubmit = this.getOwnerComponent().getRouter();
            onsubmit.navTo("RouteUserview");
        }
      });
    }
  );
  