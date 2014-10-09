ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){

  this.startWithParent = false;

  List.Controller = {
    listContacts: function(){
      var contacts = ContactManager.request("contact:entities");
      var contactsListView = new List.Contacts({ collection: contacts });

      ContactManager.layout.listRegion.show(contactsListView);

      contactsListView.on("childview:contact:show", function(childView, model){
        ContactManager.ContactsApp.Show.Controller.showContact(model);
      });
    }
  }

  List.addInitializer(function(){
    ContactManager.ContactsApp.List.Controller.listContacts();
  })

});