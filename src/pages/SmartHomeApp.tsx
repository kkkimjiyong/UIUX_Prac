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

const smoothAppear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1; 
    }
`;

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
  animation: ${smoothAppear} 1s linear;
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
