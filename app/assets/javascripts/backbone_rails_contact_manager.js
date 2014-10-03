// var App = new Backbone.Marionette.Application({
//   Models: {},
//   Collections: {},
//   Views: {},
//   Routers: {},
//   initialize: function() {
//       console.log('Hello from Backbone Marionette!');
//       contacts_collection = new App.Collections.Contacts();
//       contacts_collection.fetch({ success: function() {
//         new App.Views.ContactsIndex();
//       } });
//     }
// });
window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    console.log(this);
    this.app = new Backbone.Marionette.Application();
    this.app.addRegions({
      listRegion: '#contact-list',
      mainRegion: '#contact'
    });

    this.app.start();

    new App.Routers.Contacts();
    Backbone.history.start();
  }
};
