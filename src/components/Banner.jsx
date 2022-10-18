import React from "react";
import styled from "styled-components";

export default function Banner() {
  return <BackgroundBanner></BackgroundBanner>;
}

const BackgroundBanner = styled.div`
  width: 100%;
  height: 380px;
  background-color: #21277b;
  background-image: url("https://us.v-cdn.net/5021068/uploads/editor/yh/x9aztp0yct3l.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
