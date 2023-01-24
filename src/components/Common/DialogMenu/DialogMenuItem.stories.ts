import errorIcon from '@iconify/icons-material-symbols/error'
import type { Meta, StoryObj } from '@storybook/react'

import { DialogMenuItem } from './DialogMenuItem'

const meta = {
  title: 'Common/SideMenu/Item',
  component: DialogMenuItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
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
    iconColor: {
      description: 'Color of the icon (Tailwind class)',
      type: 'string',
    },
  },
} satisfies Meta<typeof DialogMenuItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {
    label: 'Menu Item',
    to: '/menu-item',
  },
}

export const WithIcon: Story = {
  name: 'With Icon',
  args: {
    label: 'Menu Item',
    to: '/menu-item',
    icon: errorIcon,
    iconColor: 'text-red-500',
  },
}
