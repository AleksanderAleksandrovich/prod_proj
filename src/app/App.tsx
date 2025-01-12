import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";

import { AppRouter } from "app/providers/router";
import { Sidebar } from "widgets/Sidebar";

import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("App", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="Content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
