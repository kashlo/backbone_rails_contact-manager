ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.ContactsController = {
    listContacts: function(){
      var contacts = ContactManager.request("contact:entities");
      var contactsListView = new List.Contacts({ collection: contacts });

      contactsListView.on("childview:contact:show", function(childView, model){
        ContactManager.ContactsApp.Show.ContactsController.showContact(model);
      });

      // ContactManager.layout = new ContactManager.Layouts.MainLayout();
      // ContactManager.layout.render();
      ContactManager.layout.listRegion.show(contactsListView);
    }
  }
});