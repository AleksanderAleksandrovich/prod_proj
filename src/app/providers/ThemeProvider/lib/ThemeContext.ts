import { createContext } from "react";

export enum Theme {
  Light = "app_light_theme",
  Dark = "app_dark_theme",
}

type ContextProps = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ContextProps>({});


