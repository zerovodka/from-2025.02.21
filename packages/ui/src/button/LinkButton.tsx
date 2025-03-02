"use client";

import { DetailedHTMLProps, ReactNode } from "react";
import styled from "styled-components";

interface LinkButtonProps
  extends Omit<
    DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    "href" | "children"
  > {
  href: string;
  children: ReactNode;
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
 * - a 태그 prop을 그대로 받는다
 * - href, children 값 required
 */
export const LinkButton = (prop: LinkButtonProps) => {
  const { href, children, ...rest } = prop;

  return (
    <LinkButtonContent href={href} {...rest}>
      {children}
    </LinkButtonContent>
  );
};
