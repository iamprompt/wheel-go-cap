import { Disclosure } from '@headlessui/react'
import addRounded from '@iconify/icons-material-symbols/add-rounded'
import removeRounded from '@iconify/icons-material-symbols/remove-rounded'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

import { ActionHeaderWithTitle } from '../components/Common/ActionHeaderWithTitle'
import { BlankLayout } from '../layouts/blank'

const FaqPage = () => {
  const navigate = useNavigate()

  return (
    <BlankLayout>
      <ActionHeaderWithTitle title="FAQ" showBackButton={true} />
      <main className="safe-top">
        <div className="px-6 pt-20">
          <h1 className="text-xl font-bold">Frequently Asked Questions</h1>
          {/* Accordian */}
          <div className="mt-3 divide-y">
            {Array.from({ length: 10 }).map((_, i) => (
              <Disclosure as="div" key={i}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between py-3 text-left text-base font-bold text-black focus:outline-none focus-visible:ring">
                      <span>Question</span>

                      <Icon
                        icon={open ? removeRounded : addRounded}
                        className={clsx('h-5 w-5 text-theme-description')}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-theme-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
          <div className="mt-3 text-xs text-theme-description">
            Can&apos;t find an answer to your questions? Feel free to contact us
            at{' '}
            <a
              href="mailto:wheelgo.muict@gmail.com"
              className="text-theme-magenta underline"
            >
              wheelgo.muict@gmail.com
            </a>
          </div>
        </div>
      </main>
    </BlankLayout>
  )
}

export default FaqPage
