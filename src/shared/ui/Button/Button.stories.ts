import type { Meta, StoryObj } from "@storybook/react";

import { Button, ThemeButton } from "./Button";
import { StyleDecorators } from "shared/config/StyleDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Button",
  component: Button,

  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "text",
  },
};

export const Clear: Story = {
  args: {
    children: "text",
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "text",
    theme: ThemeButton.OUTLINE,
  },
};
export const OutlineDark: Story = {
  args: {
    children: "text",
    theme: ThemeButton.OUTLINE,
  },
  decorators: [StyleDecorators(Theme.Dark)],
};
