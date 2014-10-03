App.Views.ContactsNew = Backbone.Marionette.ItemView.extend({

  template: JST['contacts/new'],

  events: {
    'click .save': 'saveContact',
    'click .cancel': 'cancel'
  },

  saveContact: function(e) {
    console.log('saveContact');
    e.preventDefault();
    this.$('a .save').attr('disabled','disabled');
    var contact = new App.Models.Contact();
    var data = Backbone.Syphon.serialize(this);
    if (contact.save(data)){
      console.log('success');
      contacts_collection.add(contact);
      var view = new App.Views.ContactsShow( {model: contact});
      layout.mainRegion.show(view);
      layout.messageRegion.empty();
    } else {
      console.log('error');
      if (contact.validationError){
        console.log(contact.validationError);
        errors = new App.Views.Error({errors: contact.validationError});
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
