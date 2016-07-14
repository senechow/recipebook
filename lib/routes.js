// Redirect on login to recipe-book url
// Requires gwendall:auth-client-callbacks package
if(Meteor.isClient) {
  Accounts.onLogin(function(){
    FlowRouter.go('recipe-book');
  });

  Accounts.onLogout(function(){
    FlowRouter.go('home');
  });
}

// Will trigger if in any url
FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);


FlowRouter.route('/', {
  name: 'home',
  action() {
    // Means render this template when the route is entered into by the user
    if(Meteor.userId()) {
      FlowRouter.go('recipe-book');
    }
    GAnalytics.pageview();
    BlazeLayout.render('homeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {main: 'recipes'});
  }
});
// :id means id is a parameter
FlowRouter.route('/recipe/:id', {
  name: 'recipe',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {main: 'recipeSingle'});
  }
});