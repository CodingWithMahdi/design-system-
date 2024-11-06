import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Drawer from "../components/Drawer/Drawer";

const meta: Meta<typeof Drawer> = {
  title: "Drawer",
  component: Drawer,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: { onClose: fn() },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    content: <p>"this is Drawer!!!!"</p>,
    isOpen: true,
    className: ""
  }
};
