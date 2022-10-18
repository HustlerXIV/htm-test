import { Button, ButtonGroup, Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <BackgroundNavbar>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <ButtonGroup variant="text">
          <LinkTo href="/">
            <Button sx={{ color: "#fff" }} key="one">
              HOMEPAGE
            </Button>
          </LinkTo>
        </ButtonGroup>
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

const LinkTo = styled.a`
  text-decoration: none;
`;
