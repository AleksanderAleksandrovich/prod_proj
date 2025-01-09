import { useState } from "react";

import classes from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import Info from "shared/assets/icons/Info.svg";
import Main from "shared/assets/icons/Main.svg";
type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const onToggled = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
      data-testid="sidebar"
    >
      <Button
        className={classes.collapsedBtn}
        data-testid="sidebar-toggle"
        onClick={onToggled}
        size={ButtonSize.L}
        square
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={classes.items}>
        <AppLink
          className={classes.item}
          theme={AppLinkTheme.INVERTED}
          to={RoutePath.main}
        >
          <Info className={classes.icon} />
          <span className={classes.link}>{t("домой")}</span>
        </AppLink>
        <AppLink
          className={classes.item}
          theme={AppLinkTheme.INVERTED}
          to={RoutePath.about}
        >
          <Main className={classes.icon} />
          <span className={classes.link}>{t("инфа")}</span>
        </AppLink>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} short={collapsed} />
      </div>
    </div>
  );
};
