import type { Preview } from "@storybook/react";
import { StyleDecorators } from "../../src/shared/config/StyleDecorator/StyleDecorator";
import { RouterDecorator } from "../../src/shared/config/RouterDecorator/RouterDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorators(Theme.Light), RouterDecorator],
};

export default preview;
