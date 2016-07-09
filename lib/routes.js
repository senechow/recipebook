FlowRouter.route('/', {
  name: 'home',
  action() {
    // Means render this template when the route is entered into by the user
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