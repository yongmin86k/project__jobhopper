const styles = theme => ({
  container: {
    background: theme.palette.secondary.main,
    minHeight: "100vh"
  },
  filterContainer: {
    display: "flex",
    flexGrow: 1
  },
  filterBtn: {
    boxShadow: "none",
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(12),
    backgroundColor: "rgba(0, 0, 0, 0)",
    flexGrow: "1",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  },
  filtertxt: {
    boxShadow: "none",
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(12),
    backgroundColor: "unset",
    disableRipple: true,
    disabled: true,

    flexGrow: "0",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "unset"
    },
    "&:focus": {
      boxShadow: "none",
      backgroundColor: "unset"
    }
  }
});

export default styles;
