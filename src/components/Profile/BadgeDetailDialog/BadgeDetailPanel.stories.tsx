import { Dialog } from '@headlessui/react'
import navigation from '@iconify/icons-material-symbols/navigation-rounded'
import type { Meta, StoryObj } from '@storybook/react'

import { BadgeDetailPanel } from './BadgeDetailPanel'

const meta = {
  title: 'Common/Badge/Detail/Dialog Panel',
  component: BadgeDetailPanel,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Dialog
        open={true}
        onClose={() => {
          return
        }}
        static={true}
      >
        <Story />
      </Dialog>
    ),
  ],
  argTypes: {
    onClose: {
      type: 'function',
    },
  },
} satisfies Meta<typeof BadgeDetailPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {
    data: {
      icon: navigation,
      size: 80,
      color: 'red',
      label: 'Label',
      description: 'Description',
    },
  },
}
