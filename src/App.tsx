import "./styles/index.scss";

import { Route, Routes, Link } from "react-router-dom";

import { Suspense } from "react";

import { MainLazy } from "./page/Main/Main.lazy";
import { AboutLazy } from "./page/About/About.lazy";
import Counter from "./components/Counter";

import { useTheme } from "./theme/useTheme";

import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={classNames("app", { hovered: true, reset: false }, [
        theme,
        "somw",
      ])}
    >
      <button onClick={toggleTheme}>Тема</button>
      <Link to={"/"}>домой</Link>
      <Link to={"/about"}>инфа</Link>
      <Counter />
      <Suspense fallback={<div>Загрузка</div>}>
        <Routes>
          <Route path="/" element={<MainLazy />} />
          <Route path="/about" element={<AboutLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
