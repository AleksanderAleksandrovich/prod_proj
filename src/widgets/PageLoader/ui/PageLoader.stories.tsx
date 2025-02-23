import type { Meta, StoryObj } from "@storybook/react";

import { PageLoader } from "./PageLoader";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/PageLoader",
  component: PageLoader,

  tags: ["autodocs"],
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  parameters: {
    theme: Theme.Dark,
  },
};
