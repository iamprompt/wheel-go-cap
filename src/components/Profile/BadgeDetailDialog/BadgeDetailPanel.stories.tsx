import { Dialog } from '@headlessui/react'
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
  argTypes: {},
} satisfies Meta<typeof BadgeDetailPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {},
}
