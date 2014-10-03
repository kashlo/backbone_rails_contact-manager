App.Models.Contact = Backbone.Model.extend({
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
