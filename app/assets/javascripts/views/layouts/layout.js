App.Views.MainLayout = Backbone.Marionette.LayoutView.extend({
  el: "body",
  template: JST['layouts/main_layout'],

  regions: {
    listRegion: '#list-region',
    messageRegion: '#message-region',
    mainRegion: '#main-region'
  },

  events: {
    'click #add-contact': 'addContact'
  },

  addContact: function() {
    console.log('addContact');
    var view = new App.Views.ContactsNew();
    layout.mainRegion.show(view);
  }
});
