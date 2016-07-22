Template.recipes.onCreated(function() {
	var self = this;
	// subscribe only to the most recent recipe
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.recipes.helpers({
	// Subscribe to the recipes that only the user has created
  recipes: ()=> {
    return Recipes.find({});
  }
});

Template.recipes.events({
	'click .new-recipe':  () => {
		Session.set('newRecipe', true);
	}
});