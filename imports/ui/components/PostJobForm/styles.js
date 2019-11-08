const styles = theme => ({
  row: {
    marginBottom: theme.spacing(2.5)
  },
  btnUpload: {
    display: "none"
  },
  addIcon: {
    marginRight: theme.spacing(2)
  },
  label: {
    marginBottom: theme.spacing(1.5)
  },
  input: {
    margin: 0
  },
  btn: {
    width: theme.typography.pxToRem(160)
  },
  postCode: {
    textTransform: "uppercase",
    letterSpacing: "4px"
  },
  priceField: {
    textAlign: "right"
  }
});

export default styles;
