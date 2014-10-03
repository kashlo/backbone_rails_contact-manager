App.Views.ContactsIndex = Backbone.Marionette.CollectionView.extend({

    tagName: "ul",
    childView: App.Views.ContactsItem

  // el: "#contact-mmanager",

  // initialize: function() {
  //   console.log('Views.ContactsIndex initialize');
  //   this.listenTo(contacts_collection, 'reset', this.addAll);
  //   // this.render();
  // },

  // events: {
  //   'click #add-contact': 'addContact'
  // },

  // render: function() {
  //   // this.addAll();
  //   return this;
  // },

  // addAll: function() {
  //   console.log('addAll');
  //   console.log(contacts_collection);
  //   contacts_collection.each(this.addOne, this);
  // },

  // addOne: function(contact) {
  //   console.log('addOne');
  //   console.log(contact.toJSON());
  //   var view = new App.Views.ContactsListItem( {model: contact});

  // },

  // addContact: function() {
  //   console.log('addContact');
  //   var view = new App.Views.ContactsNew();
  // }

});
