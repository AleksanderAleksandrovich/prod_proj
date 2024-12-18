import { useMemo, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

type ProviderThemeProps = {
  children?: React.ReactNode;
};

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.Light;

export const ProviderTheme = ({ children }: ProviderThemeProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProp = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProp}>
      {children}
    </ThemeContext.Provider>
  );
};
