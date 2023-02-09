import { Geolocation } from '@capacitor/geolocation'
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type GeolocationContext = {
  geolocation: [number, number]
}

const defaultGeolocationContext: GeolocationContext = {
  geolocation: [13.794459, 100.322014],
}

export const geolocationContext = createContext<GeolocationContext>(
  defaultGeolocationContext
)
export const useGeolocation = () => useContext(geolocationContext)

const useGeolocationProvider = () => {
  const [geolocation, setGeolocation] = useState<[number, number]>([
    13.794459, 100.322014,
  ])

  useEffect(() => {
    Geolocation.watchPosition({ enableHighAccuracy: true }, (position, err) => {
      if (err) {
        console.error(err)
        return
      }

      if (!position) {
        return
      }

      setGeolocation([position.coords.latitude, position.coords.longitude])
    })
  })

  return {
    geolocation,
  }
}

export const GeolocationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const geolocation = useGeolocationProvider()
  return (
    <geolocationContext.Provider value={geolocation}>
      {children}
    </geolocationContext.Provider>
  )
}
