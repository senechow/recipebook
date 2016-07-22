Template.shoppingList.onCreated(function() {
	var self = this;
	// subscribe only to the most recent recipe
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.shoppingList.helpers({
	// Subscribe to the recipes that only the user has created
  shoppingList: ()=> {
    return Recipes.find({inMenu: true});
  }
});