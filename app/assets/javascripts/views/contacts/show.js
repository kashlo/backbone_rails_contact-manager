App.Views.ContactsShow = Backbone.Marionette.ItemView.extend({

  template: JST['contacts/show'],

  events: {
    'click .delete': 'deleteContact',
    'click .edit': 'editContact'
  },

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
  },

  deleteContact: function(e) {
    console.log('deleteContact');
    console.log(this.model.toJSON());
    this.model.destroy();
  },

  editContact: function() {
    console.log('editContact');
    var view = new App.Views.ContactsEdit( {model: this.model});
    layout.mainRegion.show(view);
  }

});
