ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){

  Show.Contact = Marionette.ItemView.extend({
    template: JST['contacts/show'],

    events: {
      'click .delete': 'deleteContact',
      'click .edit': 'editContact'
    },

    initialize: function(options) {
      this.listenTo(this.model, 'destroy', this.remove);
      this.group = options.group;
    },

    onShow: function(){
      this.showGroup(this.group);
    },

    deleteContact: function(e) {
      console.log('deleteContact');
      // console.log(this.model.toJSON());
      // this.model.destroy();
      // ContactManager.ContactsApp.Delete.Controller.deleteContact(this.model);
      this.trigger("contact:delete", this.model);
    },

    editContact: function() {
      console.log('editContact');
      this.trigger("contact:edit", this.model);
      // var view = new ContactManager.Views.ContactsEdit( {model: this.model});
      // layout.mainRegion.show(view);
    },

    showGroup: function(group){
      console.log('showGroup', group);
      if (group){
        this.$('#group_name').html(group.get('name'));
      }
    }

  });

});