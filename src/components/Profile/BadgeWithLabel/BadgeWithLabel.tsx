import { IconifyIcon } from '@iconify/react'
import clsx from 'clsx'
import { ComponentProps, FC } from 'react'

import { BadgeIcon } from '../BadgeIcon'

type BadgeWithLabelProps = {
  icon?: IconifyIcon
  size: number
  color?: string
  label?: string
} & ComponentProps<'div'>

export const BadgeWithLabel: FC<BadgeWithLabelProps> = ({
  label,
  icon,
  color,
  size,
  className,
  ...props
}) => {
  return (
    <div className={clsx(className)} {...props}>
      {icon ? (
        <BadgeIcon icon={icon} color={color} size={size} className="mx-auto" />
      ) : (
        <BadgeIcon comingSoon size={size} color="#F3F1F1" className="mx-auto" />
      )}
      <div className="mt-1 text-center text-body-12-semibold" style={{ color }}>
        {label}
      </div>
    </div>
  )
}
