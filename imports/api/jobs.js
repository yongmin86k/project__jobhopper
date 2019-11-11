import { Mongo } from "meteor/mongo";
export const Jobs = new Mongo.Collection("jobs");

if (Meteor.isServer) {
  Meteor.publish("allJobs", () => {
    return Jobs.find();
  });
  Meteor.publish("jobsHopping", userID => {
    return Jobs.find({
      "hopLogs.userID": userID,
      completed: false
    });
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
    const { category, title, description, dateExpire, jobImage } = values;
    const priceMax = parseInt(values.priceMax);
    const priceMin = parseInt(values.priceMin);

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

Meteor.methods({
  "jobs.hopIn"(jobID, hopLog) {
    if (!this.userId) {
      throw new Meteor.Error(
        "jobs.hopIn.not-authorized",
        "You need to login before hopping in."
      );
    }

    Jobs.update({ _id: jobID }, { $push: { hopLogs: hopLog } });
  }
});

Meteor.methods({
  "jobs.drop"(jobID, userID) {
    if (!this.userId) {
      throw new Meteor.Error(
        "jobs.hopIn.not-authorized",
        "You need to login before dropping."
      );
    }

    Jobs.update(
      { _id: jobID },
      { $pull: { hopLogs: { userID: userID } } },
      { multi: true }
    );
  }
});
