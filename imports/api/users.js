export const Users = Meteor.users;

if (Meteor.isServer) {
  Meteor.publish("allUsers", () => {
    return Users.find({}, { profile: 1, services: 0 });
  });
}

Meteor.methods({
  "user.updateInfo"({ fullname, country, zipCode, bio }, userID) {
    if (!this.userId) {
      throw new Meteor.Error(
        "user.updateInfo.not-authorized",
        "You need to login."
      );
    }

    Users.update(
      { _id: userID },
      {
        $set: {
          "profile.fullname": fullname,
          "profile.address.country": country,
          "profile.address.zipCode": zipCode,
          "profile.bio": bio
        }
      }
    );
  }
});
