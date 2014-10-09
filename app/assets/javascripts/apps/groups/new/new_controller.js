ContactManager.module("GroupsApp.New", function(New, ContactManager, Backbone, Marionette, $, _){

  New.Controller = {
    newGroup: function(){
      console.log("newGroup called for model ")
      var groupView = new New.Group();
      ContactManager.layout.mainRegion.show(groupView);
    },

    saveGroup: function(view) {
      var data = Backbone.Syphon.serialize(view);
      var group = ContactManager.request("group:new");
      var groups_collection = ContactManager.request("group:entities");
      if (group.save(data)){
        console.log('success');
        groups_collection.add(group);
        // ContactManager.ContactsApp.Show.Controller.showContact(contact);
      } else {
        console.log('error');
        if (contact.validationError){
          console.log(contact.validationError);
          errors = new ContactManager.Views.Error({errors: contact.validationError});
          layout.messageRegion.show(errors);
          // layout.messageRegion.show();
        }
      }
    }
  }

});