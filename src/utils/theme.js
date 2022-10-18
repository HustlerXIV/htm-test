import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Mobile > 576
      sm: 300, //Mobile landscape > 768
      md: 768, //Tablet > 1024
      lg: 1140, //Desktop
    },
  },
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
  },
});

export default theme;
