import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("App", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
