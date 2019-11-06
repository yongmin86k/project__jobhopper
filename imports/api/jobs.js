import { Mongo } from "meteor/mongo";
export const Jobs = new Mongo.Collection("jobs");

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
      jobImages
    } = values;

    console.log(user);

    Jobs.insert({
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
      jobImages
    });
  }
});
