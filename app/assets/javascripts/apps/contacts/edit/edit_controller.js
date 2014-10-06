ContactManager.module("ContactsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){

  Edit.ContactsController = {
    // showContact: function(model){
    //   console.log("showContact called for model ", model)
    //   var contactView = new Show.Contact({ model: model});
    //   ContactManager.layout.mainRegion.show(contactView);
    // }

    editContact: function(model){
      console.log("editContact called for model ", model)
      var contactView = new Edit.Contact({ model: model});

      contactView.on("contact:show", function(model){
        ContactManager.ContactsApp.Show.ContactsController.showContact(model);
      });

      ContactManager.layout.mainRegion.show(contactView);
    }
  }

});