Template.recipeSingle.onCreated(function() {
	var self = this;
	// subscribe only to the most recent recipe
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
	});
});

Template.recipeSingle.helpers({
	// Subscribe to the recipes that only the user has created
  recipe: ()=> {
  	var id = FlowRouter.getParam('id');
    return Recipes.findOne({_id: id});
  }
}); 