import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./Navbar";
import { StyleDecorator } from "shared/lib/tests/StyleDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,

  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [StyleDecorator(Theme.Dark)],
};
