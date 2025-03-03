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

const HeaderRightSection = styled.div``;

const HeaderLeft = () => {
  return (
    <HeaderLeftSection>
      <Link href={"/resume"}>resume</Link>
      <Link href={"/career"}>career</Link>
      <Link href={"/post"}>posts</Link>
    </HeaderLeftSection>
  );
};

const HeaderRight = () => {
  return (
    <HeaderRightSection>
      <Link href={"https://github.com/zerovodka"} target="_blank">
        github
      </Link>
      <Link href={"/career"}>tistory</Link>
    </HeaderRightSection>
  );
};

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <HeaderLeft />
        <HeaderRight />
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
