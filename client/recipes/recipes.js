Meteor.subscribe('recipes');

Template.recipes.helpers({
  recipes: ()=> {
    return Recipes.find({});
  }
});