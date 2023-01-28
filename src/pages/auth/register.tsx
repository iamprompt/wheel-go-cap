import arrowBackIosNewRounded from '@iconify/icons-material-symbols/arrow-back-ios-new-rounded'
import checkCircleRounded from '@iconify/icons-material-symbols/check-circle-rounded'
// import lensOutline from '@iconify/icons-material-symbols/lens-outline'
import { Icon } from '@iconify/react'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { BlankLayout } from '../../layouts/blank'

const AuthRegisterPage: FC = () => {
  const navigate = useNavigate()

  return (
    <BlankLayout>
      <div className="safe-top" />
      <div className="px-4">
        {/* Header */}
        <div className="py-4">
          <button type="button" onClick={() => navigate(-1)} className="mb-8">
            <Icon icon={arrowBackIosNewRounded} className="h-6 w-6" />
          </button>
          <div>
            <h1 className="mb-2 text-[32px] font-bold">Register</h1>
            <p>
              To create more
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
                className="w-full rounded-xl border-2 border-gray-300 px-6 py-3 focus:border-2 focus:border-[#6336BC] focus:outline-none"
              />
              <Icon
                icon={checkCircleRounded}
                className="absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2 text-green-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="mb-3 block text-base font-bold"
            >
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Your username"
                inputMode="text"
                className="w-full rounded-xl border-2 border-gray-300 px-6 py-3 focus:border-2 focus:border-[#6336BC] focus:outline-none"
              />
              <Icon
                icon={checkCircleRounded}
                className="absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2 text-green-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="firstName"
              className="mb-3 block text-base font-bold"
            >
              First Name
            </label>
            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your first name"
                inputMode="text"
                className="w-full rounded-xl border-2 border-gray-300 px-6 py-3 focus:border-2 focus:border-[#6336BC] focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="lastName"
              className="mb-3 block text-base font-bold"
            >
              Last Name
            </label>
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your last name"
                inputMode="text"
                className="w-full rounded-xl border-2 border-gray-300 px-6 py-3 focus:border-2 focus:border-[#6336BC] focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="birthdate"
              className="mb-3 block text-base font-bold"
            >
              Birthdate
            </label>
            <div>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                placeholder="Your birthdate"
                defaultValue={new Date().toISOString().substring(0, 10)}
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'textfield',
                }}
                className="w-full appearance-none rounded-xl border-2 border-gray-300 bg-white px-6 py-3 text-left focus:border-2 focus:border-[#6336BC] focus:outline-none"
              />
            </div>
          </div>
        </form>

        {/* Term and Policy */}
        <div className="mb-8 text-center text-sm">
          <p>By registering, you agree to Wheel Go&apos;s</p>
          <Link to="/policy" className="text-[#6336BC]">
            Terms & Privacy Policy
          </Link>
        </div>

        {/* Register Button */}
        <div>
          <button
            type="button"
            className="w-full rounded-xl bg-[#6336BC] py-3 font-bold text-white"
            onClick={() => navigate('/auth/register/success')}
          >
            Register
          </button>
        </div>
      </div>
      <div className="safe-bottom" />
    </BlankLayout>
  )
}

export default AuthRegisterPage
