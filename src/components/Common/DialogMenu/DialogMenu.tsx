import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'

import { DialogMenuPanel } from './DialogMenuPanel'

type DialogMenuProps = {
  isOpen: boolean
  onClose: () => void
  onSignIn: () => void
}
export const DialogMenu: FC<DialogMenuProps> = ({
  isOpen = true,
  onClose,
  onSignIn,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[80]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-start relative">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="-translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              {(ref) => (
                <DialogMenuPanel
                  onClose={onClose}
                  onSignIn={onSignIn}
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
