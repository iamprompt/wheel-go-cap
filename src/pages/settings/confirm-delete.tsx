import { useNavigate } from 'react-router-dom'

import { ActionHeaderWithTitle } from '../../components/Common/ActionHeaderWithTitle'
import { BlankLayout } from '../../layouts/blank'

const ConfirmDeletePage = () => {
  const navigate = useNavigate()

  return (
    <BlankLayout>
      <ActionHeaderWithTitle title="Account Deletion" showBackButton={true} />
      <main className="safe-top">
        <div className="px-6 pt-20">
          <h1 className="text-2xl font-bold">Deleting your account</h1>
          <div className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="mt-3 text-theme-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </div>
          <hr className="my-6" />
          <div>
            <button
              className="w-full rounded-xl border border-gray-300 py-3 font-bold"
              onClick={() => {
                navigate('/settings')
              }}
            >
              Confirm to Delete
            </button>
          </div>
        </div>
      </main>
    </BlankLayout>
  )
}

export default ConfirmDeletePage
