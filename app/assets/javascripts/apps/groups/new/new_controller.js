ContactManager.module("GroupsApp.New", function(New, ContactManager, Backbone, Marionette, $, _){

  New.Controller = {
    newGroup: function(){
      console.log("newGroup called for model ")
      var groupView = new New.Group();
      ContactManager.layout.mainRegion.show(groupView);
    },

    save: function(view) {
      var data = Backbone.Syphon.serialize(view);
      var group = ContactManager.request("group:new");
      var groups_collection = ContactManager.request("group:entities");
      if (group.save(data)){
        console.log('success');
        console.log(group);
        groups_collection.add(group);
        ContactManager.GroupsApp.Show.Controller.show(group);
      } else {
        console.log('error');
        if (group.validationError){
          console.log(group.validationError);
          // errors = new ContactManager.Views.Error({errors: contact.validationError});
          // layout.messageRegion.show(errors);
          // layout.messageRegion.show();
        }
      }
    }
  }

});