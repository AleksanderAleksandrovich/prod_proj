import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from "./LoginForm";
import { StoreDecorator } from "shared/lib/tests/StoreDecorator/StoreDecorator";

const meta = {
  title: "feature/LoginForm",
  component: LoginForm,

  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [StoreDecorator],
};
