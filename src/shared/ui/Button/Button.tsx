import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

type ButtonProps = {
  theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  theme,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(classes.Button, {}, [className, classes[theme]])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
