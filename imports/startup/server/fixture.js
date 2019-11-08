import { Meteor } from "meteor/meteor";
import { Users } from "/imports/api/users";
import { Categories } from "/imports/api/categories";
import { Jobs } from "/imports/api/jobs";

const defaultCats = [
  { title: "Painting" },
  { title: "Electrical/Computers" },
  { title: "Plumbing" },
  { title: "Drywall" },
  { title: "Landscaping" },
  { title: "Maid-service" },
  { title: "Cook" }
];

Meteor.startup(() => {
  if (!Categories.findOne()) {
    defaultCats.forEach(cat => {
      Categories.update(cat, { $set: cat }, { upsert: true });
    });
  }
  // if (!Jobs.findOne()) {
  //   defaultJobs.forEach(job => {
  //     Jobs.update(job, { $set: job }, { upsert: true });
  //   });
  // }
});
