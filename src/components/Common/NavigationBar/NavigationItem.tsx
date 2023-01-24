import { Icon, IconifyIcon } from '@iconify/react'
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
    <Link to={to} className="flex flex-col items-center">
      <Icon
        icon={isSelected ? selectedIcon : icon}
        className="text-xl leading-4"
      />
      <span className="text-sm leading-4 mt-2 font-bold">{label}</span>
    </Link>
  )
}
