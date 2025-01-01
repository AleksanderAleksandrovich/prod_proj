import { lazy } from "react";

export const AboutLazy = lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./About")), 3000);
    })
);
