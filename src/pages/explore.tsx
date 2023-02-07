import L, { LatLng, LatLngTuple } from 'leaflet'
import { useEffect } from 'react'
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet'
import { Geolocation } from '@capacitor/geolocation'

import { HomeLayout } from '../layouts/home'

import 'leaflet.heat'

const HeatMap = ({ coords }: { coords: LatLng[] }) => {
  const map = useMap()

  useEffect(() => {
    L.heatLayer(coords, {
      radius: 8,
    }).addTo(map)
  })

  return null
}

const CurrentLocationSetter = () => {
  const map = useMap()

  const setLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition()
    map.flyTo(
      [coordinates.coords.latitude, coordinates.coords.longitude],
      map.getZoom()
    )
    // Add marker
    L.marker([coordinates.coords.latitude, coordinates.coords.longitude]).addTo(
      map
    )
  }

  useEffect(() => {
    setLocation()
  }, [])

  return null
}

const ExplorePage = () => {
  const position = [13.794459, 100.322014] satisfies LatLngTuple

  const arrayPoint = [
    [13.7952296, 100.3229328],
    [13.795227, 100.322981],
    [13.7952296, 100.3230722],
    [13.795227, 100.3231554],
    [13.795227, 100.3232251],
    [13.795227, 100.3232788],
    [13.795227, 100.3233244],
    [13.7952218, 100.3233807],
    [13.7952218, 100.3235121],
    [13.7952218, 100.3235792],
    [13.7952166, 100.3236301],
    [13.7952114, 100.3236999],
    [13.7952114, 100.3237589],
    [13.7952062, 100.3238152],
    [13.7951853, 100.3238501],
    [13.7951515, 100.3238554],
    [13.795115, 100.3238554],
    [13.7950655, 100.3238581],
    [13.7949978, 100.3238688],
    [13.7949457, 100.3238635],
    [13.7949014, 100.3238635],
    [13.7948545, 100.3238662],
    [13.794818, 100.3238688],
    [13.7947607, 100.3238608],
    [13.7947295, 100.3238474],
    [13.7947243, 100.3238018],
    [13.7947217, 100.3237428],
    [13.7947217, 100.3237079],
    [13.7947217, 100.3236623],
    [13.7947165, 100.3236355],
    [13.7947139, 100.3236006],
  ] satisfies LatLngTuple[]

  const arrayPoint2 = [
    [13.7951723, 100.3229046],
    [13.7951945, 100.3229046],
    [13.795227, 100.3229046],
    [13.7952296, 100.3229328],
    [13.795227, 100.322981],
    [13.795214, 100.3230092],
    [13.795214, 100.3230333],
    [13.795214, 100.3230574],
    [13.795214, 100.3230963],
    [13.7952192, 100.3231218],
    [13.7952179, 100.3231969],
    [13.7952205, 100.3232372],
    [13.795227, 100.3232788],
    [13.7952192, 100.3233699],
    [13.7952153, 100.3234303],
    [13.7952296, 100.3234584],
    [13.7952218, 100.3235121],
    [13.7952114, 100.3235711],
    [13.7952049, 100.3236194],
    [13.7952036, 100.3236502],
    [13.7952049, 100.3237159],
    [13.7952036, 100.3237682],
    [13.7952049, 100.3238071],
    [13.7951958, 100.3238581],
    [13.7951515, 100.3238554],
    [13.7950903, 100.3238487],
    [13.7950434, 100.3238554],
    [13.7950134, 100.3238567],
    [13.79496, 100.3238527],
    [13.7949301, 100.3238567],
    [13.794878, 100.3238567],
    [13.7948259, 100.3238567],
    [13.7947607, 100.3238608],
    [13.7947113, 100.3238581],
    [13.7947191, 100.3237669],
    [13.7947191, 100.3237267],
    [13.7947165, 100.3236355],
    [13.7947178, 100.3235858],
  ] satisfies LatLngTuple[]

  const arrayPoint3 = [
    [13.7951053, 100.3228911],
    [13.7951678, 100.3228911],
    [13.7952277, 100.3228911],
    [13.7952277, 100.3229515],
    [13.7952394, 100.3229864],
    [13.7952394, 100.3230534],
    [13.795229, 100.3231111],
    [13.7952355, 100.323205],
    [13.7952342, 100.3232935],
    [13.7952173, 100.3233458],
    [13.795216, 100.3234128],
    [13.7952303, 100.3235013],
    [13.7952303, 100.3235979],
    [13.7952277, 100.3236744],
    [13.7952238, 100.3237441],
    [13.7952173, 100.3238608],
    [13.7951769, 100.3238621],
    [13.7951339, 100.3238527],
    [13.7950857, 100.323838],
    [13.7950388, 100.3238406],
    [13.7949776, 100.323846],
    [13.7949203, 100.3238742],
    [13.7948878, 100.3238621],
    [13.7948435, 100.3238581],
    [13.7947849, 100.323846],
    [13.794721, 100.3238608],
    [13.7947341, 100.3237548],
    [13.7947191, 100.3237267],
    [13.7947173, 100.3236993],
    [13.7947167, 100.3236483],
    [13.7947139, 100.3236006],
    [13.7947056, 100.3235799],
  ] satisfies LatLngTuple[]

  const arrayPoint4 = [
    [13.7951941, 100.3246713],
    [13.7951941, 100.3247464],
    [13.7951941, 100.3247947],
    [13.7951733, 100.3248269],
    [13.7951186, 100.3248269],
    [13.7950509, 100.3248215],
    [13.7949337, 100.3248242],
    [13.7949389, 100.3248778],
    [13.7949363, 100.3249502],
    [13.7949337, 100.3250441],
    [13.7949415, 100.32513],
    [13.7949597, 100.3252211],
    [13.7949753, 100.3252667],
    [13.7949857, 100.3253848],
    [13.7949831, 100.3254384],
  ] satisfies LatLngTuple[]

  return (
    <HomeLayout className="flex w-full" transparent>
      <div className="fixed top-0 left-0 z-0 flex h-screen w-full"></div>
      <MapContainer
        center={position}
        zoom={16}
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
        <Polyline
          positions={arrayPoint}
          pathOptions={{ color: 'black', opacity: 0.2 }}
        />
        <Polyline
          positions={arrayPoint2}
          pathOptions={{ color: 'black', opacity: 0.2 }}
        />
        <Polyline
          positions={arrayPoint3}
          pathOptions={{ color: 'black', opacity: 0.2 }}
        />
        <Polyline
          positions={arrayPoint4}
          pathOptions={{ color: 'black', opacity: 0.2 }}
        />
        <HeatMap
          coords={[
            ...arrayPoint,
            ...arrayPoint2,
            ...arrayPoint3,
            ...arrayPoint4,
          ].map((point) => new LatLng(point[0], point[1]))}
        />
        <CurrentLocationSetter />
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
