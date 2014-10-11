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
      this.listenTo(this.model, 'change', this.render);
      // this.listenTo(this.model, 'destroy', this.remove);
    },

    // render: function(){
    //   console.log('render group item');
    // },

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
    childViewContainer: "ul",

    onShow: function(){
      ContactManager.GroupsApp.List.Controller.showCounter();
    }
    // initialize: function() {
    //   this.listenTo(this.collection, 'add', this.render);
    // }
  })

  List.Counter = Marionette.ItemView.extend({
    template: JST['shared/counter'],
    el: '#groups-count',

    collectionEvents: {
      'sync add remove': 'render',
    }
  })
});