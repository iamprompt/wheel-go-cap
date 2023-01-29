import { IconifyIcon } from '@iconify/react'
import { FC } from 'react'

import { BadgeIcon } from '../BadgeIcon'

type BadgeWithLabelProps = {
  icon?: IconifyIcon
  size: number
  color?: string
  label?: string
}

export const BadgeWithLabel: FC<BadgeWithLabelProps> = ({
  label,
  icon,
  color,
  size,
}) => {
  return (
    <div className="block">
      {icon ? (
        <BadgeIcon icon={icon} color={color} size={size} className="mx-auto" />
      ) : (
        <BadgeIcon comingSoon size={size} color="#F3F1F1" />
      )}
      <div className="mt-1 text-center text-body-12-semibold" style={{ color }}>
        {label}
      </div>
    </div>
  )
}
