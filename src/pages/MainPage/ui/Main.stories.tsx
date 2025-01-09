import type { Meta, StoryObj } from "@storybook/react";

import Main from "./Main";
import { StyleDecorators } from "shared/lib/tests/StyleDecorator/StyleDecorator";
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
  decorators: [StyleDecorators(Theme.Dark)],
};
