import menuIcon from '@iconify/icons-material-symbols/menu'
import searchIcon from '@iconify/icons-material-symbols/search'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { ComponentProps, FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../../context/useAuth'
import { DialogMenu } from '../DialogMenu/DialogMenu'

type Props = {
  searchPath?: string
  showMenu?: boolean
} & ComponentProps<'div'>

export const Header: FC<Props> = ({
  searchPath,
  showMenu,
  className,
  ...props
}) => {
  const { toggleSignInDialog } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={clsx(className)} {...props}>
      <div className="flex w-full items-end justify-between px-5 py-3">
        {/* Left Side Hamburger Menu */}
        <div className="h-6 w-6">
          {showMenu ? (
            <>
              <button onClick={() => setIsMenuOpen(true)}>
                <Icon icon={menuIcon} className="text-2xl leading-6" />
              </button>
              <DialogMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                onSignIn={toggleSignInDialog}
              />
            </>
          ) : null}
        </div>
        {/* Center Logo */}
        <div className="shrink-0 p-[1px]">
          <svg
            width="105"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.584 23.792c.146 0 .25-.063.292-.23l3.272-9.962 3.272 9.963c.042.166.146.229.292.229h1.917c.146 0 .271-.063.313-.209l5.336-14.777c.062-.187-.042-.312-.23-.312h-2.584c-.146 0-.25.062-.292.229L15.796 19.06 12.398 8.723c-.041-.167-.146-.23-.291-.23H10.23c-.146 0-.25.063-.292.23L6.542 19.04 3.186 8.723c-.042-.167-.146-.23-.292-.23H.247c-.187 0-.291.126-.229.313l5.336 14.777c.041.146.166.209.312.209h1.918zm18.994 0c.167 0 .271-.105.271-.271v-5.232c0-2.063 1.25-3.043 2.564-3.043 1.417 0 2.063.834 2.063 2.627v5.648c0 .166.104.27.271.27h2.168c.167 0 .27-.104.27-.27v-6.753c0-2.48-1.437-3.98-3.938-3.98-1.314 0-2.585.5-3.398 1.541V8.431c0-.167-.104-.27-.27-.27H24.41c-.167 0-.271.103-.271.27v15.09c0 .166.104.27.27.27h2.168zm15.2.208c2 0 3.793-.854 4.752-2.751.083-.167.02-.292-.146-.354l-1.855-.646c-.146-.042-.271-.021-.355.125-.5.813-1.27 1.23-2.376 1.23-1.438 0-2.355-.897-2.605-2.377h7.4c.166 0 .27-.083.29-.27.105-3.71-1.791-6.17-5.105-6.17-3.398 0-5.461 2.334-5.461 5.607 0 3.272 2.063 5.606 5.46 5.606zm-.021-8.816c1.167 0 1.98.75 2.23 2.022h-4.752c.333-1.293 1.25-2.022 2.522-2.022zM53.725 24c2.001 0 3.793-.854 4.752-2.751.084-.167.021-.292-.146-.354l-1.855-.646c-.145-.042-.27-.021-.354.125-.5.813-1.271 1.23-2.376 1.23-1.438 0-2.355-.897-2.605-2.377h7.399c.166 0 .27-.083.291-.27.105-3.71-1.792-6.17-5.106-6.17-3.397 0-5.46 2.334-5.46 5.607 0 3.272 2.063 5.606 5.46 5.606zm-.02-8.816c1.166 0 1.98.75 2.23 2.022h-4.753c.334-1.293 1.251-2.022 2.522-2.022zm9.57 8.608c.168 0 .272-.105.272-.271V8.43c0-.167-.104-.27-.271-.27h-2.168c-.166 0-.27.103-.27.27v15.09c0 .166.104.27.27.27h2.168z"
              fill="currentColor"
            />
            <mask
              id="prefix__a"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="68"
              y="0"
              width="37"
              height="24"
            >
              <path
                d="M75.852 24c4.595 0 7.069-2.931 7.069-6.736V15.54c0-.167-.104-.27-.27-.27h-6.362c-.167 0-.27.103-.27.27v2.058c0 .166.103.27.27.27h3.804c-.228 2.225-1.913 3.389-4.158 3.389-2.91 0-4.678-2.038-4.678-5.156 0-3.119 1.747-5.198 4.678-5.198 1.726 0 3.035.77 3.763 2.163.063.145.187.208.333.166l2.224-.624c.167-.041.229-.187.167-.353-1.02-2.599-3.327-4.096-6.528-4.096-4.387 0-7.547 3.14-7.547 7.921 0 4.782 3.014 7.921 7.505 7.921zM103.621 2.25a2.25 2.25 0 11-4.501-.001 2.25 2.25 0 014.501.001zm-9.914 3.436a.746.746 0 00-.77.08l-1.916 1.439c-.661.497-1.603.36-2.1-.3a1.502 1.502 0 01.3-2.1l1.917-1.44a3.751 3.751 0 013.848-.393l4.238 1.992a2.246 2.246 0 01.712 3.54L98.141 10.5h4.566a2.25 2.25 0 012.207 2.69l-1.322 6.605a1.5 1.5 0 11-2.943-.59l1.143-5.705h-3.295c.403.919.624 1.931.624 3 0 4.144-3.357 7.5-7.5 7.5a7.498 7.498 0 01-7.5-7.5 7.498 7.498 0 019.018-7.345l2.541-2.54-1.974-.93zM91.62 21a4.501 4.501 0 000-9 4.501 4.501 0 000 9z"
                fill="#fff"
              />
            </mask>
            <g mask="url(#prefix__a)">
              <path fill="currentColor" d="M57.547-16.8h57.6v57.6h-57.6z" />
              <path
                fill="#78CCDD"
                d="M84.355 10.95l11.6-15.707 16.943 12.512-11.6 15.707z"
              />
            </g>
          </svg>
        </div>
        {/* Right Side Action Button */}
        <div className="h-6 w-6">
          {searchPath ? (
            <Link to={searchPath}>
              <Icon icon={searchIcon} className="text-2xl leading-6" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}
