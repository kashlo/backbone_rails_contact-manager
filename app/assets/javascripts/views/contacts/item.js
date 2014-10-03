App.Views.ContactsItem = Backbone.Marionette.ItemView.extend({

  template: JST['contacts/item'],

  tagName: 'li',

  events: {
    'click .contact': 'displayContact'
  },

  initialize: function() {
    this.listenTo(contacts_collection, 'add', this.render);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },


  displayContact: function(e) {
    console.log('displayContact');
    e.preventDefault();
    var view = new App.Views.ContactsShow( {model: this.model});
    layout.mainRegion.show(view);
  }


});
