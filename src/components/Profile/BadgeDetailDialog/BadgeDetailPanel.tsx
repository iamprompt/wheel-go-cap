import { Dialog } from '@headlessui/react'
import closeRounded from '@iconify/icons-material-symbols/close-rounded'
import navigationIcon from '@iconify/icons-material-symbols/navigation-rounded'
import { Icon, IconifyIcon } from '@iconify/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

import { BadgeIcon } from '../BadgeIcon'

type BadgeDetailPanelProps = {
  onClose: () => void
  data: {
    icon?: IconifyIcon
    size: number
    color?: string
    label?: string
    description?: string
  }
}

const BadgeDetailPanelComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  BadgeDetailPanelProps
> = ({ onClose, data }, ref) => {
  return (
    <Dialog.Panel
      className="w-full max-w-md rounded-xl bg-white p-6 text-left align-middle shadow-xl safe-bottom"
      ref={ref}
    >
      <div className="mb-6">
        {/* Header */}
        <div className="mb-6 flex flex-row items-end justify-end">
          <button type="button" onClick={onClose}>
            <Icon icon={closeRounded} className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex flex-col items-center space-y-3">
            <BadgeIcon icon={navigationIcon} size={80} color={data.color} />
            <div
              className="text-center text-title-24-bold"
              style={{
                color: data.color,
              }}
            >
              {data.label}
            </div>
            <div className="text-center text-body-12-regular text-theme-description">
              {data.description}
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-theme-unhover">
                <Icon
                  icon={navigationIcon}
                  className="h-6 w-6 text-qac-magenta"
                />
              </div>
              <div>
                <div className="text-body-14-semibold">Routes</div>
                <div className="text-body-12-regular text-theme-description">
                  Contribute 45 accessible routes tracing
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-theme-magenta">45</div>
              <hr />
              <div className="text-sm font-bold text-theme-description">45</div>
            </div>
          </div>
        </div>
      </div>
    </Dialog.Panel>
  )
}

export const BadgeDetailPanel = forwardRef(BadgeDetailPanelComponent)
