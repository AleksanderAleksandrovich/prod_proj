import { useContext } from "react";

import {  Theme, ThemeContext } from "./ThemeContext";

import { THEME_LOCALSTORAGE_KEY } from "shared/const/localstorage";



type UseThemeResult = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
