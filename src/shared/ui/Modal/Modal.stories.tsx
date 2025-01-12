import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { StyleDecorator } from "shared/lib/tests/StyleDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Modal",
  component: Modal,

  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "text",
    isOpen: true,
  },
};

export const Dark: Story = {
  args: {
    children: "text",
    isOpen: true,
  },

  decorators: [ StyleDecorator(Theme.Dark)],
};
