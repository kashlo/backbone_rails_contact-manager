App.Views.ContactsEdit = Backbone.Marionette.ItemView.extend({

  template: JST['contacts/edit'],

  events: {
    'click .save': 'saveContact',
    'click .cancel': 'back'
  },

  saveContact: function(e) {
    e.preventDefault();
    this.$('button .update').attr('disabled','disabled');
    console.log('saveContact');
    var contact = this.model;
    var data = Backbone.Syphon.serialize(this);
    if (contact.save(data)){
      console.log('success');
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
  },

  back: function() {
    console.log('back')
    layout.messageRegion.reset();
    layout.mainRegion.reset();
    // view = new App.Views.ContactsEdit( {model: this.model});
  }


});
