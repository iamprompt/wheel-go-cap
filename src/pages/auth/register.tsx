import arrowBackIosNewRounded from '@iconify/icons-material-symbols/arrow-back-ios-new-rounded'
import checkCircleRounded from '@iconify/icons-material-symbols/check-circle-rounded'
// import lensOutline from '@iconify/icons-material-symbols/lens-outline'
import { Icon } from '@iconify/react'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AuthRegisterPage: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="safe-left safe-right">
      <div className="safe-top" />
      <div className="px-4">
        {/* Header */}
        <div className="py-4">
          <button type="button" onClick={() => navigate(-1)} className="mb-8">
            <Icon icon={arrowBackIosNewRounded} className="h-6 w-6" />
          </button>
          <div>
            <h1 className="font-bold text-[32px] mb-2">Register</h1>
            <p>
              To create more
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
                className="w-full px-6 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#6336BC]"
              />
              <Icon
                icon={checkCircleRounded}
                className="h-6 w-6 absolute top-1/2 right-4 transform -translate-y-1/2 text-green-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-base font-bold mb-3"
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
                className="w-full px-6 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#6336BC]"
              />
              <Icon
                icon={checkCircleRounded}
                className="h-6 w-6 absolute top-1/2 right-4 transform -translate-y-1/2 text-green-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="firstName"
              className="block text-base font-bold mb-3"
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
                className="w-full px-6 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#6336BC]"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="lastName"
              className="block text-base font-bold mb-3"
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
                className="w-full px-6 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#6336BC]"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="birthdate"
              className="block text-base font-bold mb-3"
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
                className="w-full px-6 py-3 bg-white text-left rounded-xl appearance-none border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#6336BC]"
              />
            </div>
          </div>
        </form>

        {/* Term and Policy */}
        <div className="text-center text-sm mb-8">
          <p>By registering, you agree to Wheel Go&apos;s</p>
          <Link to="/policy" className="text-[#6336BC]">
            Terms & Privacy Policy
          </Link>
        </div>

        {/* Register Button */}
        <div>
          <button
            type="button"
            className="w-full bg-[#6336BC] text-white font-bold py-3 rounded-xl"
            onClick={() => navigate('/auth/register/success')}
          >
            Register
          </button>
        </div>
      </div>
      <div className="safe-bottom" />
    </div>
  )
}

export default AuthRegisterPage
