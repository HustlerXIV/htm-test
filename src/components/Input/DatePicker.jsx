import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { styled } from "@mui/material";

export default function DatePicker({ label }) {
  const today = new Date();
  const [value, setValue] = React.useState(dayjs(today));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        inputFormat="DD/MM/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <CssTextField
            variant="standard"
            {...params}
            sx={{
              svg: { color: "#fff" },
              input: { color: "#fff" },
              label: { color: "#fff" },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}

const CssTextField = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
}));
