import FileIcon from '@iconify/icons-ic/insert-drive-file'
import FileOutlineIcon from '@iconify/icons-ic/outline-insert-drive-file'
import ExploreIcon from '@iconify/icons-material-symbols/explore'
import ExploreOutlineIcon from '@iconify/icons-material-symbols/explore-outline'
import PersonIcon from '@iconify/icons-material-symbols/person'
import PersonOutlineIcon from '@iconify/icons-material-symbols/person-outline'
import { Icon, IconifyIcon } from '@iconify/react'
import clsx from 'clsx'
import { ComponentProps, FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

type NavigationButtonProps = {
  to: string
  icon: IconifyIcon
  selectedIcon: IconifyIcon
  label: string
}

const NavigationButton: FC<NavigationButtonProps> = ({
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

type NavigationBarProps = ComponentProps<'div'>

export const NavigationBar: FC<NavigationBarProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx(className)} {...props}>
      <div className="grid grid-cols-3 py-2">
        <NavigationButton
          to="/"
          icon={ExploreOutlineIcon}
          selectedIcon={ExploreIcon}
          label="Explore"
        />
        <NavigationButton
          to="/records"
          icon={FileOutlineIcon}
          selectedIcon={FileIcon}
          label="Records"
        />
        <NavigationButton
          to="/profile"
          icon={PersonOutlineIcon}
          selectedIcon={PersonIcon}
          label="Profile"
        />
      </div>
    </div>
  )
}
