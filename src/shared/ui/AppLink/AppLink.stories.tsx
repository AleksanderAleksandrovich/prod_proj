import type { Meta, StoryObj } from "@storybook/react";

import { AppLink, AppLinkTheme } from "./AppLink";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  args: {
    to: "/",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: "Text",
  },
};
export const Dark: Story = {
  args: {
    children: "Text",
  },
  parameters: {
    theme: Theme.Dark,
  },
};
export const InvertedLight: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.INVERTED,
  },
};
export const InvertedDark: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.INVERTED,
  },
  parameters: {
    theme: Theme.Dark,
  },
};
