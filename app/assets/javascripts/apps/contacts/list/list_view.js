ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  // ---------------------------------------- item view
  List.Contact = Marionette.ItemView.extend({
    template: JST['contacts/item'],
    tagName: 'li',
    events: {
      'click .js-contact': 'displayContact'
    },

    initialize: function() {
      this.listenTo(this.model.collection, 'add', this.render);
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    displayContact: function(e) {
      console.log('displayContact');
      e.preventDefault();
      // var view = new ContactManager.Views.ContactsShow( {model: this.model});
      // layout.mainRegion.show(view);
      this.trigger("contact:show", this.model);
    }
  });

  // ---------------------------------------- collection view
  List.Contacts = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: List.Contact
  })
});