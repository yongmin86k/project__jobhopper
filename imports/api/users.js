import { Meteor } from "meteor/meteor";

export const Users = Meteor.users;

Meteor.methods({
  "users.updateName"(userId, name) {
    Users.update(userId, { $set: { name: name } });
  }
});
