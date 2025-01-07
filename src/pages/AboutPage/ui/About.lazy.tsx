import { lazy } from "react";

export const AboutLazy = lazy(
  () =>
    new Promise((res) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => res(import("./About")), 3000);
    })
);
