
Template.recipe.onCreated(function() {
	this.editMode = new ReactiveVar(false);
	// Below also works
	//this.editMode = new ReactiveVar();
	//this.editMode.set(false);
});

Template.recipe.helpers({
  updateRecipeId: function() {
  	// Can't use arrow function with this
    return this._id;
  },
  editMode: function() {
  	// Gets only this instances specific edit mode variable
  	return Template.instance().editMode.get();
  }
});

Template.recipe.events({
	'click .toggle-menu': function() {
		// This is how to call a meteor method
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash' : function() {
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil' : function(event, template) {
		template.editMode.set(!template.editMode.get());
	}
});