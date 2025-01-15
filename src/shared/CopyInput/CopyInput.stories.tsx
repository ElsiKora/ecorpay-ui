import type { Meta, StoryObj } from '@storybook/react';

import { CopyInput } from './CopyInput';
// import { useState } from 'react';

const meta: Meta<typeof CopyInput> = {
  title: 'Shared/CopyInput',
  component: CopyInput,
  parameters: {
    // layout: 'centered',
  },
  args: {
    // disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof CopyInput>;

export const Default: Story = {
  args: {
    valueToCopy: '+7 (999) 999 99 99',
    label: 'Номер для перевода',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    valueToCopy: '+7 (999) 999 99 99',
    label: 'Номер для перевода',
    disabled: true,
  },
};
