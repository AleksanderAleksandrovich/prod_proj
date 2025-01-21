import { useEffect, useMemo, useState } from "react";

import { Theme, ThemeContext } from "../lib/ThemeContext";

import { THEME_LOCALSTORAGE_KEY } from "shared/const/localstorage";

type ProviderThemeProps = {
  children?: React.ReactNode;
  initialTheme?: Theme;
};

const defaultTheme =
  (localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme) || Theme.Light;

export const ProviderTheme = ({
  children,
  initialTheme,
}: ProviderThemeProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProp = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProp}>
      {children}
    </ThemeContext.Provider>
  );
};
