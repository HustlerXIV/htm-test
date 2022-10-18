import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import roomData from "../utils/roomData";

export default function RoomModule({ name, desc }) {
  const [data, setData] = useState(roomData);

  const filterByName = data.filter((item) =>
    item.name.toLowerCase().toString().includes(name.toLowerCase())
  );

  const filterByDesc = data.filter((item) =>
    item.description.toLowerCase().toString().includes(desc.toLowerCase())
  );

  const checkFilter = () => {
    if (name) {
      setData(filterByName);
    } else if (desc) {
      setData(filterByDesc);
    } else {
      setData(roomData);
    }
  };

  useEffect(() => {
    checkFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, desc]);

  return (
    <RoomContainer>
      {data.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          img={item.images[0]?.img}
          detail={item.description}
          roomDetail={true}
          armenties={item.amenities}
        />
      ))}
      {data.length === 0 && <p>NO ROOM</p>}
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 20px;
  justify-content: center;
  margin-top: 20px;
`;
