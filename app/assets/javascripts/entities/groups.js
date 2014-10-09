ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){

  // ---------------------------------------- model
  Entities.Group = Backbone.Model.extend({
    urlRoot: '/groups',

    validate: function(attrs) {
      var errors = {};

      if (!attrs.name) {
        errors.name = "Name is required";
      }
      if( ! _.isEmpty(errors)){
        return errors;
      }
    }
  });

  // ---------------------------------------- collection
  Entities.GroupsCollection = Backbone.Collection.extend({
    model: Entities.Group,
    url: '/groups',
    comparator: "name"
  });


  // -------------------------
  var groups;

  var API = {
    getGroupsEntities: function(){
      console.log('getGroupsEntities');
      if (groups === undefined) {
        var groups = new Entities.GroupsCollection();
        groups.fetch();
      }
      return groups;
    },
    instantiateGroupEntity: function() {
      return new Entities.Group();
    }
  };

  ContactManager.reqres.setHandler("group:entities", function(){
    return API.getGroupsEntities();
  });

  ContactManager.reqres.setHandler("group:new", function(){
    return API.instantiateGroupEntity();
  });

});