ContactManager.module("GroupsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){

  Show.Controller = {
    show: function(model){
      console.log("showGroup called for model ", model)
      var groupView = new Show.Group({ model: model});

      ContactManager.layout.mainRegion.show(groupView);

      groupView.on("group:edit", function(model){
        ContactManager.GroupsApp.Edit.Controller.edit(model);
      });

      groupView.on("group:delete", function(model){
        console.log('group:delete');
        model.collection.remove(model);
        model.destroy();
      });

    }
  }

});