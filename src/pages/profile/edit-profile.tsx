import { FilePicker } from '@capawesome/capacitor-file-picker'
import arrowForwardIcon from '@iconify/icons-material-symbols/arrow-forward-ios-rounded'
import closeIcon from '@iconify/icons-material-symbols/close-rounded'
import cameraIcon from '@iconify/icons-material-symbols/photo-camera-rounded'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'

import { ActionHeaderWithTitle } from '../../components/Common/ActionHeaderWithTitle'
import { BlankLayout } from '../../layouts/blank'

const EditProfilePage = () => {
  const navigate = useNavigate()

  return (
    <BlankLayout>
      <ActionHeaderWithTitle
        title="Edit Profile"
        actionLabel="Save"
        showBackButton={true}
        onAction={() => {
          console.log('Save')
          navigate('/profile')
        }}
      />
      <main className="safe-top">
        <div className="pt-14">
          <div className="relative flex flex-col items-center space-y-6 pt-6 pb-10">
            {/* Profile Image */}
            <div className="relative">
              <img
                src="https://gravatar.com/avatar/1b052f?d=mp&size=512"
                alt="Profile Cover"
                className="h-28 w-28 rounded-full object-cover shadow-small"
              />
              <button
                className="absolute bottom-0 right-0 mx-auto inline-block rounded-full border border-theme-unhover bg-qac-magenta p-2 font-bold text-white shadow-small"
                onClick={() => {
                  const result = FilePicker.pickImages({
                    multiple: false,
                    readData: true,
                  })

                  result
                    .then((res) => {
                      console.log(res)
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                }}
              >
                <Icon icon={cameraIcon} />
              </button>
            </div>

            {/* Display Name */}
            <div className="w-full">
              <div className="mb-2 px-4 text-sm font-bold text-theme-description">
                Display Name
              </div>
              <Link
                to="/profile/edit/display-name"
                className="flex flex-row items-center justify-between border-y p-4 text-sm font-bold"
              >
                <div>Anya Lee</div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <Icon
                    icon={arrowForwardIcon}
                    className="text-theme-description"
                  />
                </div>
              </Link>
            </div>

            {/* Basic Info */}
            <div className="w-full">
              <div className="mb-2 px-4 text-sm font-bold text-theme-description">
                Basic Information
              </div>
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
                  <div>First Name</div>
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
                  <div>Last Name</div>
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
                  <div>Birthdate</div>
                  <div className="flex flex-1 flex-row justify-end gap-3">
                    <input
                      type="text"
                      className="flex-1 text-right text-theme-description"
                    />
                    <div className="flex h-6 w-6 items-center justify-center">
                      <Icon
                        icon={arrowForwardIcon}
                        className="text-theme-description"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account */}
            <div className="w-full">
              <div className="mb-2 px-4 text-sm font-bold text-theme-description">
                Account
              </div>
              <div className="divide-y divide-theme-divider border-y border-theme-divider">
                <div className="flex flex-row items-center justify-between gap-5 p-4 text-sm font-bold">
                  <div>Email</div>
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
                  <div>Linked Account</div>
                  <div className="flex flex-1 flex-row justify-end gap-3">
                    <input
                      type="text"
                      className="flex-1 text-right text-theme-description"
                    />
                    <div className="flex h-6 w-6 items-center justify-center">
                      <Icon
                        icon={arrowForwardIcon}
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

export default EditProfilePage
