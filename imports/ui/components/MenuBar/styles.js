const styles = theme => ({
  headerStyle: {
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.typography.pxToRem(80),
      paddingLeft: theme.typography.pxToRem(80)
    }
  },

  menuButton: {
    marginRight: 0,
    width: theme.typography.pxToRem(48),
    height: theme.typography.pxToRem(48)
  },
  imgLogo: {
    height: "100%"
  },
  menuBar: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  btnShare: {
    boxShadow: "none",
    marginRight: theme.spacing(2),
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
});

export default styles;
