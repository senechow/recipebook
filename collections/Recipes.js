Recipes = new Mongo.Collection('recipes');

//Rules for who is allowed to do certain actions
Recipes.allow({
  insert: function(userId, doc) {
    return !!userId; // returns true if the userId exists
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

Ingredient = new SimpleSchema({
  name: {
    type: String
  },
  amount: {
    type: String
  }
}); 

RecipeSchema = new SimpleSchema({
  // All fields are required by default
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  ingredients: {
    type: [Ingredient]
  },
  inMenu: {
    type: Boolean,  
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
  toggleMenuItem: function(id, currentState) {
    Recipes.update(id, {
      $set: {
          inMenu: !currentState
      }
    });
  }
});

Recipes.attachSchema(RecipeSchema);