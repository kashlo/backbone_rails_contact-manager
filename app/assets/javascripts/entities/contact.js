ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){

  // ---------------------------------------- model
  Entities.Contact = Backbone.Model.extend({
    urlRoot: '/contacts',

    defaults: {
      last_name: '',
      middle_name: '',
      phone: '',
      email: ''
    },

    validate: function(attrs) {
      var errors = {};

      if (!attrs.first_name) {
        errors.first_name = "First Name is required";
      }
      if( ! _.isEmpty(errors)){
        return errors;
      }
    }
  });

  // ---------------------------------------- collection
  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
    url: '/contacts',
    comparator: "firstName"
  });


  // -------------------------
  var contacts;

  var initializeContacts = function(){
    console.log("initializeContacts");
    // console.log(contacts);
  };

  var API = {
    getContactEntities: function(){
      var contacts = new Entities.ContactCollection();
      contacts.fetch();
      return contacts;
    // },
    // cteateContactEntity: function() {
    //   return new Entities.Contact();
    }
  };

  ContactManager.reqres.setHandler("contact:entities", function(){
    return API.getContactEntities();
  });

  // ContactManager.reqres.setHandler("contact:create", function(){
  //   return API.cteateContactEntity();
  // });

  ContactManager.addInitializer(function(){
    ContactManager.ContactsApp.List.ContactsController.listContacts();
  })


});