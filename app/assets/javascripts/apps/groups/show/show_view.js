ContactManager.module("GroupsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){

  Show.Group = Marionette.ItemView.extend({
    template: JST['groups/show'],

    events: {
      'click .js-delete': 'delete',
      'click .js-edit': 'edit'
    },

    initialize: function() {
      this.listenTo(this.model, 'destroy', this.remove);
    },

    delete: function(e) {
      console.log('delete group');
      this.trigger("group:delete", this.model);
    },

    edit: function() {
      console.log('edit group');
      this.trigger("group:edit", this.model);
      // var view = new ContactManager.Views.ContactsEdit( {model: this.model});
      // layout.mainRegion.show(view);
    }

  });

});