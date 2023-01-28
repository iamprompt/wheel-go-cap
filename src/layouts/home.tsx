import clsx from 'clsx'
import { ComponentProps, FC } from 'react'

import { Header } from '../components/Common/Header'
import { NavigationBar } from '../components/Common/NavigationBar'
import { BlankLayout } from './blank'

type HomeLayoutProps = ComponentProps<'main'> & {
  transparent?: boolean
}

export const HomeLayout: FC<HomeLayoutProps> = ({
  transparent = false,
  children,
  ...props
}) => {
  return (
    <BlankLayout transparent={transparent}>
      <Header
        className="fixed top-0 left-0 z-50 w-full rounded-b-xl bg-white pb-2 shadow-medium safe-top safe-x"
        searchPath="/search"
        showMenu={true}
      />
      <div className="safe-top" />
      <main className={clsx(props.className)} {...props}>
        {children}
      </main>
      <div className="safe-bottom" />
      <NavigationBar className="fixed bottom-0 left-0 z-50 w-full rounded-t-xl bg-white shadow-medium safe-left safe-right safe-bottom" />
    </BlankLayout>
  )
}
