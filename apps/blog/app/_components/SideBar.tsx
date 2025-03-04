"use client";

import { useState } from "react";
import styled from "styled-components";
import { animation } from "~style/animation";

type SideBarOpenProp = {
  $isOpen: boolean;
};

const SideBarContainer = styled.div<SideBarOpenProp>`
  background: skyblue;
  width: auto;
  animation: ${(props) =>
    props.$isOpen ? animation.narrowToWide : animation.wideToNarrow};
`;

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SideBarContainer $isOpen={isOpen}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "닫기" : "열기"}
      </button>
    </SideBarContainer>
  );
};

export default SideBar;
