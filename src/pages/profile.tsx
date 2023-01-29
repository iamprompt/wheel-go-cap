import navigationIcon from '@iconify/icons-material-symbols/navigation-rounded'
import rateReviewIcon from '@iconify/icons-material-symbols/rate-review-rounded'
import { Link } from 'react-router-dom'

import { BadgeWithLabel } from '../components/Profile/BadgeWithLabel'
import { HomeLayout } from '../layouts/home'

const ProfilePage = () => {
  return (
    <HomeLayout className="py-16">
      <div className="space-y-6 px-4 pt-8 pb-6">
        <div className="flex flex-col items-center">
          <div className="relative inline-block">
            <img
              src="https://gravatar.com/avatar/1b052f?d=mp&size=512"
              alt="Profile"
              className="mx-auto h-40 w-40 rounded-full border-4 border-qac-magenta shadow-sm"
            />
            <div className="absolute -bottom-3 flex w-full justify-center">
              <div className="mx-auto inline-block rounded-xl border border-theme-unhover bg-qac-magenta py-1 px-3 font-bold text-white shadow-small">
                Lvl.10
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="text-3xl font-bold">Anya Lee</div>
            <div className="mt-1 text-sm text-theme-description">
              aliblahblah_09
            </div>
          </div>
          <div className="mt-3 text-center">
            <Link to={'/'} className="text-xs font-bold text-qac-magenta">
              Edit Profile
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <BadgeWithLabel
            icon={navigationIcon}
            label="Master Navigation"
            size={48}
            color="#08CE57"
          />
          <BadgeWithLabel
            icon={rateReviewIcon}
            label="Skillful Reviewer"
            size={48}
            color="#4D82F3"
          />
          <BadgeWithLabel size={48} color="#08CE57" />
          <BadgeWithLabel size={48} color="#08CE57" />
        </div>
        <hr />
      </div>
    </HomeLayout>
  )
}

export default ProfilePage
