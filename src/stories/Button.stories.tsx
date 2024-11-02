import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button/Button";

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
    variant: "secondary",
    label: "Button",
    size: "medium",
    disabled: false
  }
};

export const Small: Story = {
  args: {
    variant: "danger",
    label: "Button",
    size: "small",
    disabled: false
  }
};



