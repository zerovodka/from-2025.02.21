"use client";

import { LinkButton } from "@repo/ui/button/LinkButton";
import styled from "styled-components";
import { aboutConstants } from "~components/constants/about";
import { linkConstants } from "~components/constants/link";

const HeaderWrap = styled.header`
  padding: 2rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderSection = styled.div`
  display: flex;
  gap: 2rem;
`;

const HeaderLeft = () => {
  return (
    <HeaderSection>
      {Object.keys(linkConstants).map((link, idx) => {
        return (
          <LinkButton.Primary
            key={`${link}_${idx}`}
            href={linkConstants[link as keyof typeof linkConstants]}
          >
            {link}
          </LinkButton.Primary>
        );
      })}
    </HeaderSection>
  );
};

const HeaderRight = () => {
  return (
    <HeaderSection>
      {Object.keys(aboutConstants).map((about, idx) => {
        return (
          <LinkButton.Primary
            key={`${about}_${idx}`}
            href={aboutConstants[about as keyof typeof aboutConstants]}
            target="_blank"
          >
            {about}
          </LinkButton.Primary>
        );
      })}
    </HeaderSection>
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
