import { Suspense, useEffect } from "react";

import { useTypedDispatch } from "app/providers/StoreProvider";
import { AppRouter } from "app/providers/router";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { userActions } from "entities/User";

import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("App", {}, [])}>
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
