import { Meteor } from "meteor/meteor";
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

// const defaultJobs =[

//  { userPosted: 1,
//   userTaken: 2,
//   completed: false,
//   category: 1,
//   title: "Clean Lawn",
//   description: "This is description of the Job",
//   location: "Vancouver",
//   date: {
//     datePosted: "20th November 2019",
//     dateExpire: "19th November 2019",
//     dateCompleted: "20th November 2019"
//   },
//   hopLog: [{ userID: 2, time: "13:04", price: 48 }],
//   priceMax: 50,
//   priceMin: 15,
//   jobImages: ["https://via.placeholder.com/150"

//   ]
// }
// ];

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
