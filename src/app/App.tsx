import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Тема</button>

      <AppRouter />
    </div>
  );
};

export default App;
