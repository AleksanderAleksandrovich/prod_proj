import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18nForTest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

type componentRenderOptions = {
  route?: string;
  initialState?: Partial<StateSchema>;
};

export const componentRender = (
  component: React.ReactNode,
  options: componentRenderOptions = {}
) => {
  const { route = "/", initialState } = options;
  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};
