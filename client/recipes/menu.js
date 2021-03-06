Template.menu.onCreated(function() {
	var self = this;
	// subscribe only to the most recent recipe
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.menu.helpers({
	// Subscribe to the recipes that only the user has created
  recipes: ()=> {
    return Recipes.find({inMenu: true});
  }
});