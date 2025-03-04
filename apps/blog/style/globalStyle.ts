import { createGlobalStyle } from "styled-components";

/**
 * Global Style
 */

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  
body, p {
  margin: 0;
};

a {
  text-decoration: none;
};

p, span {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
};

`;
