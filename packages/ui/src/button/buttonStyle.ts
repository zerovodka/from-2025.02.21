import { CSSProp } from "styled-components";
import { globalColor } from "../../style/color";

enum ButtonStyleEnum {
  primary,
  secondary,
  warning,
}

type ButtonStyleProp = {
  [K in keyof typeof ButtonStyleEnum]: CSSProp;
};

export const buttonStyle: ButtonStyleProp = Object.freeze({
  primary: {
    background: "transparent",
    color: globalColor.black.main,
    "&:hover": {
      background: globalColor.black.hover,
    },
  },
  secondary: {
    background: "transparent",
    color: globalColor.gray.main,
    "&:hover": {
      background: globalColor.gray.hover,
    },
  },
  warning: {
    background: "transparent",
    color: globalColor.red.main,
    "&:hover": {
      background: globalColor.red.hover,
    },
  },
});
