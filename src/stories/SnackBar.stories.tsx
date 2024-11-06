import type { Meta, StoryObj } from "@storybook/react";
import SnackBar from "../components/SnackBar/SnackBar";
import { fn } from "@storybook/test";

const meta: Meta<typeof SnackBar> = {
  title: "SnackBar",
  component: SnackBar,
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
    message: "this is snackBar!!!!",
    isOpen: true,
    duration: 1000,
    className: ""
  }
};
