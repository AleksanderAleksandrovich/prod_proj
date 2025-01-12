import { StoryFn } from "@storybook/react/*";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";

// eslint-disable-next-line react/display-name
export const StyleDecorators = (theme: Theme) => (Story: StoryFn) =>
  (
    <div className={`App appForTest ${theme}`}>
      <Story />
    </div>
  );
