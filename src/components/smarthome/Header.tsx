import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledLayout>
      <StyledBackSvg
        onClick={() => navigate("/")}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.00236528 11.989C0.00190896 11.7558 0.0832417 11.5297 0.232246 11.3501L5.22966 5.36062C5.39931 5.15676 5.6431 5.02856 5.90739 5.00422C6.17168 4.97989 6.43482 5.06141 6.63893 5.23085C6.84305 5.40029 6.9714 5.64378 6.99577 5.90774C7.02014 6.1717 6.93852 6.43452 6.76887 6.63838L2.29118 11.989L6.60895 17.3397C6.69197 17.4418 6.75397 17.5593 6.79138 17.6854C6.8288 17.8115 6.84088 17.9438 6.82695 18.0746C6.81302 18.2054 6.77334 18.3321 6.7102 18.4475C6.64706 18.563 6.5617 18.6648 6.45903 18.7472C6.35626 18.8386 6.23569 18.9079 6.10489 18.9506C5.97408 18.9933 5.83585 19.0086 5.69886 18.9954C5.56187 18.9823 5.42906 18.9411 5.30877 18.8743C5.18848 18.8076 5.08328 18.7167 4.99978 18.6074L0.172278 12.6179C0.046826 12.4332 -0.0129979 12.2117 0.00236528 11.989Z"
          fill="#F8F8F8"
        />
      </StyledBackSvg>

      <div>Bedroom</div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
          stroke="#F8F8F8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
          stroke="#F8F8F8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  position: absolute;
  z-index: 10;
  top: 40px;
  width: 90%;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: var(--color-white);
`;

const StyledBackSvg = styled.svg`
  :hover {
    cursor: pointer;
  }
`;
