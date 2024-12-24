import classes from "./Navbar.module.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <ThemeSwitcher />
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
