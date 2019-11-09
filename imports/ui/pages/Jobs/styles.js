const styles = theme => ({
  wrapHeader: { marginTop: 40, marginBottom: 40 },
  filter: {
    flex: 1,
    width: "initial",
    "& > * ": {
      marginRight: theme.spacing(1),
      minWidth: "120px !important",
      boxShadow: "none",
      backgroundColor: "#ffffff",
      border: "solid 1px rgba(0, 0, 0, 0.12)",
      "&:hover": {
        boxShadow: "none",
        backgroundColor: "rgba(0, 0, 0, 0.08)"
      }
    }
  },
  loc: {
    flex: "none",
    width: "initial"
  }
});

export default styles;
