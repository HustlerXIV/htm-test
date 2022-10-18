import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <BackgroundNavbar>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        This template use for Online Test created by Napat Jaiyim
      </Container>
    </BackgroundNavbar>
  );
}

const BackgroundNavbar = styled.div`
  width: 100%;
  height: 70px;
  background-color: #5f84b1;
  color: #fff;

  display: flex;
  align-items: center;
`;
