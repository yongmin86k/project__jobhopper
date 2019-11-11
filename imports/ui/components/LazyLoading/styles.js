const styles = theme => ({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.72)",
    zIndex: 9999,
    transition: "opacity 0.5s 0",
    opacity: 1
  },
  hide: {
    transition: "opacity 0.5s 0, height: 0 0.5s",
    height: 0,
    opacity: 0
  },
  wrap: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  icon: {
    marginBottom: theme.spacing(2)
  }
});

export default styles;
