import { Dialog, Transition } from '@headlessui/react'
import { IconifyIcon } from '@iconify/react'
import { FC, Fragment } from 'react'

import { BadgeReceiptPanel } from './BadgeReceiptPanel'

type BadgeReceiptDialogProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  icon: IconifyIcon
  color: string
}

export const BadgeReceiptDialog: FC<BadgeReceiptDialogProps> = ({
  isOpen = true,
  onClose,
  title,
  description,
  icon,
  color,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[99] h-full w-full"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="flex h-full w-full items-center justify-center px-5">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {(ref) => (
                <BadgeReceiptPanel
                  onClose={onClose}
                  title={title}
                  description={description}
                  icon={icon}
                  color={color}
                  ref={ref}
                />
              )}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
