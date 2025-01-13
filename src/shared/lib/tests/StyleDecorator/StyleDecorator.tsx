import { StoryContext, StoryFn } from "@storybook/react/*";
import { ProviderTheme, Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";

type CustomParameters = {
  theme?: Theme;
};

export const StyleDecorator = (
  Story: StoryFn,
  context: StoryContext<CustomParameters>
) => {
  const theme = context.parameters.theme;
  return (
    <ProviderTheme initialTheme={theme}>
      <div className="App">
        <Story />
      </div>
    </ProviderTheme>
  );
};
