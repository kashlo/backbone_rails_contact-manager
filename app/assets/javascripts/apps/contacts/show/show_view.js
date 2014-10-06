ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){

  Show.Contact = Marionette.ItemView.extend({
    template: JST['contacts/show'],

    events: {
      'click .delete': 'deleteContact',
      'click .edit': 'editContact'
    },

    // initialize: function() {
    //   this.listenTo(this.model, 'destroy', this.remove);
    // },

    deleteContact: function(e) {
      console.log('deleteContact');
      // console.log(this.model.toJSON());
      this.model.destroy();
    },

    editContact: function() {
      console.log('editContact');
      this.trigger("contact:edit", this.model);
      // var view = new ContactManager.Views.ContactsEdit( {model: this.model});
      // layout.mainRegion.show(view);
    }

  });

});