import { useTranslation } from "react-i18next";
import classes from "./Navbar.module.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classNames(classes.links)}>/</div>
    </div>
  );
};
