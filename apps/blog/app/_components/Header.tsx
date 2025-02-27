"use client";

import styled from "styled-components";
import LogoWhite from "~public/icon/logo_bg_white.svg";

const HeaderStyle = styled.header`
  background: transparent;
  border-bottom: 1px solid;
  margin: 0 2rem;
  padding: 2rem 0;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.span``;

const Header = () => {
  return (
    <HeaderStyle>
      <LogoWhite />
      <span>Main</span>
      <span>Main</span>
      <span>Main</span>
      <span>Main</span>
    </HeaderStyle>
  );
};

export default Header;
