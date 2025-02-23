import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { PageLoader } from "widgets/PageLoader";

import { RouteConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.entries(RouteConfig).map(([route, { element, path }]) => (
        <Route
          element={
            <div className="Page-wrapper">
              <Suspense fallback={<PageLoader />}>{element}</Suspense>
            </div>
          }
          key={route}
          path={path}
        />
      ))}
    </Routes>
  );
};
