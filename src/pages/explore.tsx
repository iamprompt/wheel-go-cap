import { GoogleMap } from '@capacitor/google-maps'
import apartment from '@iconify/icons-material-symbols/apartment-rounded'
import directionsBus from '@iconify/icons-material-symbols/directions-bus'
import doorSliding from '@iconify/icons-material-symbols/door-sliding-rounded'
import elevator from '@iconify/icons-material-symbols/elevator-rounded'
import keyboardDoubleArrowUp from '@iconify/icons-material-symbols/keyboard-double-arrow-up-rounded'
import localParking from '@iconify/icons-material-symbols/local-parking-rounded'
// import starHalf from '@iconify/icons-material-symbols/star-half-rounded'
import star from '@iconify/icons-material-symbols/star-rounded'
import wc from '@iconify/icons-material-symbols/wc-rounded'
import wheelChairPickup from '@iconify/icons-material-symbols/wheelchair-pickup-rounded'
import { Icon } from '@iconify/react'
import { useEffect, useRef } from 'react'

import { HomeLayout } from '../layouts/home'

const ExplorePage = () => {
  const mapRef = useRef<HTMLElement>()
  let newMap: GoogleMap

  const createMap = async () => {
    if (!mapRef.current) return

    newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: mapRef.current,
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      config: {
        center: {
          lat: 13.794469401082836,
          lng: 100.3243931000262,
        },
        zoom: 18,
        streetViewControl: false,
        zoomControl: false,
        mapTypeControl: false,
      },
    })
  }

  useEffect(() => {
    createMap()
  }, [])

  return (
    <HomeLayout className="w-full flex" transparent>
      <div className="flex h-screen fixed top-0 left-0 w-full z-0">
        <capacitor-google-map
          ref={mapRef}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: 0,
          }}
        />
      </div>
      <div
        className="w-full mx-auto max-w-lg z-[20] inline-block px-5 safe-bottom"
        style={{
          marginTop: `calc(${window.innerHeight}px - 86px - env(safe-area-inset-bottom) - 60px)`,
        }}
      >
        <div className="w-full z-[99] rounded-t-xl">
          <div className="from-[#7011B1] to-[#78CCDD] bg-gradient-to-r h-[86px] rounded-t-xl p-4 flex items-center text-white">
            <div className="flex-1">
              <div className="flex flex-row gap-2 items-center mb-2">
                <div className="bg-white flex items-center justify-center h-6 w-6 rounded-full">
                  <Icon
                    icon={apartment}
                    className="h-4 w-4 text-base text-blue-700"
                  />
                </div>
                <div className="text-sm font-bold">Building</div>
              </div>
              <div className="font-bold text-xl">Office of the President</div>
            </div>
            <div>
              <Icon icon={keyboardDoubleArrowUp} className="h-8 w-8 text-4xl" />
            </div>
          </div>
          <div
            className="bg-white"
            style={{
              paddingBottom: 'calc(env(safe-area-inset-bottom) + 60px)',
            }}
          >
            <div className="p-4">
              <div>
                <div className="font-bold text-sm">Rating</div>
                <div className="flex flex-row items-center">
                  <span className="mr-2 text-sm">4.5</span>
                  <span className="flex flex-row gap-1">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Icon
                        key={item}
                        icon={star}
                        className="h-6 w-6 text-base text-yellow-300"
                      />
                    ))}
                  </span>
                  <div className="ml-3 text-sm">(41 ratings)</div>
                </div>
              </div>
              <hr className="my-3" />
              <div>
                <div className="font-bold text-sm">Facilities</div>
                <div className="flex justify-between">
                  <div className="h-11 w-11 p-2">
                    <Icon icon={doorSliding} className="h-6 w-6 mx-auto" />
                  </div>
                  <div className="h-11 w-11 p-2">
                    <Icon icon={wheelChairPickup} className="h-6 w-6 mx-auto" />
                  </div>
                  <div className="h-11 w-11 p-2">
                    <Icon icon={wc} className="h-6 w-6 mx-auto" />
                  </div>
                  <div className="h-11 w-11 p-2">
                    <Icon icon={elevator} className="h-6 w-6 mx-auto" />
                  </div>
                  <div className="h-11 w-11 p-2">
                    <Icon
                      icon={localParking}
                      className="h-6 w-6 mx-auto opacity-30"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-2 w-full bg-gray-200" />
            <div className="p-4">
              <div className="font-bold text-sm">Places around here</div>
              <div className="divide-y">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="py-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="h-6 w-6 rounded-full flex items-center justify-center border-[3px] border-blue-700">
                        <Icon
                          icon={directionsBus}
                          className="mx-auto text-blue-700 text-xs"
                        />
                      </div>
                      <div className="flex-1 flex justify-between">
                        <div className="text-sm">
                          Tram Station, Office of the President
                        </div>
                        <div className="text-xs text-gray-400">5 m</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default ExplorePage
