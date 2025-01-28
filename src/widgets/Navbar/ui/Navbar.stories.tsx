import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./Navbar";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/lib/tests/StoreDecorator/StoreDecorator";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,

  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator],
};
export const Dark: Story = {
  args: {},
  decorators: [StoreDecorator],
  parameters: {
    theme: Theme.Dark,
  },
};
