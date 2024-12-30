import classes from "./Navbar.module.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classNames(classes.links)}>
        <AppLink
          className={classes.mainLink}
          theme={AppLinkTheme.INVERTED}
          to="/"
        >
          домой
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to="/about">
          инфа
        </AppLink>
      </div>
    </div>
  );
};
