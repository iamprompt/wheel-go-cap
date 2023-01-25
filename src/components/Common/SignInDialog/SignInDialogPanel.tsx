import { Dialog } from '@headlessui/react'
import closeRounded from '@iconify/icons-material-symbols/close-rounded'
import mailRounded from '@iconify/icons-material-symbols/mail-rounded'
import { Icon } from '@iconify/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

import { useAuth } from '../../../context/useAuth'
import { AppleIcon, GoogleIcon, LINEIcon } from './Icons'

type SignInDialogPanelProps = {
  onClose: () => void
}

export const SignInDialogPanelComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  SignInDialogPanelProps
> = ({ onClose }, ref) => {
  const { user } = useAuth()

  console.log('user', user)

  return (
    <Dialog.Panel
      className="w-full max-w-md transform bg-white p-6 safe-bottom text-left align-middle shadow-xl transition-all rounded-t-xl"
      ref={ref}
    >
      <div className="mb-6">
        {/* Header */}
        <div className="mb-6 flex flex-row justify-between items-end">
          <div className="text-xl font-bold">Sign in to Wheel Go</div>
          <button type="button" onClick={onClose}>
            <Icon icon={closeRounded} className="h-6 w-6" />
          </button>
        </div>
        <div className="text-sm">
          Keep record of your contributions on Wheel Go
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button className="py-3 px-6 bg-[#06C755] border border-[#06C755] font-bold text-white rounded-xl flex gap-3 justify-center items-center">
          <LINEIcon className="h-6 w-6 inline-block" /> Continue with LINE
        </button>
        <button className="py-3 px-6 bg-black border border-black font-bold text-white rounded-xl flex gap-3 justify-center items-center">
          <AppleIcon className="h-6 w-6 inline-block" /> Continue with Apple
        </button>
        <button className="py-3 px-6 bg-white border border-gray-300 font-bold text-black rounded-xl flex gap-3 justify-center items-center">
          <GoogleIcon className="h-6 w-6 inline-block" /> Continue with Google
        </button>
        <button className="py-3 px-6 bg-white border border-gray-300 font-bold text-black rounded-xl flex gap-3 justify-center items-center">
          <Icon icon={mailRounded} className="h-6 w-6 inline-block" /> Continue
          with Email
        </button>
      </div>
    </Dialog.Panel>
  )
}

export const SignInDialogPanel = forwardRef(SignInDialogPanelComponent)
