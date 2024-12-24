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
          to={"/"}
          className={classes.mainLink}
          theme={AppLinkTheme.INVERTED}
        >
          домой
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.INVERTED}>
          инфа
        </AppLink>
      </div>
    </div>
  );
};
