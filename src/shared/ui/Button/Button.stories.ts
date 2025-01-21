import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonSize, ButtonTheme } from "./Button";
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
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const OutlineSizeM: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
};
export const OutlineSizeL: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};
export const OutlineSizeXL: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE,
  },
  parameters: {
    theme: Theme.Dark,
  },
};

export const BackgroundTheme: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.BACKGROUND,
  },
};
export const BackgroundThemeInverted: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareM: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};
export const SquareL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};
export const SquareXL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};
export const Disabled: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};
