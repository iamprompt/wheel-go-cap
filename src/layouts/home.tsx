import clsx from 'clsx'
import { ComponentProps, FC, ReactNode } from 'react'

import { Header } from '../components/Common/Header'
import { NavigationBar } from '../components/Common/NavigationBar'

export const HomeLayout: FC<
  { children: ReactNode } & ComponentProps<'main'>
> = ({ children, ...props }) => {
  return (
    <div className="min-h-screen">
      <Header
        className="bg-white safe-top safe-left safe-right fixed w-full pb-2 rounded-b-xl shadow-xl drop-shadow-[0px_3px_5px_rgba(9,_30,_66,_0.2)] top-0 left-0 z-[99]"
        searchPath="/search"
        showMenu={true}
      />
      <div className="safe-top" />
      <main className={clsx('', props.className)} {...props}>
        {children}
      </main>
      <div className="safe-bottom" />
      <NavigationBar className="z-[99] fixed bottom-0 left-0 w-full bg-white rounded-t-xl drop-shadow-[0px_3px_5px_rgba(9,_30,_66,_0.2)] safe-bottom safe-left safe-right" />
    </div>
  )
}
