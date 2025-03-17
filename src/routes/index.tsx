import { View } from 'react-native'

import theme from '@/theme'

import { Home } from '@/screens/Home'

export function AppRoutes() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_700 }}>
      <Home />
    </View>
  )
}
