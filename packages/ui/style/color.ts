enum GlobalColorEnum {
  black,
  gray,
  red,
}

type ColorType = {
  [K in keyof typeof GlobalColorEnum]: {
    main: string;
    hover: string;
  };
};

export const globalColor: ColorType = Object.freeze({
  black: {
    main: "#001A1D",
    hover: "rgba(0, 26, 29, 0.05)",
  },
  gray: {
    main: "#636669",
    hover: "#E3E6E9",
  },
  red: {
    main: "#ED2B2B",
    hover: "#E3E6E9",
  },
});
