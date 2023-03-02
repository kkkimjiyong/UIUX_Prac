import React, { useState } from "react";
import styled from "styled-components";
import { FiHome } from "react-icon/fi";

export const NavBar = () => {
  const [click, setClick] = useState<Number>(1);

  return (
    <StyledContainer>
      <HomeSvg
        onClick={() => setClick(1)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        opacity={click === 1 ? "1" : "0.6"}
      >
        <path
          d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
          stroke={click === 1 ? "#FFB267" : "#F8F8F8"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 22V12H15V22"
          stroke={click === 1 ? "#FFB267" : "#F8F8F8"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </HomeSvg>

      <SearchSvg
        onClick={() => setClick(2)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity={click === 2 ? "1" : "0.6"}>
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke={click === 2 ? "#FFB267" : "#F8F8F8"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 21L16.65 16.65"
            stroke={click === 2 ? "#FFB267" : "#F8F8F8"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </SearchSvg>
      <GridSvg
        onClick={() => setClick(3)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity={click === 3 ? "1" : "0.6"}>
          <path
            d="M10 3H3V10H10V3Z"
            stroke={click === 3 ? "#FFB267" : "#F8F8F8"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 3H14V10H21V3Z"
            stroke={click === 3 ? "#FFB267" : "#F8F8F8"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 14H14V21H21V14Z"
            stroke={click === 3 ? "#FFB267" : "#F8F8F8"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 14H3V21H10V14Z"
            stroke={click === 3 ? "#FFB267" : "#F8F8F8"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </GridSvg>
      <PersonSvg
        opacity={click === 4 ? "1" : "0.6"}
        onClick={() => setClick(4)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity={click === 4 ? "1" : "0.6"} clip-path="url(#clip0_4_133)">
          <path
            d="M20.4434 21.2871V19.2871C20.4434 18.2262 20.0219 17.2088 19.2718 16.4587C18.5216 15.7085 17.5042 15.2871 16.4434 15.2871H8.44336C7.38249 15.2871 6.36508 15.7085 5.61493 16.4587C4.86479 17.2088 4.44336 18.2262 4.44336 19.2871V21.2871"
            stroke={click === 4 ? "#FFB267" : "#F8F8F8"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.4434 11.2871C14.6525 11.2871 16.4434 9.49625 16.4434 7.28711C16.4434 5.07797 14.6525 3.28711 12.4434 3.28711C10.2342 3.28711 8.44336 5.07797 8.44336 7.28711C8.44336 9.49625 10.2342 11.2871 12.4434 11.2871Z"
            stroke={click === 4 ? "#FFB267" : "#F8F8F8"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_133">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </PersonSvg>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 20px 0;
`;

const HomeSvg = styled.svg``;
const SearchSvg = styled.svg``;
const GridSvg = styled.svg``;
const PersonSvg = styled.svg``;
