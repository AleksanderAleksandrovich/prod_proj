import "./styles/index.scss";

import { Route, Routes, Link } from "react-router-dom";

import { Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import { Main } from "pages/MainPage";
import { About } from "pages/AboutPage";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Тема</button>
      <Link to={"/"}>домой</Link>
      <Link to={"/about"}>инфа</Link>
      <AppRouter />
    </div>
  );
};

export default App;
