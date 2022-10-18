import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButton({ title, icon, bgColor, click }) {
  const handleOnClick = (e) => {
    click();
  };

  return (
    <>
      <Button
        onClick={handleOnClick}
        variant="contained"
        sx={{ padding: "10px 30px", backgroundColor: bgColor }}
      >
        {icon} {title}
      </Button>
    </>
  );
}
