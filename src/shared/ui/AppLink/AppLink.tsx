import { classNames } from "shared/lib/classNames/classNames";
import classes from "./AppLink.module.scss";

import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

type AppLinkProps = {
  children: React.ReactNode;
  theme?: AppLinkTheme;
} & LinkProps;

export const AppLink = ({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  to,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      className={classNames(classes.AppLink, {}, [className, classes[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
