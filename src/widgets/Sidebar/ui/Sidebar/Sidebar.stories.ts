import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";
import { StyleDecorators } from "shared/lib/tests/StyleDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,

  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [StyleDecorators(Theme.Dark)],
};
