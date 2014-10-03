App.Views.ContactsIndex = Backbone.Marionette.CollectionView.extend({

    tagName: "ul",
    childView: App.Views.ContactsItem

});
