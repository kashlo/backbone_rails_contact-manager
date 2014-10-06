ContactManager.Views.Error = Backbone.View.extend({

  template: JST['shared/errors'],

  // el: '#message-region',

  initialize: function(opt) {
    console.log('initialize Error');
    this.errors = opt.errors;
    console.log(opt.errors);
    // this.render();
  },

  render: function() {
    console.log('render');
    console.log(this.errors);
    var that = this;
    $.each(this.errors, function(key, value){
      that.$el.append(that.template({key : value}));
    })
  }

});
