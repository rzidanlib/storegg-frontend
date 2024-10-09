import { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/atoms/input";

const meta: Meta<typeof Input> = {
  title: "Component/Atoms/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Full Name",
  },
};
