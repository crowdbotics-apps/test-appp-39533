import { StyleSheet } from "react-native"
const duration = null
const onDurationEnd = null
const hide = () => SplashScreen.hide()
const show = () => SplashScreen.show()

export const globalOptions = {
  name: "test-appp-39533",
  url: "https://test-appp-39533.botics.co",
  api: "https://test-appp-39533.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": {
    copy: "Routes available!"
  },
  "@modules/splash": {
    duration: duration,
    onDurationEnd: onDurationEnd,
    hide: hide,
    show: show
  }
}
