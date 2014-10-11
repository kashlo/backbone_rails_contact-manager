ContactManager.module("ContactsApp.Search", function(Search, ContactManager, Backbone, Marionette, $, _){

  Search.Controller = {

    searchContacts: function(keyword){
      var that = this;
      var signForm = $.ajax({
        type: "GET",
        url: "/contacts/search?keyword=" + keyword,
        dataType: "JSON"
      }).done(function(response){
        that.displaySearchResults(response);
      }).fail(function(){
        console.log('error');
      });
    },

    displaySearchResults: function(results){
      var results_collection = ContactManager.request("contact:entities:new", results);
      var contactsListView = new Search.Results({collection: results_collection});
      ContactManager.layout.mainRegion.show(contactsListView);
    }
  }

});