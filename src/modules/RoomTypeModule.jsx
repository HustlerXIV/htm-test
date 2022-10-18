import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Topic from "../components/Topic";
import roomType from "../utils/roomType.json";

export default function RoomTypeModule() {
  return (
    <>
      <Topic title="ROOM TYPES:" />
      <RoomTypeContainer>
        {roomType.map((item, index) => (
          <Card
            key={index}
            name={item.type}
            img={item.image}
            detail={item.detail}
          />
        ))}
      </RoomTypeContainer>
    </>
  );
}

const RoomTypeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 10px;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
