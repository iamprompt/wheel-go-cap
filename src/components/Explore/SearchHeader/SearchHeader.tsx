import arrowBackIosNew from '@iconify/icons-material-symbols/arrow-back-ios-new-rounded'
import searchIcon from '@iconify/icons-material-symbols/search-rounded'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { ComponentProps, FC } from 'react'
import { useNavigate } from 'react-router-dom'

type SearchHeaderProps = ComponentProps<'div'>

export const SearchHeader: FC<SearchHeaderProps> = ({
  className,
  ...props
}) => {
  const navigate = useNavigate()

  return (
    <div
      className={clsx(
        'fixed top-0 left-0 z-50 w-full border-b border-theme-divider bg-white safe-top safe-x',
        className
      )}
      {...props}
    >
      <div className="flex w-full items-center justify-between gap-3 px-5 py-4">
        {/* Left Side Back Button */}
        <div className="h-6 w-6">
          <button onClick={() => navigate(-1)}>
            <Icon icon={arrowBackIosNew} className="text-2xl leading-6" />
          </button>
        </div>
        {/* Center Logo */}
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full rounded-xl border border-theme-divider p-3 pl-12"
            placeholder="Explore new place"
            enterKeyHint="search"
          />
          <Icon
            icon={searchIcon}
            className="absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2"
          />
        </div>
        {/* <div className="shrink-0 font-bold">{title}</div> */}
        {/* Right Side Action Button */}
        {/* <div>
          <button
            className="font-bold text-theme-magenta"
            onClick={() => {
              return
            }}
          >
            Filter
          </button>
        </div> */}
      </div>
    </div>
  )
}
