import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextTheme } from "./Text";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Text",
  component: Text,

  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "lorem ipsum lorem ipsum",
    text: "description description description",
  },
};
export const OnlyTitle: Story = {
  args: {
    title: "lorem ipsum lorem ipsum",
  },
};
export const OnlyText: Story = {
  args: {
    text: "description description description",
  },
};
export const ThemeError: Story = {
  args: {
    title: "lorem ipsum lorem ipsum",
    text: "description description description",
    theme: TextTheme.ERROR,
  },
};

export const Dark: Story = {
  args: {
    title: "lorem ipsum lorem ipsum",
    text: "description description description",
  },
  parameters: {
    theme: Theme.Dark,
  },
};

export const OnlyTitleDark: Story = {
  args: {
    title: "lorem ipsum lorem ipsum",
  },
  parameters: {
    theme: Theme.Dark,
  },
};
export const OnlyTextDark: Story = {
  args: {
    text: "description description description",
  },
  parameters: {
    theme: Theme.Dark,
  },
};

export const ThemeErrorDark: Story = {
  args: {
    title: "lorem ipsum lorem ipsum",
    text: "description description description",
    theme: TextTheme.ERROR,
  },
  parameters: {
    theme: Theme.Dark,
  },
};
