import { createContext } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

type ContextProps = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ContextProps>({ theme: Theme.Dark });

export const LOCAL_STORAGE_THEME_KEY = "theme";
