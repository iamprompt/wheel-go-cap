import { Dialog } from '@headlessui/react'
import { IconifyIcon } from '@iconify/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

import { BadgeIcon } from '../BadgeIcon'

type BadgeReceiptPanelProps = {
  onClose: () => void
  title: string
  description: string
  icon: IconifyIcon
  color: string
}

const BadgeReceiptPanelComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  BadgeReceiptPanelProps
> = ({ onClose, title, description, icon, color }, ref) => {
  return (
    <Dialog.Panel className="w-full max-w-md p-6" ref={ref}>
      <div className="mb-6">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex flex-col items-center space-y-3">
            <div
              className="text-center text-title-32-bold"
              style={{
                color,
              }}
            >
              {title}
            </div>
            <div className="text-center text-subtitle-18-regular text-white">
              {description}
            </div>
            <BadgeIcon icon={icon} size={200} borderWidth={8} color={color} />
          </div>
          <div className="text-center text-subtitle-18-regular text-white">
            Thank you for your contribution
          </div>
          <div className="flex justify-center">
            <button
              className="rounded-xl bg-theme-magenta py-3 px-6 font-bold text-white"
              onClick={() => onClose()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Dialog.Panel>
  )
}

export const BadgeReceiptPanel = forwardRef(BadgeReceiptPanelComponent)
