import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Shared/Switch',
  component: Switch,
  parameters: {},
  args: { disabled: false },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const DefaultOn: Story = {
  args: {
    children: 'Some text',
    className: 'testClass',
    // checked: true,
  },
};

export const DefaultOff: Story = {
  args: {
    children: 'Some text',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Some text',
    checked: false,
    disabled: true,
  },
};

export const WithoutChildren: Story = {
  args: {
    className: 'testClass',
  },
};
