/*
// import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

////////HERE IS THE TRICK//////
//You dont have to make new collection in mongodb with the name users as it is already added when you installed user accounts package in meteor.
// export const Users = new Mongo.Collection("users");
//So we can directly get the object of that collection from Meteor rather than going into Mongo.
export const Users = Meteor.users;

Meteor.methods({
  "users.updateName"(userId, name) {
    Users.update(userId, { $set: { name: name } });
  }
});

// THIS IS A DEPRECIATED CODE, DONT USE IT
*/

import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
