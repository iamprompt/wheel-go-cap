import arrowForwardIosIcon from '@iconify/icons-material-symbols/arrow-forward-ios-rounded'
import { Icon } from '@iconify/react'
import {
  AndroidSettings,
  IOSSettings,
  NativeSettings,
} from 'capacitor-native-settings'
import { Link, useNavigate } from 'react-router-dom'

import { ActionHeaderWithTitle } from '../../components/Common/ActionHeaderWithTitle'
import { BlankLayout } from '../../layouts/blank'

const SettingsPage = () => {
  const navigate = useNavigate()

  const handleOpenNativeSettings = () => {
    NativeSettings.open({
      optionAndroid: AndroidSettings.ApplicationDetails,
      optionIOS: IOSSettings.App,
    })
  }

  return (
    <BlankLayout>
      <ActionHeaderWithTitle
        title="Settings"
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
            {/* General */}
            <div className="w-full">
              <div className="mb-2 px-4 text-sm font-bold text-theme-description">
                General
              </div>
              <div className="divide-y divide-theme-divider border-y border-theme-divider">
                <Link
                  to="/settings/languages"
                  className="flex flex-row items-center justify-between  p-4 text-sm font-bold"
                >
                  <div>Language/ภาษา</div>
                  <div className="flex flex-1 flex-row items-center justify-end gap-3">
                    <div className="text-right">English</div>
                    <div className="flex h-6 w-6 items-center justify-center">
                      <Icon
                        icon={arrowForwardIosIcon}
                        className="text-theme-description"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Privacy */}
            <div className="w-full">
              <div className="mb-2 px-4 text-sm font-bold text-theme-description">
                Privacy
              </div>
              <div className="divide-y divide-theme-divider border-y border-theme-divider">
                <button
                  className="flex w-full flex-row items-center justify-between p-4 text-sm font-bold"
                  onClick={() => handleOpenNativeSettings()}
                >
                  <div>Your Personal Data Allowance</div>
                  <div className="flex flex-1 flex-row items-center justify-end gap-3">
                    <div className="flex h-6 w-6 items-center justify-center">
                      <Icon
                        icon={arrowForwardIosIcon}
                        className="text-theme-description"
                      />
                    </div>
                  </div>
                </button>
                <Link
                  to="/policy"
                  className="flex flex-row items-center justify-between p-4 text-sm font-bold"
                >
                  <div>Terms and Privacy Policy</div>
                  <div className="flex flex-1 flex-row items-center justify-end gap-3">
                    <div className="flex h-6 w-6 items-center justify-center">
                      <Icon
                        icon={arrowForwardIosIcon}
                        className="text-theme-description"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Account */}
            <div className="w-full">
              <div className="mb-2 px-4 text-sm font-bold text-theme-description">
                About
              </div>
              <div className="divide-y divide-theme-divider border-y border-theme-divider">
                <div className="flex w-full flex-row items-center justify-between p-4 text-sm font-bold">
                  <div>Version</div>
                  <div className="flex flex-1 flex-row items-center justify-end gap-3">
                    <div className="text-right font-bold text-theme-description">
                      0.0.1
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-row items-center justify-between p-4 text-sm font-bold">
                  <div>Copyright</div>
                  <div className="flex flex-1 flex-row items-center justify-end gap-3">
                    <div className="text-right font-bold text-theme-description">
                      Mahidol University
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 w-full px-4">
              <div className="font-bold text-theme-description">
                Supported Division Organizations
              </div>
              <div className="mt-6 flex flex-row justify-center gap-6">
                <img src="/images/ict_logo.png" alt="" />
                <img src="/images/mu_physystem_logo.png" alt="" />
                <img src="/images/mu_dss_logo.png" alt="" />
              </div>
            </div>
          </div>
          <div className="mt-14 px-4">
            <button
              className="w-full rounded-xl border border-gray-300 py-3 px-6 font-bold"
              onClick={() => {
                navigate('/settings/delete-account')
              }}
            >
              Delete Account
            </button>
          </div>
        </div>
      </main>
    </BlankLayout>
  )
}

export default SettingsPage
