import { Dialog } from '@headlessui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { authContext, defaultAuthContext } from '../../../context/useAuth'
import { SignInDialogPanel } from './SignInDialogPanel'

const meta = {
  title: 'Common/SignIn/Panel',
  component: SignInDialogPanel,
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
} satisfies Meta<typeof SignInDialogPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
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
