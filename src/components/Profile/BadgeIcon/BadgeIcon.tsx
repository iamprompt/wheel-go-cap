import { Icon, IconifyIcon } from '@iconify/react'
import clsx from 'clsx'
import { ComponentProps, FC } from 'react'

type BadgeIconProps = {
  icon: IconifyIcon
  size: number
  color?: string
} & ComponentProps<'div'>

export const BadgeIcon: FC<BadgeIconProps> = ({
  icon,
  color,
  size,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx('rounded-full border-4 p-2', className)}
      style={{
        borderColor: color,
        width: `${size}px`,
        height: `${size}px`,
      }}
      {...props}
    >
      <Icon
        icon={icon}
        style={{ color }}
        className="mx-auto h-full w-full drop-shadow-inner-badge"
      />
    </div>
  )
}
