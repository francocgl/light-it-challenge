import { createTheme } from "@mui/material/styles"
import createBreakpoints from "@mui/system/createTheme/createBreakpoints"

const breakpoints = createBreakpoints({})

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#607d8b",
    },
  },
  typography: {
    h1: {
      fontSize: "3em",
      fontWeight: 600,

      [breakpoints.down("md")]: {
        fontSize: "2em",
      },
    },
  },
})

export default customTheme
