import { Dialog } from '@headlessui/react'
import navigation from '@iconify/icons-material-symbols/navigation-rounded'
import type { Meta, StoryObj } from '@storybook/react'

import { BadgeReceiptPanel } from './BadgeReceiptPanel'

const meta = {
  title: 'Common/Badge/Receipt/Dialog Panel',
  component: BadgeReceiptPanel,
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
  argTypes: {},
} satisfies Meta<typeof BadgeReceiptPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {
    title: 'Master Navigator',
    description: 'You completely contributed 45 accessible routes',
    icon: navigation,
    color: 'red',
  },
}
