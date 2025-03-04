"use client";

import styled from "styled-components";
import Header from "~components/Header";
import SideBar from "~components/SideBar";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
`;

const HomeContent = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-self: center;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1) inset;
`;

export default function Home() {
  return (
    <HomeContainer>
      <SideBar />
      <HomeWrapper>
        <Header />
        <HomeContent></HomeContent>
      </HomeWrapper>
    </HomeContainer>
  );
}
