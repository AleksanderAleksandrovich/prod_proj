import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка</div>}>
      <Routes>
        {Object.entries(RouteConfig).map(([route, routeProps]) => (
          <Route key={route} {...routeProps} />
        ))}
      </Routes>
    </Suspense>
  );
};
