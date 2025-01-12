import { useEffect, useMemo, useState } from "react";

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";

type ProviderThemeProps = {
  children?: React.ReactNode;
  initialTheme?: Theme;
};

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.Light;

export const ProviderTheme = ({
  children,
  initialTheme,
}: ProviderThemeProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProp = useMemo(() => ({ theme, setTheme }), [theme]);


  return (
    <ThemeContext.Provider value={defaultProp}>
      {children}
    </ThemeContext.Provider>
  );
};
