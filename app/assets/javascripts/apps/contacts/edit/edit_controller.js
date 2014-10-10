ContactManager.module("ContactsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){

  Edit.Controller = {
    // showContact: function(model){
    //   console.log("showContact called for model ", model)
    //   var contactView = new Show.Contact({ model: model});
    //   ContactManager.layout.mainRegion.show(contactView);
    // }

    editContact: function(model){
      console.log("editContact called for model ", model)
      var groups = ContactManager.request("group:entities");
      var contactView = new Edit.Contact({ model: model, groups: groups});
      ContactManager.layout.mainRegion.show(contactView);
    },

    updateContact: function(view){
      var contact = view.model;
      var data = Backbone.Syphon.serialize(view);

      if (contact.save(data)){
        console.log('success');
        ContactManager.ContactsApp.Show.Controller.showContact(contact);
      } else {
        console.log('error');
        if (contact.validationError){
          console.log(contact.validationError);
          // errors = new ContactManager.Views.Error({errors: contact.validationError});
          // layout.messageRegion.show(errors);
          // layout.messageRegion.show();
        }
      }
    }
  }

});