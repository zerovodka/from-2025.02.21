"use client";

import { LinkButton } from "@repo/ui/button/LinkButton";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundBox = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.1);
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const NotFound: NextPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundBox>
        <p>존재하지 않는 페이지입니다</p>
        <LinkButton href={"/"}>메인 페이지로 이동</LinkButton>
      </NotFoundBox>
    </NotFoundContainer>
  );
};

export default NotFound;
