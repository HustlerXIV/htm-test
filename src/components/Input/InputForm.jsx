import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";

export default function InputForm({
  label,
  color,
  type,
  onChange,
  disabled,
  value,
}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <>
      <CssInputTextField
        disabled={disabled}
        focusColor={color}
        id="standard-basic"
        label={label}
        type={type}
        variant="standard"
        value={value}
        onChange={handleChange}
        sx={{
          svg: { color: color },
          input: { color: color },
          label: { color: color },
        }}
      />
    </>
  );
}

const CssInputTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  "& label.Mui-focused": {
    color: p.focusColor,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor,
  },
}));
