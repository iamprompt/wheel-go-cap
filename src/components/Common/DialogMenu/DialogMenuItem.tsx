import { Icon, IconifyIcon } from '@iconify/react'
import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type DialogMenuItemProps = {
  to: string
  label: string
  icon?: IconifyIcon
  iconColor?: string
}

export const DialogMenuItem: FC<DialogMenuItemProps> = ({
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
