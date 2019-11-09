const styles = theme => ({
  media: {
    height: 200,
    paddingTop: "2%" // 16:9
  },
  avatar: {
    borderRadius: "50%"
  },
  grid: {
    marginBottom: theme.spacing(2)
  },
  applicants: {
    width: "initial"
  },
  fieldPrice: {
    paddingTop: 0,
    paddingBottom: 4
  },
  category: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  description: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "1rem",
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em"
  },
  default: {
    padding: theme.spacing(2)
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200
  }
});

export default styles;
