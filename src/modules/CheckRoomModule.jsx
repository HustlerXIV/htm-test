import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

import BasicButton from "../components/Input/BasicButton";
import DatePicker from "../components/Input/DatePicker";
import Topic from "../components/Topic";
import InputForm from "../components/Input/InputForm";

export default function CheckRoomModule({ setAdvancedSearch }) {
  return (
    <div>
      <Topic title="CHECK ROOM AVAILABLILITY:" />
      <Box>
        <InputContainer>
          <DatePicker label="Check-in" />
          <DatePicker label="Check-out" />
          <InputForm label="Guests" color="#fff" type="number" />
        </InputContainer>
        <div>
          <BasicButton
            click={setAdvancedSearch}
            title="SEARCH"
            icon={<SearchIcon />}
            bgColor="#006AD8"
          />
        </div>
      </Box>
    </div>
  );
}

const Box = styled.div`
  background: #5f84b1;
  box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 100px;
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
    height: auto;
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
