import { CapacitorConfig } from '@capacitor/cli'

let config: CapacitorConfig

const baseConfig: CapacitorConfig = {
  appId: 'com.nakama.wheelgo',
  appName: 'Wheel Go',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
  },
}

switch (process.env.NODE_ENV) {
  case 'development':
    config = {
      ...baseConfig,
      server: {
        url: 'http://127.0.0.1:8100/',
      },
    }
    break
  default:
    config = {
      ...baseConfig,
    }
    break
}

export default config
