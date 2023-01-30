import arrowBackIosNew from '@iconify/icons-material-symbols/arrow-back-ios-new-rounded'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { ComponentProps, FC } from 'react'
import { useNavigate } from 'react-router-dom'

type ActionHeaderWithTitleProps = ComponentProps<'div'> & {
  title: string
  showBackButton?: boolean
  actionLabel?: string
  onAction?: () => void
}

export const ActionHeaderWithTitle: FC<ActionHeaderWithTitleProps> = ({
  title,
  showBackButton,
  actionLabel,
  onAction,
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
      <div className="flex w-full items-end justify-between px-5 py-6">
        {/* Left Side Back Button */}
        <div className="h-6 w-6">
          {showBackButton ? (
            <button onClick={() => navigate(-1)}>
              <Icon icon={arrowBackIosNew} className="text-2xl leading-6" />
            </button>
          ) : null}
        </div>
        {/* Center Logo */}
        <div className="shrink-0 font-bold">{title}</div>
        {/* Right Side Action Button */}
        <div>
          {actionLabel ? (
            <button className="font-bold" onClick={() => onAction?.()}>
              Save
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
