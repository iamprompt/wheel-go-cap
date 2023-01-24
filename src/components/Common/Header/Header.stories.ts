import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  title: 'Common/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    searchPath: {
      description: 'Path to the search page',
      type: 'string',
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {},
}

export const WithMenu: Story = {
  name: 'With Menu Button',
  args: {
    showMenu: true,
  },
}

export const WithSearch: Story = {
  name: 'With Search Button',
  args: {
    showMenu: false,
    searchPath: '/search',
  },
}

export const WithMenuAndSearch: Story = {
  name: 'With Menu and Search Buttons',
  args: {
    showMenu: true,
    searchPath: '/search',
  },
}
