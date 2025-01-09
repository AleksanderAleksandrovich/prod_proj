import type { Meta, StoryObj } from "@storybook/react";

import { PageError } from "./PageError";
import { StyleDecorators } from "shared/config/StyleDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/PageError",
  component: PageError,

  tags: ["autodocs"],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [StyleDecorators(Theme.Dark)],
};