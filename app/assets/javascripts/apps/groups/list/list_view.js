ContactManager.module("GroupsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  // ---------------------------------------- item view
  List.Group = Marionette.ItemView.extend({
    template: JST['groups/item'],
    tagName: 'li',
    events: {
      // 'click .js-contact': 'displayContact'
    },

    initialize: function() {
      // this.listenTo(this.model.collection, 'add', this.render);
      // this.listenTo(this.model, 'change', this.render);
      // this.listenTo(this.model, 'destroy', this.remove);
    },

    // displayContact: function(e) {
    //   console.log('displayContact');
    //   e.preventDefault();
    //   // var view = new ContactManager.Views.ContactsShow( {model: this.model});
    //   // layout.mainRegion.show(view);
    //   this.trigger("contact:show", this.model);
    // }
  });

  // ---------------------------------------- collection view
  List.Groups = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: List.Group
  })
});