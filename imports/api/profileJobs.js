import { Mongo } from "meteor/mongo";

meteor.methods({
  hopLog(values, user) {
    if (!this.jobId) {
      throw new Meteor.Error("Cannot drop job!");
    }
    hopLog.delete(hopLog._id, {
      $elemMatch: { delete: (userId = currentUserID) }
    });
    {
      Jobs({
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
  }
});

export const profileJobs = new Mongo.Collection("profileJobs");
