import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ProviderTheme } from "./theme/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderTheme>
        <App />
      </ProviderTheme>
    </BrowserRouter>
  </React.StrictMode>
);
