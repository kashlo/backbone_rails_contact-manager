ContactManager.module("ContactsApp.Search", function(Search, ContactManager, Backbone, Marionette, $, _){

  Search.Controller = {
    searchContacts: function(keyword){
      var contacts = ContactManager.request("contact:entities");
      var filtered = new FilteredCollection(contacts);
      var results = filtered.filterBy( {first_name: keyword} );
      // var results = contacts.where({first_name: keyword});
      this.displaySearchResults(results);
    },

    displaySearchResults: function(results){
      console.log(results);
      var contactsListView = new Search.Results({collection: results});
      ContactManager.layout.mainRegion.show(contactsListView);
    }
  }

});

var superset = new Backbone.Collection(/* ... */);
var filtered = new FilteredCollection(superset);

// Filtered will contain only models where model.get('foo') === "bar"
filtered.filterBy({ foo: "bar" });