import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,

  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  parameters: {
    theme: Theme.Dark,
  },
};
