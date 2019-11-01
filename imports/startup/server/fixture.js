import { Meteor } from "meteor/meteor";
import {
  mockUser,
  mockBid,
  mockRate,
  mockPostedJobs,
  mockCategories,
  mockDirectMessages,
  mockJobs,
  mockCompletedJobs
} from "/imports/api";

Meteor.startup(() => {
  console.log("MongoDB Server is initialized");
});
