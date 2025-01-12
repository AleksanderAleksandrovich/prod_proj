import { StoryFn } from "@storybook/react/*";
import { ProviderTheme, Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";

// eslint-disable-next-line react/display-name
export const StyleDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <ProviderTheme initialTheme={theme}>
      <div className={`appForTest ${theme}`}>
        <Story />
      </div>
    </ProviderTheme>
  );
};
