import { About } from "pages/AboutPage";
import { Main } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "Main",
  ABOUT = "About",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RoutePath.Main, element: <Main /> },
  [AppRoutes.ABOUT]: { path: RoutePath.About, element: <About /> },
};
