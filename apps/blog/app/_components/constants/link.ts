import { Url } from "next/dist/shared/lib/router/router";

enum LinkEnum {
  resume,
  career,
  posts,
}

type LinkConstantType = {
  [K in keyof typeof LinkEnum]: Url;
};

export type LinkConstantKeyType = keyof typeof LinkEnum;

/**
 * @description about link as constant
 */
export const linkConstants: LinkConstantType = {
  resume: "/resume",
  career: "/career",
  posts: "/post",
} as const;
