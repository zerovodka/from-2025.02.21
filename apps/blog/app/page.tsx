"use client";

import styled from "styled-components";
import Header from "~components/Header";
import ThreeJs from "~components/ThreeJs";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
`;

const HomeContent = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flexdirection: column;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <Header />
      <HomeContent>
        <ThreeJs isMouseHandler />
      </HomeContent>
    </HomeWrapper>
  );
}
