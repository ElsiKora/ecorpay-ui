import type { Meta, StoryObj } from '@storybook/react';

import { CopyButton } from './CopyButton';

const meta: Meta<typeof CopyButton> = {
  title: 'Shared/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    // disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: {
    children: 'Copy text',
    valueToCopy: 'Copy text',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Copy text',
    valueToCopy: 'Copy text',
    disabled: true,
  },
};
