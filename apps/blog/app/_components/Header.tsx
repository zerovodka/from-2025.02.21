"use client";

import styled from "styled-components";
import { BLOG_TITLE } from "~public/constants";

const HeaderStyle = styled.section`
  background: transparent;
  position: fixed;
  height: 10dvh;
  width: 100%;
  border-bottom: 1px solid;
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
