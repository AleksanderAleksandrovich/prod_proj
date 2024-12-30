import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка</div>}>
      <Routes>
        {Object.entries(RouteConfig).map(([route, { element, path }]) => (
          <Route
            element={<div className="Page-wrapper">{element}</div>}
            key={route}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
