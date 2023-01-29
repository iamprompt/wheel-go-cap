import { IconifyIcon } from '@iconify/react'
import { FC } from 'react'

import { BadgeIcon } from '../BadgeIcon'

type BadgeWithLabelProps = {
  icon: IconifyIcon
  size: number
  color?: string
  label: string
}

export const BadgeWithLabel: FC<BadgeWithLabelProps> = ({
  label,
  icon,
  color,
  size,
}) => {
  return (
    <div className="block">
      <BadgeIcon icon={icon} color={color} size={size} className="mx-auto" />
      <div className="text-center text-title-24-bold" style={{ color }}>
        {label}
      </div>
    </div>
  )
}
