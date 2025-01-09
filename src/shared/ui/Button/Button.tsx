import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

type ButtonProps = {
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  theme,
  square,
  size = ButtonSize.M,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(classes.Button, { [classes.square]: square }, [
        className,
        classes[theme],
        classes[size],
      ])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
