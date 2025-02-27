"use client";

import styled from "styled-components";

const HeaderWrap = styled.header`
  background: transparent;
  border-bottom: 1px solid;
  margin: 0 2rem;
  padding: 2rem 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <span>Main</span>
        <span>Main</span>
        <span>Main</span>
        <span>Main</span>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
