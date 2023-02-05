import { Icon } from '@iconify/react'
import { FC } from 'react'

import { NavigationBar } from '../../components/Common/NavigationBar'
import { SearchHeader } from '../../components/Explore/SearchHeader'
import { BlankLayout } from '../../layouts/blank'

const SearchHomePage: FC = () => {
  return (
    <BlankLayout>
      <SearchHeader />
      <div className="pt-20 pb-16 safe-x">
        <div className="px-4 pt-3">
          <h1 className="font-bold">Place Categories</h1>
          <div className="mt-3 flex flex-row flex-wrap gap-3">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-theme-unhover p-1.5 text-sm font-bold"
              >
                Building
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6" />
        <div>
          <h1 className="px-4 font-bold">Places near me</h1>
          <div className="mt-6 divide-y border-y border-theme-divider">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-3 px-4 py-3"
              >
                <Icon icon="mdi:map-marker" />
                <div className="flex-1">
                  <div className="text-sm">
                    Tram Station, Office of the President
                  </div>
                  <div className="flex flex-row items-center divide-x text-xs text-theme-unhover">
                    <div className="flex flex-row items-center pr-2">
                      <Icon
                        icon="material-symbols:star-rounded"
                        className="inline-flex h-6 w-6 text-warning-200"
                      />
                      4.5
                    </div>
                    <div className="flex flex-row items-center pl-2">5 m</div>
                  </div>
                </div>
                <Icon
                  icon="material-symbols:arrow-forward-ios-rounded"
                  className="text-theme-description"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <NavigationBar className="fixed bottom-0 left-0 z-50 w-full rounded-t-xl bg-white shadow-medium safe-left safe-right safe-bottom" />
    </BlankLayout>
  )
}

export default SearchHomePage
