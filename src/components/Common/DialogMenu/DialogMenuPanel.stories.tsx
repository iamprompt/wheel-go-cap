import { Dialog } from '@headlessui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { authContext, defaultAuthContext } from '../../../context/useAuth'
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

export const LoggedOut: Story = {
  name: 'Logged Out',
  args: {
    onClose: () => {
      console.log('onClose')
    },
  },
  decorators: [
    (Story) => (
      <authContext.Provider
        value={{
          ...defaultAuthContext,
          user: null,
        }}
      >
        <Story />
      </authContext.Provider>
    ),
  ],
}

export const LoggedIn: Story = {
  name: 'Logged In',
  args: {
    onClose: () => {
      console.log('onClose')
    },
  },
  decorators: [
    (Story) => (
      <authContext.Provider
        value={{
          ...defaultAuthContext,
          user: {
            name: 'Anya Lee',
          },
        }}
      >
        <Story />
      </authContext.Provider>
    ),
  ],
}
