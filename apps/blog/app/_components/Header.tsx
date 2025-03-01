"use client";

import Link from "next/link";
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

const HeaderLeftSection = styled.div``;

const HeaderLeft = () => {
  return (
    <HeaderLeftSection>
      <Link href={"/resume"}>resume</Link>
      <Link href={"/career"}>career</Link>
    </HeaderLeftSection>
  );
};

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <HeaderLeft />
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
