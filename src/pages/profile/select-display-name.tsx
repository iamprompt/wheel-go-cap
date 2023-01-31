import closeIcon from '@iconify/icons-material-symbols/close-rounded'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

import { ActionHeaderWithTitle } from '../../components/Common/ActionHeaderWithTitle'
import { BlankLayout } from '../../layouts/blank'

const SelectDisplayNamePage = () => {
  const navigate = useNavigate()

  return (
    <BlankLayout>
      <ActionHeaderWithTitle
        title="Display Name"
        actionLabel="Done"
        showBackButton={false}
        onAction={() => {
          console.log('Save')
          navigate('/profile/edit')
        }}
      />
      <main className="safe-top">
        <div className="pt-14">
          <div className="relative flex flex-col items-center space-y-6 pb-10">
            {/* Basic Info */}
            <div className="w-full">
              <div className="divide-y divide-theme-divider border-y border-theme-divider">
                <div className="flex flex-row items-center justify-between gap-5 p-4 text-sm font-bold">
                  <div>Username</div>
                  <div className="flex flex-1 flex-row justify-end gap-3">
                    <input
                      type="text"
                      className="flex-1 text-right text-theme-description"
                    />
                    <div className="flex h-6 w-6 items-center justify-center">
                      <Icon
                        icon={closeIcon}
                        className="text-theme-description"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between gap-5 p-4 text-sm font-bold">
                  <div>Full Name</div>
                  <div className="flex flex-1 flex-row justify-end gap-3">
                    <input
                      type="text"
                      className="flex-1 text-right text-theme-description"
                    />
                    <div className="flex h-6 w-6 items-center justify-center">
                      <Icon
                        icon={closeIcon}
                        className="text-theme-description"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </BlankLayout>
  )
}

export default SelectDisplayNamePage
