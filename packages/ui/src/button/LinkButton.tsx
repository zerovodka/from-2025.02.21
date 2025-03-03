"use client";

import Link, { LinkProps } from "next/link";
import styled from "styled-components";

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
}

const LinkButtonContent = styled.a`
  background: cornflowerblue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  cursor: pointer;
`;

/**
 * @interface LinkButtonProps
 * @requires href : string
 * @requires children : ReactNode
 * @description
 * - passHref를 통해 children a 태그로 href 속성을 넘겨준다
 * - legacyBehavior: https://nextjs.org/docs/app/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
 */
export const LinkButton = (prop: LinkButtonProps) => {
  const { href, children, passHref, legacyBehavior, ...rest } = prop;

  return (
    <Link href={href} passHref legacyBehavior {...rest}>
      <LinkButtonContent>{children}</LinkButtonContent>
    </Link>
  );
};
