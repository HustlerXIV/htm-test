import React from "react";
import styled from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import BasicButton from "../components/Input/BasicButton";
import Topic from "../components/Topic";
import InputForm from "../components/Input/InputForm";

export default function AdvancedSearchModule({ name, desc, setName, setDesc }) {
  const handleClear = () => {
    setName("");
    setDesc("");
  };
  return (
    <div>
      <Topic title="ADVANCED SEARCH:" />
      <Box>
        <InputContainer>
          <InputForm
            label="Name"
            color="#5F84B1"
            onChange={setName}
            disabled={desc}
            value={name}
          />
          <NormalText>OR</NormalText>
          <InputForm
            label="Description"
            color="#5F84B1"
            onChange={setDesc}
            disabled={name}
            value={desc}
          />
        </InputContainer>
        <div>
          <BasicButton
            click={handleClear}
            title="CLEAR SEARCH"
            icon={<HighlightOffIcon />}
            bgColor="#1565C0"
          />
        </div>
      </Box>
    </div>
  );
}

const Box = styled.div`
  background: #fff;
  border: 2px solid #5f84b1;
  box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 100px;
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 20px;
  }
`;

const NormalText = styled.h3`
  font-size: 10px;
  color: #5f84b1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
