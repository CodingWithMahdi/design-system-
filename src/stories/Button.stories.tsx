import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button";

const meta = {
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "primary",
    label: "Button",
    size: "large",
    disabled: false
  }
};

