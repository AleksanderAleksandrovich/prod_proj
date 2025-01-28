import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/lib/tests/StyleDecorator/StyleDecorator";
import { RouterDecorator } from "../../src/shared/lib/tests/RouterDecorator/RouterDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    theme: Theme.Light,
    initialState: {
      login: { isLoading: false, username: "sdf", password: "sdf" },
      counter: { value: 10 },
      user: { authData: undefined },
    },
  },
  decorators: [StyleDecorator, RouterDecorator],
};

export default preview;
