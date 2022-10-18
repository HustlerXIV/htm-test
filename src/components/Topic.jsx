import React from "react";
import styled from "styled-components";

export default function Topic({ title }) {
  return <Typography>{title}</Typography>;
}

const Typography = styled.div`
  font-size: 20px;
  color: #5f84b1;
`;
