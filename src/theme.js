import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: green,
  },
  typography: {
    h6: {
      fontSize: "0.5rem",
    },
  },
});

export default theme;
