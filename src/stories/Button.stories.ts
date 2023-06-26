import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '@/components/atoms/Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'clean'],
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    onClick: { action: 'clicked' },
  },
  args: { label: 'Button' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `
      <Button v-bind="args">
        {{ args.label }}
      </Button>
    `,
  }),
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Danger',
  },
}

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    label: 'Button',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'lg',
  },
}
