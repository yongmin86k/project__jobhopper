const styles = theme => ({
  input: {
    marginBottom: theme.spacing(2.5)
  },
  postCode: {
    textTransform: "uppercase",
    letterSpacing: "4px"
  },
  btnWrap: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridColumnGap: theme.spacing(2)
  },
  btnChild: {
    margin: 0,
    borderRadius: 4,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.primary.dark
  }
});

export default styles;
