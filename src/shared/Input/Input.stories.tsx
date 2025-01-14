import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  parameters: {
    // layout: 'centered',
  },
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'ФИО',
    placeholder: 'Иванов Иван Иванович',
  },
};

export const Error: Story = {
  args: {
    label: 'ФИО',
    placeholder: 'Иванов Иван Иванович',
    errorMsg: 'Некорректное заполнение',
    isError: true,
  },
};

export const Centered: Story = {
  args: {
    placeholder: 'Введите код',
    align: 'center',
    type: 'number',
  },
};

export const LeftContent: Story = {
  args: {
    label: 'Сумма',
    placeholder: '100',
    type: 'number',
    leftContent: '$',
  },
};

export const RightContent: Story = {
  args: {
    label: 'Сумма',
    placeholder: '100',
    type: 'number',
    rightContent: 'РУБ.',
  },
};
