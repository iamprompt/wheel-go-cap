import checkCircleOutlineRounded from '@iconify/icons-material-symbols/check-circle-outline-rounded'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

const SuccessRegisterPage = () => {
  const navigate = useNavigate()

  return (
    <div className="safe-top safe-bottom safe-left safe-right">
      <div className="min-h-screen flex flex-col px-4">
        <div className="flex-1 flex justify-center items-center flex-col">
          <Icon
            icon={checkCircleOutlineRounded}
            className="text-[240px] mb-8 text-purple-700"
          />
          <div className="text-center">
            <div className="text-3xl font-bold mb-3 text-purple-700">
              Register Successful!
            </div>
            <p>Let&apos;s explore the interesting place</p>
          </div>
        </div>
        <div>
          <button
            className="w-full bg-purple-700 rounded-xl h-12 text-white font-bold"
            onClick={() => navigate('/')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessRegisterPage
