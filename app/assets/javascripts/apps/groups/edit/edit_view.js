ContactManager.module("GroupsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){

  Edit.Group = Marionette.ItemView.extend({
    template: JST['groups/edit'],

    tagName: 'form',

    events: {
      'click .js-save': 'update',
      'click .js-cancel': 'cancel'
    },

    update: function(e) {
      console.log('save group');
      e.preventDefault();
      ContactManager.GroupsApp.Edit.Controller.update(this);
    },

    cancel: function() {
      console.log('cancel')
      this.remove();
    }
  });

});