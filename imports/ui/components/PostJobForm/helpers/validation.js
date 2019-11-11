export default function validate({
  category,
  dateExpire,
  description,
  jobImage,
  priceMax,
  priceMin,
  title
}) {
  const errors = {};

  if (!category) {
    errors.category = "Required";
  }
  if (!dateExpire) {
    errors.dateExpire = "Required";
  }
  if (!description) {
    errors.description = "Required";
  }
  if (!jobImage) {
    errors.jobImage = "Required";
  }
  if (!priceMax) {
    errors.priceMax = "Required";
  }
  if (!priceMin) {
    errors.priceMin = "Required";
  }
  if (!title) {
    errors.title = "Required";
  }

  return errors;
}
