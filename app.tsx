import { useEffect } from 'react'
import { Platform } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { StatusBar } from 'expo-status-bar'
import * as NavigationBar from 'expo-navigation-bar'
import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito'
import { ThemeProvider } from 'styled-components'

import { Home } from '@/screens/Home'
import { Loading } from '@/components/Loading'
import theme from '@/theme'

export function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  })

  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync(theme.COLORS.GRAY_100)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent />

      <SafeAreaProvider>
        {fontsLoaded ? <Home /> : <Loading />}
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
