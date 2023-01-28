import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'

import { SignInDialogPanel } from './SignInDialogPanel'

type SignInDialogProps = {
  isOpen: boolean
  onClose: () => void
}
export const SignInDialog: FC<SignInDialogProps> = ({
  isOpen = true,
  onClose,
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="absolute bottom-0 flex w-full items-end justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300 transform transition"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >
              {(ref) => <SignInDialogPanel onClose={onClose} ref={ref} />}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
