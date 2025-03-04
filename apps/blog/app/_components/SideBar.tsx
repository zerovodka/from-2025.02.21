"use client";

import { useState } from "react";
import styled from "styled-components";
import Profile from "./Profile";

type SideBarOpenProp = {
  $isOpen: boolean;
};

const SideBarContainer = styled.div<SideBarOpenProp>`
  width: ${(props) => (props.$isOpen ? "30%" : "10%")};
  transition: width 1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
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
      <Profile />
      <p>1231111111111111111</p>
    </SideBarContainer>
  );
};

export default SideBar;
