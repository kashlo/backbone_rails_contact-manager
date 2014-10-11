ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  // ---------------------------------------- item view
  List.Contact = Marionette.ItemView.extend({
    template: JST['contacts/item'],
    tagName: 'li',
    events: {
      'click .js-contact': 'show'
    },

    initialize: function() {
      console.log('initialized contact item');
      // this.listenTo(this.model.collection, 'add', this.render);
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
      // this.listenTo(this.model.collection, 'add', this.tt);
    },

    show: function(e) {
      console.log('displayContact');
      e.preventDefault();
      // var view = new ContactManager.Views.ContactsShow( {model: this.model});
      // layout.mainRegion.show(view);
      this.trigger("contact:show", this.model);
    }
  });

  // ---------------------------------------- collection view
  List.Contacts = Marionette.CompositeView.extend({
    template: JST['contacts/list'],
    childView: List.Contact,
    childViewContainer: "ul",

    onShow: function(){
      ContactManager.ContactsApp.List.Controller.showCounter();
    }
  })

  List.Counter = Marionette.ItemView.extend({
    template: JST['shared/counter'],
    el: '#contacts-count',

    collectionEvents: {
      'sync add remove': 'render',
    }
  })

});