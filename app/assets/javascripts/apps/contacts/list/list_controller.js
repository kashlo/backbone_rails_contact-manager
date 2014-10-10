ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){

  this.startWithParent = false;

  List.Controller = {
    listContacts: function(){
      var contacts = ContactManager.request("contact:entities");
      var contactsListView = new List.Contacts({ collection: contacts });
      contactsListView.on("render", function(){
        console.log("contact collection rendered");
      });
      ContactManager.layout.listRegion.show(contactsListView);
      // showCounter(contacts.length());

      contactsListView.on("childview:contact:show", function(childView, model){
        ContactManager.ContactsApp.Show.Controller.showContact(model);
      });

    },

    showCounter: function(count){
      view = new List.Counter
    }
  }

  List.addInitializer(function(){
    ContactManager.ContactsApp.List.Controller.listContacts();
    // ContactManager.ContactsApp.List.Controller.showCounter();
  })

});