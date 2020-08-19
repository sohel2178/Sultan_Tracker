import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: green,
  },
  /* typography: {
    fontFamily: "'Raleway Dots', cursive",
  }, */
});

export default theme;
