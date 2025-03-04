"use client";

import { useState } from "react";
import styled from "styled-components";

type SideBarOpenProp = {
  $isOpen: boolean;
};

const SideBarContainer = styled.div<SideBarOpenProp>`
  background: skyblue;
  width: ${(props) => (props.$isOpen ? "20%" : "10%")};
  transition: width 1s ease-in-out;
`;

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideBarContainer
      $isOpen={isOpen}
      onMouseOver={() => {
        setIsOpen(true);
      }}
      onMouseOut={() => {
        setIsOpen(false);
      }}
    >
      <button>{isOpen ? "닫기" : "열기"}</button>
    </SideBarContainer>
  );
};

export default SideBar;
