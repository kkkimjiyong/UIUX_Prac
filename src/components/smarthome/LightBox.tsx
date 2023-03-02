import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

export const LightBox = () => {
  const [value, setValue] = useState<number>(0);
  const [value1, setValue1] = useState<number>(0);
  console.log(value);

  return (
    <StyledLightSection>
      {" "}
      <StyledInputLabel>Main light</StyledInputLabel>
      <StyledInputSection>
        <StyledRangeInput
          className="rangeInput"
          background={value * 10}
          value={value}
          type={"range"}
          max="10"
          min="0"
          onChange={(e: any) => setValue(e.target.value)}
        />
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99997 1V3.93M18.78 12.65V17.59H1.21997V12.65C1.21997 7.83 5.11997 3.93 9.93997 3.93H10.06C14.88 3.93 18.78 7.83 18.78 12.65ZM13.65 17.59C13.5864 18.5149 13.1743 19.3813 12.4969 20.0142C11.8194 20.6471 10.9271 20.9994 9.99997 21C8.06997 21 6.47997 19.5 6.34997 17.59H13.65Z"
            stroke="#F8F8F8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </StyledInputSection>
      <StyledInputLabel>Floor lamp</StyledInputLabel>
      <StyledInputSection>
        <StyledRangeInput
          className="rangeInput"
          background={value1 * 10}
          type={"range"}
          value={value1}
          max="10"
          min="0"
          onChange={(e: any) => setValue1(e.target.value)}
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15V22M7.99999 22H16M5.78999 14.69H18.21C19.87 14.69 20.87 13.38 20.44 11.78L18.24 3.71C17.98 2.77 16.97 2 16.01 2H7.98999C7.02999 2 6.01999 2.77 5.76999 3.7L3.56999 11.77C3.12999 13.38 4.12999 14.69 5.78999 14.69Z"
            stroke="#F8F8F8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </StyledInputSection>
    </StyledLightSection>
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

const StyledLightSection = styled.section`
  animation: ${smoothAppear} 600ms linear;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 12px 30px 12px;
  margin-top: 20px;
  width: 85%;
  height: 100px;
  border-radius: 20px;
  background-color: var(--color-dark);
`;

const StyledInputSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const StyledInputLabel = styled.label`
  color: #f8f8f8;
  width: 90%;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.3;
  margin-bottom: 10px;
`;

const StyledRangeInput = styled.input<{ background: number }>`
  width: 90%;
  -webkit-appearance: none;
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 15px;
  background: ${({ background }) => `linear-gradient(
    to right,
    #FFA64D 0%,
    #FFA64D ${background}%,
    #393637 ${background}%,
    #393637 100%
  )`};
  border-radius: 20px;
  height: 8px;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #ffffff;
    cursor: pointer;
    border: 7px solid #6b6869;
    height: 25px;
    width: 25px;
    border-radius: 20px;
  }
`;
