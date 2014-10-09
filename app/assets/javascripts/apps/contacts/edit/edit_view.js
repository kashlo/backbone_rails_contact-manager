ContactManager.module("ContactsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){

  Edit.Contact = Marionette.ItemView.extend({
    template: JST['contacts/edit'],

    tagName: 'form',

    events: {
      'click .save': 'updateContact',
      'click .cancel': 'cancel'
    },

    updateContact: function(e) {
      console.log('saveContact');
      e.preventDefault();
      ContactManager.ContactsApp.Edit.Controller.updateContact(this);
    },

    cancel: function() {
      console.log('cancel')
      this.remove();
    }
  });

});