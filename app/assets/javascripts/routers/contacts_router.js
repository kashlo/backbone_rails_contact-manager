App.Routers.Contacts = Backbone.Router.extend({

  routes: {
    '': 'listContacts'
  },

  initialize: function(){
    console.log('contacts router init');

  },

  // listContacts: function(){
  //   console.log('listContacts router');
  //   contacts_collection = new ContactManager.Entities.ContactCollection();

  //   // contacts_collection.fetch({reset: true});
  //   contacts_collection.fetch({ success: function() {
  //      // ContactManager.mainRegion.show(contactsListView);
  //      var contactsListView = new App.Views.ContactsIndex({collection: contacts_collection});
  //      // App.app.listRegion.show(contactsListView);
  //     // new App.Views.ContactsIndex();
  //     layout = new App.Views.MainLayout();
  //     layout.render();
  //     layout.listRegion.show(contactsListView);
  //   } });
  // }

});
