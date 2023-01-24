import FileIcon from '@iconify/icons-ic/insert-drive-file'
import FileOutlineIcon from '@iconify/icons-ic/outline-insert-drive-file'
import ExploreIcon from '@iconify/icons-material-symbols/explore'
import ExploreOutlineIcon from '@iconify/icons-material-symbols/explore-outline'
import PersonIcon from '@iconify/icons-material-symbols/person'
import PersonOutlineIcon from '@iconify/icons-material-symbols/person-outline'
import clsx from 'clsx'
import { ComponentProps, FC } from 'react'

import { NavigationItem } from './NavigationItem'

type NavigationBarProps = ComponentProps<'div'>

export const NavigationBar: FC<NavigationBarProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx(className)} {...props}>
      <div className="grid grid-cols-3 py-2">
        <NavigationItem
          to="/"
          icon={ExploreOutlineIcon}
          selectedIcon={ExploreIcon}
          label="Explore"
        />
        <NavigationItem
          to="/records"
          icon={FileOutlineIcon}
          selectedIcon={FileIcon}
          label="Records"
        />
        <NavigationItem
          to="/profile"
          icon={PersonOutlineIcon}
          selectedIcon={PersonIcon}
          label="Profile"
        />
      </div>
    </div>
  )
}
