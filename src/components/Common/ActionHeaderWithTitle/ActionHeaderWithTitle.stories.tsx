import type { Meta, StoryObj } from '@storybook/react'

import { ActionHeaderWithTitle } from './ActionHeaderWithTitle'

const meta = {
  title: 'Common/ActionHeaderWithTitle',
  component: ActionHeaderWithTitle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof ActionHeaderWithTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {
    title: 'Edit Profile',
  },
}
