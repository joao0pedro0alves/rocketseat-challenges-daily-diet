import { View } from 'react-native'

import theme from '@/theme'
import { Stats } from '@/screens/Stats'

export function AppRoutes() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_700 }}>
      <Stats />
    </View>
  )
}
