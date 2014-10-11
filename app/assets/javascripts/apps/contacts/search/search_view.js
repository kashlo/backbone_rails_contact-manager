ContactManager.module("ContactsApp.Search", function(Search, ContactManager, Backbone, Marionette, $, _){
  // ---------------------------------------- item view
  Search.NoResultsView = Marionette.ItemView.extend({
    template: JST['search/no_results'],
    tagName: 'div',

    initialize: function(){
      console.log('NoResultsView');
    }

  });

  // ---------------------------------------- item view
  Search.Result = Marionette.ItemView.extend({
    template: JST['search/results'],
    tagName: 'div',

    initialize: function(){
      console.log('Result');
    }
  });

  // ---------------------------------------- collection view
  Search.Results = Marionette.CollectionView.extend({
    // template: JST['contacts/list'],
    childView: Search.Result,
    emptyView: Search.NoResultsView,
    // childViewContainer: "ul",
    onShow: function(){
      console.log('zzzzzzzz');
    },
  })
});