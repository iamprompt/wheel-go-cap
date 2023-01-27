import { GoogleMap } from '@capacitor/google-maps'
import apartment from '@iconify/icons-material-symbols/apartment-rounded'
import keyboardDoubleArrowUp from '@iconify/icons-material-symbols/keyboard-double-arrow-up-rounded'
import { Icon } from '@iconify/react'
import { useEffect, useRef } from 'react'

import { HomeLayout } from '../layouts/home'

const ExplorePage = () => {
  const mapRef = useRef<HTMLElement>()
  let newMap: GoogleMap

  async function createMap() {
    if (!mapRef.current) return

    newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: mapRef.current,
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
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
    <HomeLayout className="w-full flex">
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
        className="w-full mx-auto max-w-lg z-[99] inline-block px-5"
        style={{
          marginTop: window.innerHeight - 86 - 60 + 'px',
        }}
      >
        <div className="h-[1000px] w-full z-[99] rounded-xl">
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
          <div className="bg-white h-[900px]"></div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default ExplorePage
