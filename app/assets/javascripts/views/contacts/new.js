App.Views.ContactsNew = Backbone.Marionette.ItemView.extend({

  template: JST['contacts/new'],

  events: {
    'click .save': 'saveContact'
  },

  saveContact: function(e) {
    console.log('saveContact');
    e.preventDefault();
    this.$('a .save').attr('disabled','disabled');
    var contact = new App.Models.Contact();
    var data = Backbone.Syphon.serialize(this);
    console.log(data);
    // contact.save(data, {
    //   success: function() {
    //     console.log('success');
    //     contacts_collection.add(contact);
    //     var view = new App.Views.ContactsShow( {model: contact});
    //     layout.mainRegion.show(view);
    //   },
    //   error: function() {
    //     console.log('error');
    //   },
    // });
    if (contact.save(data)){
      console.log('success');
      contacts_collection.add(contact);
      var view = new App.Views.ContactsShow( {model: contact});
      layout.mainRegion.show(view);
      layout.messageRegion.reset();
    } else {
      console.log('error');
      if (contact.validationError){
        console.log(contact.validationError);
        errors = new App.Views.Error({errors: contact.validationError});
        layout.messageRegion.show(errors);
        // layout.messageRegion.show();
      }
    }
  }

});
