import { useState } from "react";

import classes from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";


import { Button } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
        data-testid="sidebar-toggle"
        onClick={onToggled}
      >
        toggle
      </Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} />
      </div>
    </div>
  );
};
