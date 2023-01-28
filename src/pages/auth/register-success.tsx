import checkCircleOutlineRounded from '@iconify/icons-material-symbols/check-circle-outline-rounded'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

import { BlankLayout } from '../../layouts/blank'

const SuccessRegisterPage = () => {
  const navigate = useNavigate()

  return (
    <BlankLayout>
      <div className="flex min-h-screen flex-col px-4 safe-top safe-bottom">
        <div className="flex flex-1 flex-col items-center justify-center">
          <Icon
            icon={checkCircleOutlineRounded}
            className="mb-8 text-[240px] text-purple-700"
          />
          <div className="text-center">
            <div className="mb-3 text-3xl font-bold text-purple-700">
              Register Successful!
            </div>
            <p>Let&apos;s explore the interesting place</p>
          </div>
        </div>
        <div>
          <button
            className="h-12 w-full rounded-xl bg-purple-700 font-bold text-white"
            onClick={() => navigate('/')}
          >
            Next
          </button>
        </div>
      </div>
    </BlankLayout>
  )
}

export default SuccessRegisterPage
