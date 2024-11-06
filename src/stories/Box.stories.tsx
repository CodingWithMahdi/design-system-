import type { Meta, StoryObj } from "@storybook/react";
import Box from "../components/Box/Box";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    className: "flex justify-between",
    children: (
      <button className="bg-blue-500 p-2 rounded text-white">Hover me</button>
    )
  }
};
