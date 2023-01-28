import arrowBackIosNewRounded from '@iconify/icons-material-symbols/arrow-back-ios-new-rounded'
import visibility from '@iconify/icons-material-symbols/visibility'
import visibilityOffOutlineRounded from '@iconify/icons-material-symbols/visibility-off-outline-rounded'
// import lensOutline from '@iconify/icons-material-symbols/lens-outline'
import { Icon } from '@iconify/react'
import { FC, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../context/useAuth'

const AuthSignInPage: FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="safe-left safe-right bg-white">
      <div className="safe-top safe-bottom px-4">
        {/* Header */}
        <div className="py-4">
          <button type="button" onClick={() => navigate(-1)} className="mb-8">
            <Icon icon={arrowBackIosNewRounded} className="h-6 w-6" />
          </button>
          <div>
            <h1 className="font-bold text-[32px] mb-2">Sign in</h1>
            <p>
              To continue creating more
              <br /> better environment together
            </p>
          </div>
        </div>

        {/* Register Form */}
        <form className="mt-3 mb-8">
          <div className="mb-6">
            <label htmlFor="email" className="block text-base font-bold mb-3">
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
                className="w-full px-6 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#6336BC]"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-base font-bold mb-3"
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
                className="w-full px-6 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#6336BC]"
              />
              <Icon
                icon={showPassword ? visibility : visibilityOffOutlineRounded}
                className="h-6 w-6 absolute top-1/2 right-4 transform -translate-y-1/2 text-purple-500"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
        </form>

        {/* Register Button */}
        <div className="my-8">
          <button
            type="button"
            className="w-full bg-[#6336BC] text-white font-bold py-3 rounded-xl"
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

        <div className="text-center text-sm mb-12">
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
    </div>
  )
}

export default AuthSignInPage
