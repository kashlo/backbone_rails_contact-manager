ContactManager.module("GroupsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){

  Edit.Controller = {
    // showContact: function(model){
    //   console.log("showContact called for model ", model)
    //   var contactView = new Show.Contact({ model: model});
    //   ContactManager.layout.mainRegion.show(contactView);
    // }

    edit: function(model){
      console.log("edit group called for model ", model)
      var view = new Edit.Group({ model: model});

      ContactManager.layout.mainRegion.show(view);
    },

    update: function(view){
      var group = view.model;
      var data = Backbone.Syphon.serialize(view);

      if (group.save(data)){
        console.log('success');
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