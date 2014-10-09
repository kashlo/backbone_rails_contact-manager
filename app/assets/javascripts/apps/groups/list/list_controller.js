ContactManager.module("GroupsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){

  this.startWithParent = false;

  List.Controller = {
    listGroups: function(){
      console.log('listGroups');
      var groups = ContactManager.request("group:entities");
      var groupsListView = new List.Groups({ collection: groups });
      ContactManager.layout.groupListRegion.show(groupsListView);

      groupsListView.on("childview:group:show", function(childView, model){
        ContactManager.GroupsApp.Show.Controller.show(model);
      });
    }
  }

  List.addInitializer(function(){
    ContactManager.GroupsApp.List.Controller.listGroups();
  })

});