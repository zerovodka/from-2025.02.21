import { Url } from "next/dist/shared/lib/router/router";
import { GITHUB_LINK, LINKEDIN_LINK, TISTORY_LINK } from "~public/constants";

enum AboutENum {
  Github,
  LinkedIn,
  Tistory,
}

type AboutConstantType = {
  [K in keyof typeof AboutENum]: Url;
};

/**
 * @description about profile as constant
 */
export const aboutConstants: AboutConstantType = {
  Github: GITHUB_LINK,
  LinkedIn: LINKEDIN_LINK,
  Tistory: TISTORY_LINK,
} as const;
