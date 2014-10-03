App.Views.ContactsItem = Backbone.Marionette.ItemView.extend({

  template: JST['contacts/item'],

  tagName: 'li',

  events: {
    'click .contact': 'displayContact'
  },

  initialize: function() {
    this.listenTo(contacts_collection, 'add', this.render);
  //   console.log('initialize ContactsListItem');
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  //   this.render();
  },

  // render: function() {
  //   console.log('render');
  //   this.$el.append(this.template( this.model.toJSON() ));
  //   return this;
  // },

  displayContact: function(e) {
    console.log('displayContact');
    e.preventDefault();
    var view = new App.Views.ContactsShow( {model: this.model});
    layout.mainRegion.show(view);
  }


});
