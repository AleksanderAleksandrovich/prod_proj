import "app/styles/index.scss";

import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "app/App";

import { ProviderTheme } from "app/providers/ThemeProvider";

import { ErrorBoundary } from "app/providers/ErrorBoundary";

import { PageError } from "widgets/PageError";

import "shared/config/i18n/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<PageError />}>
        <ProviderTheme>
          <App />
        </ProviderTheme>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
