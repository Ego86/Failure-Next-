import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from './Button';

const meta = {
  title:"shared/button",
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'containd',
    children: 'Contained Button',
    isActive: false,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    variant: 'containd',
    children: 'Active Button',
    isActive: true,
  },
};

export const CustomClass: Story = {
  args: {
    variant: 'containd',
    children: 'Button with Custom Class',
    className: 'my-custom-class',
  },
};