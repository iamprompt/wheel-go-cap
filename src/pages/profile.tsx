import accessibleForwardIcon from '@iconify/icons-material-symbols/accessible-forward-rounded'
import navigationIcon from '@iconify/icons-material-symbols/navigation-rounded'
import rateReviewIcon from '@iconify/icons-material-symbols/rate-review-rounded'
import { Icon, IconifyIcon } from '@iconify/react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { BadgeWithLabel } from '../components/Profile/BadgeWithLabel'
import { BadgeWithPopup } from '../components/Profile/BadgeWithPopup'
import { HomeLayout } from '../layouts/home'

type ActivityDetailItemProps = {
  icon: IconifyIcon
  label: string
  value: string
}

const ActivityDetailItem: FC<ActivityDetailItemProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex flex-row justify-between gap-5">
      <div className="flex flex-row items-center gap-2">
        <Icon icon={icon} className="h-5 w-5 text-theme-magenta" />
        <div className="text-xs font-bold text-theme-magenta">{label}</div>
      </div>

      <div className="text-xs font-bold text-theme-description">{value}</div>
    </div>
  )
}

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
          <BadgeWithPopup
            icon={navigationIcon}
            label="Master Navigation"
            size={48}
            color="#08CE57"
          />
          <BadgeWithPopup
            icon={rateReviewIcon}
            label="Skillful Reviewer"
            size={48}
            color="#4D82F3"
          />
          <BadgeWithLabel size={48} color="#08CE57" />
          <BadgeWithLabel size={48} color="#08CE57" />
        </div>
        <hr />
        <div>
          <div className="relative h-8 overflow-hidden">
            <Icon
              icon={accessibleForwardIcon}
              className="absolute h-8 w-8 text-qac-magenta"
              style={{
                left: 'calc(100% * (20 / 100) - 32px)',
              }}
            />
          </div>
          <div className="relative overflow-hidden rounded-full">
            <div className="h-2 bg-theme-smokeWhite" />
            <div
              className="absolute top-0 left-0 h-2 bg-qac-magenta"
              style={{
                width: 'calc(100% * (20 / 100))',
              }}
            />
          </div>
          <div className="mt-2 flex flex-row justify-between">
            <div className="space-x-1 text-xs font-bold">
              <span className="text-theme-magenta">XP 1,000</span>
              <span className="text-theme-magenta">/</span>
              <span className="text-theme-description">2,000</span>
            </div>
            <div className="space-x-1 text-xs font-bold">
              <span className="text-theme-magenta">1,000 XP</span>
              <span className="text-theme-description">to level up</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-3 bg-theme-smokeWhite" />

      <div className="space-y-6 p-6 px-4">
        <div className="font-bold">Total Activity</div>
        <div className="space-y-4">
          <ActivityDetailItem
            icon={navigationIcon}
            label="Travelled Distance"
            value="10.5"
          />
          <ActivityDetailItem
            icon={navigationIcon}
            label="Contributed Routes"
            value="45"
          />
          <ActivityDetailItem
            icon={navigationIcon}
            label="Places Visited"
            value="15"
          />
          <ActivityDetailItem
            icon={navigationIcon}
            label="Total Reviews"
            value="15"
          />
          <ActivityDetailItem
            icon={navigationIcon}
            label="Start Date"
            value="16 Sep 2022"
          />
        </div>
      </div>
    </HomeLayout>
  )
}

export default ProfilePage
