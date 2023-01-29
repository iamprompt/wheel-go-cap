import { IconifyIcon } from '@iconify/react'
import { FC, useState } from 'react'

import { BadgeDetailDialog } from '../BadgeDetailDialog/BadgeDetailDialog'
import { BadgeWithLabel } from '../BadgeWithLabel'

type BadgeWithPopupProps = {
  icon?: IconifyIcon
  size: number
  color?: string
  label?: string
  description?: string
}

export const BadgeWithPopup: FC<BadgeWithPopupProps> = ({
  icon,
  size,
  color,
  label,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <BadgeWithLabel
        icon={icon}
        size={size}
        color={color}
        label={label}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      />
      <BadgeDetailDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={{
          icon,
          size,
          color,
          label,
          description,
        }}
      />
    </>
  )
}
