"use client";

import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { GlobalStyle } from "./globalStyle";

interface StyledComponentsRegistryProp {
  children: React.ReactNode;
}

const StyledComponentsRegistry = ({
  children,
}: StyledComponentsRegistryProp) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag(); // 메모리 누수 방지 코드
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyle />
      {children}
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
