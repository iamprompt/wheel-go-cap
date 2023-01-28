import clsx from 'clsx'
import { ComponentProps, FC } from 'react'

type BlankLayoutProps = ComponentProps<'div'> & {
  paddingTop?: boolean
  paddingBottom?: boolean
  paddingLeft?: boolean
  paddingRight?: boolean
  transparent?: boolean
}

export const BlankLayout: FC<BlankLayoutProps> = ({
  className,
  transparent = false,
  paddingTop = true,
  paddingBottom = true,
  paddingLeft = true,
  paddingRight = true,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'min-h-screen',
        transparent ? 'bg-transparent' : 'bg-white',
        paddingTop && 'safe-top',
        paddingBottom && 'safe-bottom',
        paddingLeft && 'safe-left',
        paddingRight && 'safe-right',
        className
      )}
      {...props}
    />
  )
}
