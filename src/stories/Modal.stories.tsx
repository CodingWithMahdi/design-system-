import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Modal from "../components/Modal/Modal";

const meta = {
  title: "Modal",
  component: Modal,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: { onClose: fn() },
  argTypes: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    children: <p>"this is Modal!!!!"</p>,
    title: 'Modal',
    isOpen:true,
    customStyles:""

    
  }
};
