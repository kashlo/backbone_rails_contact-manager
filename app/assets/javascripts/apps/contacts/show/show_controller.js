ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){

  Show.ContactsController = {
    showContact: function(model){
      console.log("showContact called for model ", model)
      var contactView = new Show.Contact({ model: model});

      contactView.on("contact:edit", function(model){
        ContactManager.ContactsApp.Edit.ContactsController.editContact(model);
      });

      ContactManager.layout.mainRegion.show(contactView);
    }
  }

});