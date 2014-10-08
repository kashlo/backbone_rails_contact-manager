ContactManager.module("GroupsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Controller = {
    listGroups: function(){
      var groups = ContactManager.request("group:entities");
      var groupsListView = new List.Groups({ collection: groups });

      // groupsListView.on("childview:group:show", function(childView, model){
      //   ContactManager.ContactsApp.Show.Controller.showContact(model);
      // });

      // ContactManager.layout = new ContactManager.Layouts.MainLayout();
      // ContactManager.layout.render();
      ContactManager.layout.groupListRegion.show(groupsListView);
    }
  }
});