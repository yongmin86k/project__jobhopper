import { createMuiTheme } from "@material-ui/core/styles";

const [colorPrimary, colorSecondary] = ["#2E7D32", "#EEEEEE"];

export default createMuiTheme({
  palette: {
    primary: {
      main: colorPrimary
    },
    secondary: {
      main: colorSecondary
    }
  }
});
