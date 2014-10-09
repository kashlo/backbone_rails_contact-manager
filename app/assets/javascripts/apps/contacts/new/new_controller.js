ContactManager.module("ContactsApp.New", function(New, ContactManager, Backbone, Marionette, $, _){

  New.Controller = {
    newContact: function(){
      console.log("newContact called for model ")
      var contactView = new New.Contact();

      ContactManager.layout.mainRegion.show(contactView);
    },

    saveContact: function(view){
      console.log("saveContact called for model ")
      console.log(view);
      var contact = ContactManager.request("contact:new");
      var contacts_collection = ContactManager.request("contact:entities");
      var data = Backbone.Syphon.serialize(view);

      if (contact.save(data)){
        console.log('success');
        contacts_collection.add(contact);
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