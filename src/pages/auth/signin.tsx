import arrowBackIosNewRounded from '@iconify/icons-material-symbols/arrow-back-ios-new-rounded'
import visibility from '@iconify/icons-material-symbols/visibility'
import visibilityOffOutlineRounded from '@iconify/icons-material-symbols/visibility-off-outline-rounded'
// import lensOutline from '@iconify/icons-material-symbols/lens-outline'
import { Icon } from '@iconify/react'
import { FC, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../context/useAuth'
import { BlankLayout } from '../../layouts/blank'

const AuthSignInPage: FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [showPassword, setShowPassword] = useState(false)

  return (
    <BlankLayout>
      <div className="px-4 safe-top safe-bottom">
        {/* Header */}
        <div className="py-4">
          <button type="button" onClick={() => navigate(-1)} className="mb-8">
            <Icon icon={arrowBackIosNewRounded} className="h-6 w-6" />
          </button>
          <div>
            <h1 className="mb-2 text-[32px] font-bold">Sign in</h1>
            <p>
              To continue creating more
              <br /> better environment together
            </p>
          </div>
        </div>

        {/* Register Form */}
        <form className="mt-3 mb-8">
          <div className="mb-6">
            <label htmlFor="email" className="mb-3 block text-base font-bold">
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email"
                inputMode="text"
                ref={emailRef}
                className="w-full rounded-xl border-2 border-gray-300 px-6 py-3 focus:border-2 focus:border-[#6336BC] focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-3 block text-base font-bold"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="********"
                inputMode="text"
                ref={passwordRef}
                className="w-full rounded-xl border-2 border-gray-300 px-6 py-3 focus:border-2 focus:border-[#6336BC] focus:outline-none"
              />
              <Icon
                icon={showPassword ? visibility : visibilityOffOutlineRounded}
                className="absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2 text-purple-500"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
        </form>

        {/* Register Button */}
        <div className="my-8">
          <button
            type="button"
            className="w-full rounded-xl bg-[#6336BC] py-3 font-bold text-white"
            onClick={() =>
              login(
                emailRef.current?.value || '',
                passwordRef.current?.value || ''
              )
            }
          >
            Sign in
          </button>
        </div>

        <div className="mb-12 text-center text-sm">
          <Link to="/auth/forgot-password" className="text-[#6336BC]">
            Forgot password?
          </Link>
        </div>

        {/* Register Link */}
        <div className="text-center text-sm">
          <p>
            Don&apos;t have an account?{' '}
            <Link to="/auth/register" className="text-[#6336BC]">
              Register
            </Link>
          </p>
        </div>
      </div>
    </BlankLayout>
  )
}

export default AuthSignInPage
