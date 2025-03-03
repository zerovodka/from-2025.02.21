"use client";

import Link, { LinkProps } from "next/link";
import styled from "styled-components";
import { buttonStyle } from "../../style/buttonStyle";

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
}

const LinkButtonContent = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  cursor: pointer;
  &:hover: {
    background-color: red;
  }
`;

const LinkComponent = (prop: LinkButtonProps) => {
  const { href, children, passHref, legacyBehavior, ...rest } = prop;

  return (
    <Link href={href} passHref legacyBehavior {...rest}>
      <LinkButtonContent>{children}</LinkButtonContent>
    </Link>
  );
};

const Primary = styled(LinkButtonContent)`
  ${buttonStyle.primary}
`;
const Secondary = styled(LinkButtonContent)`
  ${buttonStyle.secondary}
`;
const Warning = styled(LinkButtonContent)`
  ${buttonStyle.warning}
`;

/**
 * @interface LinkButtonProps
 * @requires children : ReactNode
 * @description
 * - Primary : 검정
 * - Secondary : 그레이
 * - Warning : 레드
 * - passHref를 통해 children a 태그로 href 속성을 넘겨준다
 * - legacyBehavior: https://nextjs.org/docs/app/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
 */
export const LinkButton = {
  Primary,
  Secondary,
  Warning,
};
