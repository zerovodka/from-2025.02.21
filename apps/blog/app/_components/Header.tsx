"use client";

import styled from "styled-components";
import { BLOG_TITLE } from "~public/constants";

const HeaderStyle = styled.header`
  background: transparent;

  border-bottom: 1px solid;
  margin: 2rem;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 10dvh;
`;

const HeaderTitle = styled.span``;

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderTitle>{BLOG_TITLE}</HeaderTitle>
    </HeaderStyle>
  );
};

export default Header;
