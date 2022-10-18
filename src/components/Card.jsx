import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Card({ name, img, detail, roomDetail, armenties }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkAmentites = (key) => {
    let text = "";
    if (armenties[key]) {
      text = "Yes";
    } else {
      text = "No";
    }
    return text;
  };
  return (
    <>
      <CardContainer onClick={handleClickOpen} img={img}>
        <CardTitle>{name}</CardTitle>
      </CardContainer>
      <Dialog
        maxWidth
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div style={{ width: "auto", maxWidth: "700px" }}>{detail}</div>
          </DialogContentText>
          {roomDetail && (
            <DialogContentText sx={{ marginTop: "20px" }}>
              Amenities:
              <ul>
                <li>Aircon: {checkAmentites("aircon")}</li>
                <li>Apple TV: {checkAmentites("appletv")}</li>
                <li>Speakers: {checkAmentites("btspeakers")}</li>
                <li>Card Key: {checkAmentites("cardkey")}</li>

                <li>Chromecast: {checkAmentites("chromecast")}</li>
                <li>Fireplace: {checkAmentites("fireplace")}</li>
                <li>HD TV: {checkAmentites("hdtv")}</li>
                <li>Jacuzzi: {checkAmentites("jacuzzi")}</li>
                <li>Nespresso: {checkAmentites("nespresso")}</li>
              </ul>
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
          {roomDetail && (
            <Button onClick={handleClose} autoFocus>
              BOOK NOW
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

const CardContainer = styled.div`
  width: 346px;
  height: 300px;

  background: #d9d9d9;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
  cursor: pointer;
`;

const CardTitle = styled.div`
  color: #fff;
  font-weight: bold;
  position: absolute;
  bottom: 10%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;
