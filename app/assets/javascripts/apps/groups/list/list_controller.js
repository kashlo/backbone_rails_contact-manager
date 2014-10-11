ContactManager.module("GroupsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){

  this.startWithParent = false;

  List.Controller = {
    listGroups: function(){
      console.log('listGroups');
      var groups = ContactManager.request("group:entities");
      var groupsListView = new List.Groups({ collection: groups });
      groupsListView.on("render", function(){
        console.log("group collection rendered");
      });
      ContactManager.layout.groupListRegion.show(groupsListView);

      groupsListView.on("childview:group:show", function(childView, model){
        ContactManager.GroupsApp.Show.Controller.show(model);
      });
    },

    showCounter: function(count){
      console.log('showCounter');
      var groups = ContactManager.request("group:entities");
      view = new List.Counter({collection: groups});
      view.render();
    }
  }

  List.addInitializer(function(){
    ContactManager.GroupsApp.List.Controller.listGroups();
  })

});