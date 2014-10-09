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
      ContactManager.ContactsApp.New.Controller.saveContact(this);

      // var contact = ContactManager.request("contact:create");
      // contacts_collection = ContactManager.request("contact:entities");
    },

    cancel: function() {
      console.log('cancel')
      // layout.messageRegion.empty();
      // layout.mainRegion.reset();
      this.remove();
      // view = new App.Views.ContactsEdit( {model: this.model});
    }
  });

});