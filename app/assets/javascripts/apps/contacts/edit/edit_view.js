ContactManager.module("ContactsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){

  Edit.Contact = Marionette.ItemView.extend({
    template: JST['contacts/edit'],

    tagName: 'form',

    events: {
      'click .save': 'updateContact',
      'click .cancel': 'cancel'
    },

    initialize: function(options){
      this.groups = options.groups;
    },

    onShow: function(){
      this.renderGroupSelect(this.groups);
    },

    updateContact: function(e) {
      console.log('saveContact');
      e.preventDefault();
      ContactManager.ContactsApp.Edit.Controller.updateContact(this);
    },

    cancel: function() {
      console.log('cancel')
      this.remove();
    },

    renderGroupSelect :function (group_collection) {
      group_collection.each(function(item){
        console.log(item);
        this.$('#group_id').append("<option value='"+item.get('id')+"'>"+item.get('name')+"</option>");
      }, this)
      this.setActiveGroup(group_collection);
    },

    setActiveGroup: function(group_collection){
      console.log("_________", this.model);

      if (group_collection.length > 0 && this.model.get('group_id')) {
        this.$('#group_id option[value=' + this.model.get('group_id') +']').prop('selected', true)
      }
    }
  });

});