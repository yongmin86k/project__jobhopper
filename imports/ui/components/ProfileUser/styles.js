const styles = theme => ({
  card: {
    padding: theme.spacing(2)
  },
  imgProfile: {
    borderRadius: "50%",
    overflow: "hidden"
  },
  wrap: {
    marginBottom: theme.spacing(2)
  },
  field: {
    marginBottom: theme.spacing(1)
  },
  lastField: {
    marginBottom: theme.spacing(4)
  },
  label: {
    width: theme.typography.pxToRem(96),
    paddingRight: theme.spacing(1)
  },
  input: {
    flex: 1,
    last: {
      marginBottom: theme.spacing(4)
    }
  },
  postCode: {
    flex: 1,
    textTransform: "uppercase",
    letterSpacing: "4px"
  }
});

export default styles;
