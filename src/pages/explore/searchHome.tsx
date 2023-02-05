import { FC } from 'react'

import { SearchHeader } from '../../components/Explore/SearchHeader'
import { BlankLayout } from '../../layouts/blank'

const SearchHomePage: FC = () => {
  return (
    <BlankLayout>
      <SearchHeader />
    </BlankLayout>
  )
}

export default SearchHomePage
