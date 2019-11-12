import React from "react";
import { JobCard } from "/imports/ui/components";
import PropTypes from "prop-types";

const PostJobPreview = ({ previewValue }) => {
  return <JobCard previewValue={previewValue} />;
};

export default PostJobPreview;

PostJobPreview.propTypes = {
  previewValue: PropTypes.object
};
