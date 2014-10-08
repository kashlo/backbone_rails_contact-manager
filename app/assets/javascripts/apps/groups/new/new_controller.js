ContactManager.module("GroupsApp.New", function(New, ContactManager, Backbone, Marionette, $, _){

  New.Controller = {
    newGroup: function(){
      console.log("newGroup called for model ")
      var groupView = new New.Group();

      // contactView.on("contact:edit", function(model){
      //   ContactManager.ContactsApp.Edit.Controller.editContact(model);
      // });

      ContactManager.layout.mainRegion.show(groupView);
    }
  }

});