import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { useTheme } from 'styled-components'
import { AppRoutes } from './app.routes'
import { DietContextProvider } from '@/context/diet/provider'

export function Routes() {
  const theme = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_700 }}>
      <NavigationContainer>
        <DietContextProvider>
          <AppRoutes />
        </DietContextProvider>
      </NavigationContainer>
    </View>
  )
}
