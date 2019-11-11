const styles = theme => ({
  container: {
    backgroundColor: "white",
    padding: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  null: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 180,
    backgroundColor: "initial"
  },

  imageBox: {
    position: "relative",
    width: 80,
    height: 80,
    marginRight: theme.spacing(1.5),
    borderRadius: 4,
    overflow: "hidden"
  },
  jobImage: {
    positoin: "absolute",
    width: "auto",
    height: "100%"
  },
  title: {
    flex: 1,
    overflow: "hidden"
  },
  fieldPrice: {
    marginTop: theme.spacing(2)
  },
  buttons: {
    marginTop: theme.spacing(2)
  }
});

export default styles;
