import questionMarkIcon from '@iconify/icons-material-symbols/question-mark-rounded'
import { Icon, IconifyIcon } from '@iconify/react'
import clsx from 'clsx'
import { ComponentProps, FC } from 'react'

type BadgeIconProps = {
  icon?: IconifyIcon
  size: number
  color?: string
  comingSoon?: boolean
} & ComponentProps<'div'>

export const BadgeIcon: FC<BadgeIconProps> = ({
  icon,
  color,
  size,
  comingSoon,
  className,
  ...props
}) => {
  const isFallback = comingSoon || !icon

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
        icon={isFallback ? questionMarkIcon : icon}
        style={{ color }}
        className={clsx(
          'mx-auto h-full w-full',
          !isFallback && 'drop-shadow-inner-badge'
        )}
      />
    </div>
  )
}
