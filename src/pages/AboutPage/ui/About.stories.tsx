import type { Meta, StoryObj } from "@storybook/react";

import About from "./About";
import { StyleDecorators } from "shared/config/StyleDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "pages/About",
  component: About,

  tags: ["autodocs"],
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [StyleDecorators(Theme.Dark)],
};