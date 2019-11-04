const styles = theme => ({
  title: {
    marginTop: theme.typography.pxToRem(180),
    marginBottom: theme.typography.pxToRem(24),
    maxWidth: theme.typography.pxToRem(470),
    fontSize: theme.typography.pxToRem(40)
  },
  wrap: {
    padding: theme.spacing(2),
    maxWidth: theme.typography.pxToRem(360)
  }
});

export default styles;
