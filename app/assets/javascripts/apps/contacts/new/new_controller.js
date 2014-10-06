ContactManager.module("ContactsApp.New", function(New, ContactManager, Backbone, Marionette, $, _){

  New.ContactsController = {
    newContact: function(){
      console.log("newContact called for model ")
      var contactView = new New.Contact();

      // contactView.on("contact:edit", function(model){
      //   ContactManager.ContactsApp.Edit.Controller.editContact(model);
      // });

      ContactManager.layout.mainRegion.show(contactView);
    }
  }

});