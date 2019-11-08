import { Mongo } from "meteor/mongo";
export const Categories = new Mongo.Collection("categories");

if (Meteor.isServer) {
  Meteor.publish("allCategories", function() {
    return Categories.find({});
  });
}
