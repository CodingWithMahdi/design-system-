import { ColorPalette } from "../components/ColorPalette/ColorPalette";
import { StoryFn } from "@storybook/react";

export default {
  title: "ColorPalette",
  component: ColorPalette,
  tags: ["autodocs"]
};

interface Color {
  name: string;
  hex: string;
}

const colors: Color[] = [
  { name: "Primary", hex: "#007bff" },
  { name: "Secondary", hex: "#6c757d" },
  { name: "Success", hex: "#28a745" },
  { name: "Danger", hex: "#dc3545" },
  { name: "Warning", hex: "#ffc107" },
  { name: "Info", hex: "#17a2b8" },
  { name: "Light", hex: "#f8f9fa" },
  { name: "Dark", hex: "#343a40" }
];

const Template: StoryFn<{ colors: Color[] }> = (args: any) => (
  <ColorPalette {...args} />
);

export const Default = Template.bind({});
Default.args = {
  colors: colors
};
