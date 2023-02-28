import React from "react";
import styled from "styled-components";
import SmartHome from "@/assets/smarthome/smarthomeapp.png";
import { useNavigate } from "react-router-dom";

export const Index = () => {
  const navigate = useNavigate();

  return (
    <StyledLayout>
      <StyledNavigateButton onClick={() => navigate("/smarthomeapp")}>
        <StyledSmartHomeApp src={SmartHome} alt="스마트홈앱" />
        <div className="space" />
        Smart
        <br /> Home <br />
        App
      </StyledNavigateButton>
    </StyledLayout>
  );
};

const StyledLayout = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  height: 100vh;
`;

const StyledNavigateButton = styled.button`
  width: 80%;
  height: 80px;
  border-radius: 20px;
  background-color: var(--color-dark);
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .space {
    width: 40px;
  }
`;

const StyledSmartHomeApp = styled.img`
  position: absolute;
  left: 40px;
  top: 0;
  width: 25%;
  height: 100%;
`;
