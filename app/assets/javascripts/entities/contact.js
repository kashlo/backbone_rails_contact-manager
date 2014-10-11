ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){

  _.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

  // ---------------------------------------- model
  Entities.Contact = Backbone.Model.extend({
    urlRoot: '/contacts',

    defaults: {
      last_name: '',
      middle_name: '',
      phone: '',
      email: ''
    },

    // validate: function(attrs) {
    //   var errors = {};

    //   if (!attrs.first_name) {
    //     errors.first_name = "First Name is required";
    //   }
    //   if(attrs.email && !((attrs.email).match(/@/)) ){
    //     errors.email = "Email is not valid";
    //   }
    //   if( ! _.isEmpty(errors)){
    //     return errors;
    //   }
    // }

    validation: {
      first_name: {
        required: true
      },
      email: {
        required: false,
        pattern: 'email'
      },
      phone: {
        required: false,
        pattern: 'digits',
        msg: 'Only digits allowed for phone number'
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

  var API = {
    getContactEntities: function(){
      console.log('getGroupsEntities');
      if (contacts === undefined) {
        console.log('contacts undefined');
        contacts = new Entities.ContactCollection();
        contacts.fetch();
      }
      return contacts;
    },
    instantiateContactEntity: function() {
      return new Entities.Contact();
    },
    instantiateContactCollectionEntity: function(objects) {
      return new Entities.ContactCollection(objects);
    }
  };

  ContactManager.reqres.setHandler("contact:entities", function(){
    return API.getContactEntities();
  });

  ContactManager.reqres.setHandler("contact:new", function(){
    return API.instantiateContactEntity();
  });
  ContactManager.reqres.setHandler("contact:entities:new", function(objects){
    return API.instantiateContactCollectionEntity(objects);
  });
});