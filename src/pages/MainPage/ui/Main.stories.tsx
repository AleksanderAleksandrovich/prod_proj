import type { Meta, StoryObj } from "@storybook/react";

import Main from "./Main";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "pages/Main",
  component: Main,

  tags: ["autodocs"],
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  parameters: {
    theme: Theme.Dark,
  },
};
