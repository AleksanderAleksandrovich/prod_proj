import classes from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import { useState } from "react";

import { Button } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

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
    >
      <Button onClick={onToggled}>toggle</Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
