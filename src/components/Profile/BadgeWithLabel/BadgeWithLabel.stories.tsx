import navigation from '@iconify/icons-material-symbols/navigation-rounded'
import type { Meta, StoryObj } from '@storybook/react'

import { BadgeWithLabel } from './BadgeWithLabel'

const meta = {
  title: 'Profile/Badge/WithLabel',
  component: BadgeWithLabel,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    icon: {
      type: 'symbol',
    },
    color: {
      type: 'string',
    },
    size: {
      type: 'number',
    },
  },
} satisfies Meta<typeof BadgeWithLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {
    icon: navigation,
    color: 'red',
    size: 48,
    label: 'Label',
  },
}
