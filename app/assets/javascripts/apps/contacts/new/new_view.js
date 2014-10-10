ContactManager.module("ContactsApp.New", function(New, ContactManager, Backbone, Marionette, $, _){

  New.Contact = Marionette.ItemView.extend({

    template: JST['contacts/new'],

    events: {
      'click .save': 'save',
      'click .cancel': 'cancel'
    },

    initialize: function(options){
      this.groups = options.groups;
    },

    onShow: function(){
      this.renderGroupSelect(this.groups);
    },

    save: function(e) {
      console.log('saveContact');
      e.preventDefault();
      ContactManager.ContactsApp.New.Controller.save(this);

      // var contact = ContactManager.request("contact:create");
      // contacts_collection = ContactManager.request("contact:entities");
    },

    cancel: function() {
      console.log('cancel')
      // layout.messageRegion.empty();
      // layout.mainRegion.reset();
      this.remove();
      // view = new App.Views.ContactsEdit( {model: this.model});
    },

    renderGroupSelect :function (group_collection) {
      console.log('renderGroupSelect', group_collection);
      console.log(this.$el);
      console.log(this.$('select'));
      console.log(this.$('#group_id'));
      // var that = this
      group_collection.each(function(item){
        console.log(item);
        this.$('#group_id').append("<option value='"+item.get('id')+"'>"+item.get('name')+"</option>");
      }, this)
    }
  });

});