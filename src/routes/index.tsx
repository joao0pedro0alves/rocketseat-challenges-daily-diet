import { View } from 'react-native'

import theme from '@/theme'
// import { NewMeal } from '@/screens/NewMeal'
import { Feedback } from '@/screens/Feedback'

export function AppRoutes() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_700 }}>
      <Feedback />
    </View>
  )
}
