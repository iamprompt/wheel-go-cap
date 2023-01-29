import navigation from '@iconify/icons-material-symbols/navigation-rounded'
import type { Meta, StoryObj } from '@storybook/react'

import { BadgeIcon } from './BadgeIcon'

const meta = {
  title: 'Profile/Badge/Icon',
  component: BadgeIcon,
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
} satisfies Meta<typeof BadgeIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {
    icon: navigation,
    color: 'red',
    size: 48,
  },
}
