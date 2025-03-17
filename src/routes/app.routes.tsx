import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'
import { Stats } from '@/screens/Stats'
import { Feedback } from '@/screens/Feedback'

import { NewMeal } from '@/screens/Meal/New'
import { EditMeal } from '@/screens/Meal/Edit'
import { DetailMeal } from '@/screens/Meal/Detail'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen
        name="stats"
        component={Stats}
        options={{ animation: 'fade_from_bottom' }}
      />

      <Screen name="newMeal" component={NewMeal} />
      <Screen name="editMeal" component={EditMeal} />
      <Screen name="detailMeal" component={DetailMeal} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  )
}
