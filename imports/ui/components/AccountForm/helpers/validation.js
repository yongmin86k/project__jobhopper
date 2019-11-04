export default function validate(
  { email, password, fullname, zipCode },
  activateForm
) {
  const errors = {};
  if (!email) {
    errors.email = "Required";
  }
  if (!password) {
    errors.password = "Required";
  }
  if (!activateForm && !fullname) {
    errors.fullname = "Required";
  }
  if (!activateForm && !zipCode) {
    errors.zipCode = "Required";
  }
  return errors;
}
