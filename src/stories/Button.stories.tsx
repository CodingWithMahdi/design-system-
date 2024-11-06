import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger"],
      control: { type: "select" }
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    variant: "primary",
    label: "Button",
    size: "large",
    disabled: false
  }
};

export const Medium: Story = {
  args: {
    ...Large.args,
    variant: "secondary",
    size: "medium"
  }
};

export const Small: Story = {
  args: {
    ...Large.args,
    variant: "danger",
    size: "small"
  }
};
