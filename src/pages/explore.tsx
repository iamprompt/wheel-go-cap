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
import { LatLngTuple } from 'leaflet'
import { useEffect, useRef } from 'react'
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet'

import { HomeLayout } from '../layouts/home'

const ExplorePage = () => {
  const position = [13.7955, 100.32232] satisfies LatLngTuple

  const arrayPoint = [
    [13.7955467, 100.3229578],
    [13.794446, 100.3247406],
    [13.7939746, 100.3248458],
  ] satisfies LatLngTuple[]

  const arrayPoint2 = [
    [13.794147745444036, 100.32387934926832],
    [13.794760280963228, 100.32384655144612],
    [13.795176804197885, 100.32385159726492],
  ] satisfies LatLngTuple[]

  const arrayPoint3 = [
    [13.7963435, 100.3229426],
    [13.796352, 100.324329],
    [13.795998, 100.324275],
  ] satisfies LatLngTuple[]

  return (
    <HomeLayout className="flex w-full" transparent>
      <div className="fixed top-0 left-0 z-0 flex h-screen w-full"></div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ minHeight: '100vh', minWidth: '100vw', zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {Array.from({ length: 10 }).map((_point, index) => (
          <Polyline
            key={`${index}-1`}
            positions={arrayPoint}
            pathOptions={{ color: 'black', opacity: 0.2 }}
          />
        ))}
        {Array.from({ length: 2 }).map((_point, index) => (
          <Polyline
            key={`${index}-2`}
            positions={arrayPoint2}
            pathOptions={{ color: 'black', opacity: 0.2 }}
          />
        ))}
        {Array.from({ length: 1 }).map((_point, index) => (
          <Polyline
            key={`${index}-3`}
            positions={arrayPoint3}
            pathOptions={{ color: 'black', opacity: 0.2 }}
          />
        ))}
      </MapContainer>

      {/* <div
        className="z-[20] mx-auto inline-block w-full max-w-lg px-5 safe-bottom"
        style={{
          marginTop: `calc(${window.innerHeight}px - 86px - env(safe-area-inset-bottom) - 60px)`,
        }}
      >
        <div className="z-[99] w-full rounded-t-xl">
          <div className="flex h-[86px] items-center rounded-t-xl bg-brand-gradient-to-r p-4 text-white">
            <div className="flex-1">
              <div className="mb-2 flex flex-row items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <Icon
                    icon={apartment}
                    className="h-4 w-4 text-base text-info-400"
                  />
                </div>
                <div className="text-sm font-bold text-white/60">Building</div>
              </div>
              <div className="text-xl font-bold text-white">
                Office of the President
              </div>
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
                <div className="text-sm font-bold">Rating</div>
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
                <div className="text-sm font-bold">Facilities</div>
                <div className="flex justify-between">
                  <div className="h-11 w-11 p-2">
                    <Icon icon={doorSliding} className="mx-auto h-6 w-6" />
                  </div>
                  <div className="h-11 w-11 p-2">
                    <Icon icon={wheelChairPickup} className="mx-auto h-6 w-6" />
                  </div>
                  <div className="h-11 w-11 p-2">
                    <Icon icon={wc} className="mx-auto h-6 w-6" />
                  </div>
                  <div className="h-11 w-11 p-2">
                    <Icon icon={elevator} className="mx-auto h-6 w-6" />
                  </div>
                  <div className="h-11 w-11 p-2">
                    <Icon
                      icon={localParking}
                      className="mx-auto h-6 w-6 opacity-30"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-2 w-full bg-gray-200" />
            <div className="p-4">
              <div className="text-sm font-bold">Places around here</div>
              <div className="divide-y">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="py-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-blue-700">
                        <Icon
                          icon={directionsBus}
                          className="mx-auto text-xs text-blue-700"
                        />
                      </div>
                      <div className="flex flex-1 justify-between">
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
      </div> */}
    </HomeLayout>
  )
}

export default ExplorePage
