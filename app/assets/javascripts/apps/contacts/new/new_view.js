ContactManager.module("ContactsApp.New", function(New, ContactManager, Backbone, Marionette, $, _){

  New.Contact = Marionette.ItemView.extend({

    template: JST['contacts/new'],

    events: {
      'click .save': 'saveContact',
      'click .cancel': 'cancel'
    },

    saveContact: function(e) {
      console.log('saveContact');
      e.preventDefault();
      // var contact = ContactManager.request("contact:create");
      // contacts_collection = ContactManager.request("contact:entities");
      var data = Backbone.Syphon.serialize(this);
      if (contact.save(data)){
        console.log('success');
        contacts_collection.add(contact);
        var view = new ContactManager.Views.ContactsShow( {model: contact});
        layout.mainRegion.show(view);
        layout.messageRegion.empty();
      } else {
        console.log('error');
        if (contact.validationError){
          console.log(contact.validationError);
          errors = new ContactManager.Views.Error({errors: contact.validationError});
          layout.messageRegion.show(errors);
          // layout.messageRegion.show();
        }
      }
    },

    cancel: function() {
      console.log('cancel')
      layout.messageRegion.empty();
      // layout.mainRegion.reset();
      layout.mainRegion.empty();
      // view = new App.Views.ContactsEdit( {model: this.model});
    }
  });

});