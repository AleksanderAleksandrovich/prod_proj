import classes from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import { Theme, useTheme } from "app/providers/ThemeProvider";

import { Button, ThemeButton } from "shared/ui/Button/Button";

import DarkThemeIcon from "shared/assets/icons/DarkThemeIcon.svg";
import LightThemeIcon from "shared/assets/icons/LightThemeIcon.svg";

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(classes.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.Dark ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};
