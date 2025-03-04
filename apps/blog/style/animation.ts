import { css, keyframes } from "styled-components";

const narrowToWide = keyframes`
  from {
    width: 10%
  }

  to {
    width: 20%
  }
`;

const wideToNarrow = keyframes`
  from {
    width: 20%
  }

  to {
    width: 10%
  }
`;

export const animation = Object.freeze({
  narrowToWide: css`
    ${narrowToWide} 1s ease-in forwards
  `,
  wideToNarrow: css`
    ${wideToNarrow} 1s ease-out forwards
  `,
});
