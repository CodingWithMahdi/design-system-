import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../components/Badge/Badge";
import { XCircleIcon } from "@heroicons/react/20/solid";

const meta = {
  title: "Badge",
  component: Badge,
  parameters: {
    layout: "centered"
  },

  tags: ["autodocs"],
  args: {},
  argTypes: {
    color: {
      options: ["default", "success", "warning", "error"],
      control: { type: "select" }
    }
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    text: "5",
    color: "success"
  }
};

export const WithIcon: Story = {
  args: {
    ...General.args,
    color: "error",
    icon: <XCircleIcon className="w-6 h-6 text-red-700" />
  }
};
