import { Mongo } from "meteor/mongo";
export const Jobs = new Mongo.Collection("jobs");

if (Meteor.isServer) {
  Meteor.publish("allJobs", userID => {
    return Jobs.find({
      userPosted: { $ne: userID },
      "date.dateExpire": { $gte: new Date() },
      completed: false
    });
  });

  Meteor.publish("jobsHopping", userID => {
    return Jobs.find({
      "hopLogs.userID": userID,
      completed: false
    });
  });

  Meteor.publish("jobsCompleted", userID => {
    return Jobs.find({
      userTaken: userID,
      completed: true
    });
  });

  Meteor.publish("jobsPosted", userID => {
    return Jobs.find({
      userPosted: userID
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

Meteor.methods({
  "jobs.delete"(jobID) {
    if (!this.userId) {
      throw new Meteor.Error(
        "jobs.delete.not-authorized",
        "You need to login before deleting."
      );
    }
    Jobs.remove({ _id: jobID });
  }
});

Meteor.methods({
  "jobs.complete"(jobID, userID) {
    if (!this.userId) {
      throw new Meteor.Error(
        "jobs.delete.not-authorized",
        "You need to login before completing."
      );
    }
    Jobs.update(
      { _id: jobID },
      { $set: { completed: true, userTaken: userID } },
      { upsert: true }
    );
  }
});
