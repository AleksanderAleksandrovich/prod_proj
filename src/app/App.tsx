import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("App", {}, [theme])}>
      <Navbar />
      <div className="Content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
