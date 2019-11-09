import React from "react";
import { JobCard } from "/imports/ui/components";

const PostJobPreview = ({ previewValue }) => {
  return <JobCard previewValue={previewValue} />;
};

export default PostJobPreview;
