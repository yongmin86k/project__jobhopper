import { Meteor } from "meteor/meteor";
import { Categories } from "/imports/api/categories";

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
});
