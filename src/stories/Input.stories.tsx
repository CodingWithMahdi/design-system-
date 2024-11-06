import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    label: "General",
    placeholder: "General"
  }
};

export const Error: Story = {
  args: {
    label: "Input",
    error: "Not Ok !"
  }
};
