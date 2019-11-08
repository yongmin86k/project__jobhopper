import { Mongo } from "meteor/mongo";
export const Jobs = new Mongo.Collection("jobs");

if (Meteor.isServer) {
  Meteor.publish("allJobs", () => {
    return Jobs.find();
  });
}

Meteor.methods({
  "jobs.postSingle"(values, user) {
    if (!this.userId) {
      throw new Meteor.Error(
        "jobs.postSingle.not-authorized",
        "You need to login before posting a job."
      );
    }
    const {
      category,
      title,
      description,
      dateExpire,
      priceMax,
      priceMin,
      jobImage
    } = values;

    Jobs.insert({
      completed: false,
      userPosted: this.userId,
      category,
      title,
      description,
      location: user.profile.address,
      date: {
        datePosted: new Date(),
        dateExpire
      },
      priceMax,
      priceMin,
      jobImage
    });
  }
});
