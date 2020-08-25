import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    // primary: grey,
    secondary: green,
  },
  typography: {
    fontFamily: "Libre Caslon Display', serif",
  },
  h6: {
    fontFamily: " 'Do Hyeon'",
  },
  h4: {
    fontFamily: "Libre Caslon Display",
    fontSize: "0.5rem",
  },
});

export default theme;
