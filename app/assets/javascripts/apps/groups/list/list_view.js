ContactManager.module("GroupsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  // ---------------------------------------- item view
  List.Group = Marionette.ItemView.extend({
    template: JST['groups/item'],
    tagName: 'li',
    events: {
      'click .js-group': 'displayGroup'
    },

    initialize: function() {
      console.log('initialized group item');
      // this.listenTo(this.collection, 'add', this.childView.render);
      this.listenTo(this.model, 'change', this.render);
      // this.listenTo(this.model, 'destroy', this.remove);
    },

    zz: function() {
      console.log("gg");
      console.log(this.collection);
    },

    displayGroup: function(e) {
      console.log('displayGroup');
      e.preventDefault();
      // var view = new ContactManager.Views.ContactsShow( {model: this.model});
      // layout.mainRegion.show(view);
      this.trigger("group:show", this.model);
    }
  });

  // ---------------------------------------- collection view
  List.Groups = Marionette.CompositeView.extend({
    template: JST['groups/list'],
    childView: List.Group,
    childViewContainer: "ul"
  })
});