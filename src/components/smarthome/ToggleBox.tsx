import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Humidifier } from "@/assets/smarthome/humidifier.svg";
import { ReactComponent as Purifier } from "@/assets/smarthome/purifier.svg";

export const ToggleBox = ({
  amount,
  type,
}: {
  amount: number;
  type: string;
}) => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <StyledLayout>
      <StyledFlexBox>
        <StyledAmountTxt>{amount}%</StyledAmountTxt>
        {type === "humidity" ? <Humidifier /> : <Purifier />}
      </StyledFlexBox>
      <StyledContentTxt>
        Humidifier
        <br />
        Air
      </StyledContentTxt>
      <StyledUnderLine />
      <StyledToggleSection>
        <StyledToggleTxt>Mode 2</StyledToggleTxt>
        <StyledToggleBox>
          <StyledToggleCircle onClick={() => setClick(!click)} click={click} />
        </StyledToggleBox>
      </StyledToggleSection>
    </StyledLayout>
  );
};

const smoothAppear = keyframes`
    from {
        opacity: 0;
transform: translateY(10px);
    }
    to {
        opacity: 1;
transform: translateY(0px);
        
    }
`;

const StyledLayout = styled.section`
  animation: ${smoothAppear} 0.6s linear;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 10;
  width: 45%;
  height: 140px;
  padding: 20px 0;
  background-color: var(--color-dark);
  :hover {
    border: 1px solid black;
    box-shadow: 2px 5px 10px -5px black;
  }
  border-radius: 20px;
`;

const StyledFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const StyledAmountTxt = styled.div`
  color: var(--color-white);
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const StyledContentTxt = styled.div`
  width: 80%;
  font-size: 14px;
  color: var(--color-white);
  opacity: 0.3;
  font-weight: 300;
  margin-bottom: 20px;
`;

const StyledUnderLine = styled.div`
  width: 80%;
  height: 1px;
  border-bottom: 1px solid var(--color-white);
  opacity: 0.3;
`;

const StyledToggleSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 15px 0px 20px 0px;
`;

const StyledToggleTxt = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: var(--color-white);
  opacity: 0.3;
`;

const StyledToggleBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: var(--color-toggleBack);
`;

const StyledToggleCircle = styled.div<{ click: boolean }>`
  position: absolute;
  left: ${({ click }) => (click ? "3px" : "31px")};
  transition: all 200ms linear;
  width: 25px;
  height: 25px;
  border-radius: 13px;
  background-color: var(--color-dark);
`;
