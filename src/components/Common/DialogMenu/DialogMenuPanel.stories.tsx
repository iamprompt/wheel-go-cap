import { Dialog } from '@headlessui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { DialogMenuPanel } from './DialogMenuPanel'

const meta = {
  title: 'Common/SideMenu/Panel',
  component: DialogMenuPanel,
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
      defaultValue: () => {
        console.log('onClose')
      },
    },
  },
} satisfies Meta<typeof DialogMenuPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {
    onClose: () => {
      console.log('onClose')
    },
  },
}
