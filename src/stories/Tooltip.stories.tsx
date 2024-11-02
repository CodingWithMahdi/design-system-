import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "../components/Tooltip/Tooltip";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {}
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    text: "This is a tooltip!",
    customClass: "",
    children: (
      <button className="bg-blue-500 p-2 rounded text-white">Hover me</button>
    )
  }
};
