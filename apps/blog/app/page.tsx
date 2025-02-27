"use client";

import styled from "styled-components";
import Header from "~components/Header";
import ThreeJs from "~components/ThreeJs";
import LogoWhite from "~public/icon/logo_bg_white.svg";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
`;

const HomeContent = styled.section`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-self: center;
`;

const SVG = styled.svg``;

export default function Home() {
  return (
    <HomeWrapper>
      <Header />
      <HomeContent>
        <LogoWhite width={"100%"} height={"100%"} />
        <div></div>
        <div></div>
        <ThreeJs isMouseHandler />
      </HomeContent>
    </HomeWrapper>
  );
}
