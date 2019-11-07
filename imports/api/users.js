import { Mongo } from "meteor/mongo";
export const Users = Meteor.users;

if (Meteor.isServer) {
  Meteor.publish("allUsers", () => {
    return Users.find({}, { profile: 1, services: 0 });
  });
}

// Meteor.methods({
//   "user.getInfoByName"(userName = null) {
//     if (!this.userId) {
//       throw new Meteor.Error(
//         "user.getInfoByName.not-authorized",
//         "You need to login."
//       );
//     }

//     if (userName) {
//       console.log(userName, "############################");
//       Users.find({ "profile.fullname": userName }, { profile: 1, services: 0 });
//     }
//   }
// });
