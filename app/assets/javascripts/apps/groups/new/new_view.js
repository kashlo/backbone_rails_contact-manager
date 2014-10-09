ContactManager.module("GroupsApp.New", function(New, ContactManager, Backbone, Marionette, $, _){

  New.Group = Marionette.ItemView.extend({

    template: JST['groups/new'],

    events: {
      'click .save': 'saveGroup',
      'click .cancel': 'cancel'
    },

    saveGroup: function(e) {
      console.log('saveGroup');
      e.preventDefault();
      ContactManager.GroupsApp.New.Controller.saveGroup(this);
    },

    cancel: function() {
      console.log('cancel')
      layout.messageRegion.empty();
      // layout.mainRegion.reset();
      layout.mainRegion.empty();
      // view = new App.Views.ContactsEdit( {model: this.model});
    }
  });

});