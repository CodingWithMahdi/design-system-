import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered"
  },
  args: {},
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    size: 45,
    color: "#00e124",
    className: ""
  }
};
