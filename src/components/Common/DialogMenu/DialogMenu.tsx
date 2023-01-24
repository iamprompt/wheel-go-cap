import { Dialog, Transition } from '@headlessui/react'
import arrowBackIosNewRounded from '@iconify/icons-material-symbols/arrow-back-ios-new-rounded'
import errorIcon from '@iconify/icons-material-symbols/error'
import { Icon, IconifyIcon } from '@iconify/react'
import clsx from 'clsx'
import { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'

type DialogMenuItemProps = {
  to: string
  label: string
  icon?: IconifyIcon
  iconColor?: string
}

const DialogMenuItem: FC<DialogMenuItemProps> = ({
  to,
  label,
  icon,
  iconColor,
}) => {
  return (
    <div className="items-center py-3 px-6">
      <Link to={to} className="font-bold text-gray-900">
        {label}
        {icon ? (
          <Icon
            icon={icon}
            className={clsx('inline-block text-2xl ml-3', iconColor)}
          />
        ) : null}
      </Link>
    </div>
  )
}

type DialogMenuProps = {
  isOpen: boolean
  onClose: () => void
}
export const DialogMenu: FC<DialogMenuProps> = ({ isOpen = true, onClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-start relative">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="-translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="w-full max-w-[300px] transform min-h-screen bg-white p-6 safe-top text-left align-middle shadow-xl transition-all">
                <div className="sticky top-0 left-0 bg-white">
                  <div className="mb-8 py-4 flex flex-row justify-between items-end">
                    <button type="button" onClick={onClose}>
                      <Icon icon={arrowBackIosNewRounded} className="h-6 w-6" />
                    </button>
                    <div>
                      <svg
                        width="141"
                        height="32"
                        viewBox="0 0 141 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6399 31.722C10.8344 31.722 10.9734 31.6386 11.029 31.4163L15.3919 18.1329L19.7549 31.4163C19.8104 31.6386 19.9494 31.722 20.1439 31.722H22.7005C22.8951 31.722 23.0618 31.6386 23.1174 31.4441L30.2316 11.7414C30.3148 11.4913 30.1759 11.3245 29.9257 11.3245H26.4799C26.2854 11.3245 26.1464 11.4079 26.0909 11.6302L21.589 25.4138L17.0593 11.6302C17.0037 11.4079 16.8647 11.3245 16.6702 11.3245H14.1692C13.9746 11.3245 13.8357 11.4079 13.7801 11.6302L9.25043 25.386L4.77633 11.6302C4.72075 11.4079 4.58179 11.3245 4.38725 11.3245H0.857998C0.607893 11.3245 0.468945 11.4913 0.552313 11.7414L7.66643 31.4441C7.72201 31.6386 7.88873 31.722 8.08327 31.722H10.6399ZM35.9659 31.722C36.1881 31.722 36.3272 31.583 36.3272 31.3607V24.3856C36.3272 21.6344 37.9944 20.3283 39.7453 20.3283C41.635 20.3283 42.4965 21.4399 42.4965 23.8298V31.3607C42.4965 31.583 42.6353 31.722 42.8578 31.722H45.7477C45.9702 31.722 46.1091 31.583 46.1091 31.3607V22.3569C46.1091 19.05 44.1916 17.0492 40.857 17.0492C39.1061 17.0492 37.4109 17.7161 36.3272 19.1056V11.2411C36.3272 11.0188 36.1881 10.8799 35.9659 10.8799H33.0757C32.8535 10.8799 32.7146 11.0188 32.7146 11.2411V31.3607C32.7146 31.583 32.8535 31.722 33.0757 31.722H35.9659ZM56.2316 31.9999C58.8993 31.9999 61.2894 30.8605 62.5676 28.3317C62.6787 28.1094 62.5953 27.9426 62.3731 27.8593L59.8998 26.9978C59.7053 26.9422 59.5385 26.97 59.4274 27.1645C58.7605 28.2483 57.7322 28.8041 56.2593 28.8041C54.3419 28.8041 53.1191 27.6092 52.7858 25.6361H62.651C62.8732 25.6361 63.0123 25.525 63.04 25.2748C63.1788 20.3283 60.6502 17.0492 56.2316 17.0492C51.7018 17.0492 48.9507 20.1616 48.9507 24.5245C48.9507 28.8875 51.7018 31.9999 56.2316 31.9999ZM56.2038 20.2449C57.7599 20.2449 58.8439 21.2454 59.1772 22.9405H52.8412C53.2859 21.2176 54.5087 20.2449 56.2038 20.2449ZM72.1617 31.9999C74.8294 31.9999 77.2193 30.8605 78.4977 28.3317C78.6088 28.1094 78.5254 27.9426 78.3032 27.8593L75.83 26.9978C75.6355 26.9422 75.4687 26.97 75.3576 27.1645C74.6906 28.2483 73.6624 28.8041 72.1894 28.8041C70.272 28.8041 69.0492 27.6092 68.7159 25.6361H78.5811C78.8033 25.6361 78.9424 25.525 78.9701 25.2748C79.109 20.3283 76.5803 17.0492 72.1617 17.0492C67.632 17.0492 64.8808 20.1616 64.8808 24.5245C64.8808 28.8875 67.632 31.9999 72.1617 31.9999ZM72.134 20.2449C73.6901 20.2449 74.774 21.2454 75.1074 22.9405H68.7713C69.216 21.2176 70.4388 20.2449 72.134 20.2449ZM84.896 31.722C85.1185 31.722 85.2573 31.583 85.2573 31.3607V11.2411C85.2573 11.0188 85.1185 10.8799 84.896 10.8799H82.006C81.7835 10.8799 81.6447 11.0188 81.6447 11.2411V31.3607C81.6447 31.583 81.7835 31.722 82.006 31.722H84.896Z"
                          fill="#1B052F"
                        />
                        <mask
                          id="mask0_63_4827"
                          style={{ maskType: 'alpha' }}
                          maskUnits="userSpaceOnUse"
                          x="91"
                          y="0"
                          width="50"
                          height="32"
                        >
                          <path
                            d="M101.664 31.9999C107.79 31.9999 111.089 28.0914 111.089 23.0187V20.7179C111.089 20.4962 110.95 20.3576 110.728 20.3576H102.246C102.024 20.3576 101.886 20.4962 101.886 20.7179V23.4622C101.886 23.684 102.024 23.8225 102.246 23.8225H107.319C107.014 26.7886 104.769 28.3409 101.775 28.3409C97.8942 28.3409 95.538 25.6243 95.538 21.4664C95.538 17.3084 97.8664 14.5364 101.775 14.5364C104.076 14.5364 105.822 15.5621 106.792 17.4193C106.875 17.6133 107.042 17.6965 107.236 17.641L110.202 16.8095C110.423 16.754 110.507 16.56 110.423 16.3382C109.065 12.8733 105.988 10.8774 101.719 10.8774C95.8706 10.8774 91.6572 15.0631 91.6572 21.4387C91.6572 27.8143 95.6766 31.9999 101.664 31.9999Z"
                            fill="white"
                          />
                          <path
                            d="M138.689 3C138.689 4.65625 137.345 6 135.689 6C134.033 6 132.689 4.65625 132.689 3C132.689 1.34375 134.033 0 135.689 0C137.345 0 138.689 1.34375 138.689 3ZM125.47 7.58125C125.133 7.425 124.739 7.4625 124.445 7.6875L121.889 9.60625C121.008 10.2688 119.751 10.0875 119.089 9.20625C118.426 8.325 118.608 7.06875 119.489 6.40625L122.045 4.4875C123.526 3.375 125.501 3.175 127.176 3.9625L132.826 6.61875C134.645 7.475 135.126 9.84375 133.776 11.3375L131.383 14H137.47C139.364 14 140.783 15.7313 140.414 17.5875L138.651 26.3938C138.433 27.475 137.383 28.1813 136.295 27.9625C135.208 27.7438 134.508 26.6938 134.726 25.6063L136.251 18H131.858C132.395 19.225 132.689 20.575 132.689 22C132.689 27.525 128.214 32 122.689 32C117.164 32 112.689 27.525 112.689 22C112.689 16.475 117.164 12 122.689 12C123.383 12 124.064 12.0688 124.714 12.2063L128.101 8.81875L125.47 7.58125V7.58125ZM122.689 28C126.001 28 128.689 25.3125 128.689 22C128.689 18.6875 126.001 16 122.689 16C119.376 16 116.689 18.6875 116.689 22C116.689 25.3125 119.376 28 122.689 28Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_63_4827)">
                          <rect
                            x="77.2573"
                            y="-22.3999"
                            width="76.8"
                            height="76.8"
                            fill="#1B052F"
                          />
                          <rect
                            x="113.001"
                            y="14.5996"
                            width="26.0345"
                            height="28.0826"
                            transform="rotate(-53.5548 113.001 14.5996)"
                            fill="#78CCDD"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className="flex border-t border-b p-4 items-center gap-4 mb-8">
                    <div>
                      <img
                        src="https://gravatar.com/avatar/1b052f?d=mp"
                        alt="Profile"
                        className="w-16 h-16 rounded-full"
                      />
                    </div>
                    <div>
                      <div className="text-sm">Hi 👋,</div>
                      <div className="text-xl font-bold">Anya Lee</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <DialogMenuItem
                    to="/announcements"
                    label="Announcement"
                    icon={errorIcon}
                    iconColor="text-red-600"
                  />
                  <DialogMenuItem to="/settings" label="Settings" />
                  <DialogMenuItem to="/how-to-use" label="How to Use" />
                  <DialogMenuItem to="/help" label="Help & Feedback" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
