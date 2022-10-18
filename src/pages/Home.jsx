import { Container } from "@mui/material";
import React, { useState } from "react";
import AdvancedSearchModule from "../modules/AdvancedSearchModule";

import BannerModule from "../modules/BannerModule";
import CheckRoomModule from "../modules/CheckRoomModule";
import RoomModule from "../modules/RoomModule";
import RoomTypeModule from "../modules/RoomTypeModule";

export default function Home() {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <>
      <BannerModule />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "30px 0px",
        }}
      >
        <CheckRoomModule setAdvancedSearch={() => setAdvancedSearch(true)} />
        {advancedSearch && (
          <AdvancedSearchModule
            name={name}
            desc={desc}
            setName={setName}
            setDesc={setDesc}
          />
        )}
        {advancedSearch ? (
          <RoomModule name={name} desc={desc} />
        ) : (
          <RoomTypeModule />
        )}
      </Container>
    </>
  );
}
