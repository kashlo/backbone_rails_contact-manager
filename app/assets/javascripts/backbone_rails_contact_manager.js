var ContactManager = new Backbone.Marionette.Application({});

ContactManager.on("start", function(){
  ContactManager.layout = new ContactManager.Layouts.MainLayout();
  ContactManager.layout.render();

  ContactManager.GroupsApp.List.start();
  ContactManager.ContactsApp.List.start();
  // ContactManager.GroupsApp.List.Controller.listGroups();
  // ContactManager.ContactsApp.List.Controller.listContacts();
});