import { Dialog } from '@headlessui/react'
import closeRounded from '@iconify/icons-material-symbols/close-rounded'
import mailRounded from '@iconify/icons-material-symbols/mail-rounded'
import { Icon } from '@iconify/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../context/useAuth'
import { AppleIcon, GoogleIcon, LINEIcon } from './Icons'

type SignInDialogPanelProps = {
  onClose: () => void
}

export const SignInDialogPanelComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  SignInDialogPanelProps
> = ({ onClose }, ref) => {
  const navigate = useNavigate()
  const { user, loginWithGoogle, loginWithApple, loginWithLine } = useAuth()

  console.log('user', user)

  return (
    <Dialog.Panel
      className="w-full max-w-md rounded-t-xl bg-white p-6 text-left align-middle shadow-xl safe-bottom"
      ref={ref}
    >
      <div className="mb-6">
        {/* Header */}
        <div className="mb-6 flex flex-row items-end justify-between">
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
        <button
          className="flex items-center justify-center gap-3 rounded-xl border border-[#06C755] bg-[#06C755] py-3 px-6 font-bold text-white"
          onClick={() => loginWithLine()}
        >
          <LINEIcon className="inline-block h-6 w-6" /> Continue with LINE
        </button>
        <button
          className="flex items-center justify-center gap-3 rounded-xl border border-black bg-black py-3 px-6 font-bold text-white"
          onClick={() => loginWithApple()}
        >
          <AppleIcon className="inline-block h-6 w-6" /> Continue with Apple
        </button>
        <button
          className="flex items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-3 px-6 font-bold text-black"
          onClick={() => loginWithGoogle()}
        >
          <GoogleIcon className="inline-block h-6 w-6" /> Continue with Google
        </button>
        <button
          className="flex items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-3 px-6 font-bold text-black"
          onClick={() => navigate('/auth/login')}
        >
          <Icon icon={mailRounded} className="inline-block h-6 w-6" /> Continue
          with Email
        </button>
      </div>
    </Dialog.Panel>
  )
}

export const SignInDialogPanel = forwardRef(SignInDialogPanelComponent)
