import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import HomeImg from "@/assets/smarthome/smarthomeapp.png";
import { NavBar } from "@components/smarthome/NavBar";
import { LightBox } from "@components/smarthome/LightBox";
import { ToggleBox } from "@components/smarthome/ToggleBox";
import { Header } from "@components/smarthome/Header";

export const SmartHomeApp = () => {
  const [humidity, setHumidity] = useState<number>(36);
  const [purify, setPurify] = useState<number>(73);

  return (
    <StyledLayout>
      <Header />
      <StyledBackImg src={HomeImg} alt="backimg" />
      <StyledSpaceDiv />
      <StyledFlexSection>
        <ToggleBox amount={humidity} type={"humidity"} />
        <ToggleBox amount={purify} type={"purify"} />
      </StyledFlexSection>
      <LightBox />
      <NavBar />
    </StyledLayout>
  );
};

const StyledLayout = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 415px;
  height: 100vh;
  background-color: var(--color-back);
`;

const StyledBackImg = styled.img`
  position: absolute;
  width: 100%;
  max-width: 500px;
  height: 500px;
`;

const StyledSpaceDiv = styled.div`
  height: 50%;
  width: 100%;
  background: transparent;
`;

const StyledFlexSection = styled.section`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
`;

const StyledToggleSection = styled.section`
  position: relative;
  z-index: 10;
  width: 45%;
  height: 180px;
  background-color: var(--color-dark);
  border: 1px solid black;
  box-shadow: 2px 5px 10px -5px black;
  border-radius: 20px;
`;

const StyledLightSection = styled.section`
  margin-top: 20px;
  width: 92%;
  height: 150px;
  border-radius: 20px;
  background-color: var(--color-dark);
`;
