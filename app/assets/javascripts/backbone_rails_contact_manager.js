var ContactManager = new Backbone.Marionette.Application({});

ContactManager.on("before:start", function(){
  ContactManager.layout = new ContactManager.Layouts.MainLayout();
  ContactManager.layout.render();
});