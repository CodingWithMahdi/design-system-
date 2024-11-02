import type { Meta, StoryObj } from "@storybook/react";
import Box from "../components/Box/Box";

const meta = {
  title: "Box",
  component: Box,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Box>;

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
