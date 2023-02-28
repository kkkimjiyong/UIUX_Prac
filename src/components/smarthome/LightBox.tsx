import React from "react";
import styled from "styled-components";

export const LightBox = () => {
  return <StyledLightSection></StyledLightSection>;
};
const StyledLightSection = styled.section`
  margin-top: 20px;
  width: 92%;
  height: 150px;
  border-radius: 20px;
  background-color: var(--color-dark);
`;
