ContactManager.module("ContactsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){

  Edit.Contact = Marionette.ItemView.extend({
    template: JST['contacts/edit'],

    tagName: 'form',

    events: {
      'click .save': 'saveContact',
      'click .cancel': 'cancel'
    },

    saveContact: function(e) {
      e.preventDefault();
      console.log('saveContact');
      var contact = this.model;
      var data = Backbone.Syphon.serialize(this);
      if (contact.save(data)){
        console.log('success');
        this.trigger("contact:show", contact);
      } else {
        console.log('error');
        if (contact.validationError){
          console.log(contact.validationError);
          // errors = new ContactManager.Views.Error({errors: contact.validationError});
          // layout.messageRegion.show(errors);
          // layout.messageRegion.show();
        }
      }
    },

    cancel: function() {
      console.log('cancel')
      layout.mainRegion.empty();
    }
  });

});