ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){

  Show.Controller = {
    showContact: function(model){
      var groups = ContactManager.request("group:entities");
      var group = groups.findWhere({id: parseInt(model.get('group_id'))});
      var contactView = new Show.Contact({ model: model, group: group});
      ContactManager.layout.mainRegion.show(contactView);

      contactView.on("contact:edit", function(model){
        ContactManager.ContactsApp.Edit.Controller.editContact(model);
      });

      contactView.on("contact:delete", function(model){
        model.collection.remove(model);
        model.destroy();
      });

    }
  }

});