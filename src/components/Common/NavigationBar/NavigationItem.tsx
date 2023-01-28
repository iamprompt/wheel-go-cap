import { Icon, IconifyIcon } from '@iconify/react'
import clsx from 'clsx'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

type NavigationItemProps = {
  to: string
  icon: IconifyIcon
  selectedIcon: IconifyIcon
  label: string
}

export const NavigationItem: FC<NavigationItemProps> = ({
  to,
  icon,
  selectedIcon,
  label,
}) => {
  const { pathname } = useLocation()

  const isSelected = pathname === to

  return (
    <Link
      to={to}
      className={clsx(
        'flex flex-col items-center',
        !isSelected && 'text-theme-unhover'
      )}
    >
      <Icon
        icon={isSelected ? selectedIcon : icon}
        className="text-xl leading-4"
      />
      <span className="mt-2 text-sm font-bold leading-4">{label}</span>
    </Link>
  )
}
