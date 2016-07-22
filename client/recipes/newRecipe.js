Template.newRecipe.events({
	'click .fa-close' : function() {
		// Set session variable
		Session.set('newRecipe', false);
	}
});