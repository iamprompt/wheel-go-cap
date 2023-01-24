import PersonIcon from '@iconify/icons-material-symbols/person'
import PersonOutlineIcon from '@iconify/icons-material-symbols/person-outline'
import type { Meta, StoryObj } from '@storybook/react'

import { NavigationItem } from './NavigationItem'

const meta = {
  title: 'Common/Navigation/Item',
  component: NavigationItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    label: {
      description: 'Label of the menu item',
      type: 'string',
    },
    to: {
      description: 'Path to the menu item',
      type: 'string',
    },
    icon: {
      description: 'Icon of the menu item',
      type: 'symbol',
    },
    selectedIcon: {
      description: 'Icon of the menu item when selected',
      type: 'symbol',
    },
  },
} satisfies Meta<typeof NavigationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {
    to: '/profile',
    icon: PersonOutlineIcon,
    selectedIcon: PersonIcon,
    label: 'Profile',
  },
}
