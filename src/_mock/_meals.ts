export interface MealDTO {
  id: string
  name: string
  description: string
  date: string
  time: string
  belongsToDiet: boolean
}

export const _mockMeals: MealDTO[] = [
  {
    id: '1',
    name: 'Breakfast',
    description: 'Scrambled eggs with toast and orange juice.',
    date: '2025-03-14',
    time: '08:00',
    belongsToDiet: true,
  },
  {
    id: '2',
    name: 'Lunch',
    description: 'Grilled chicken salad with vinaigrette.',
    date: '2025-03-14',
    time: '12:00',
    belongsToDiet: true,
  },
  {
    id: '3',
    name: 'Dinner',
    description: 'Baked salmon with quinoa and steamed broccoli.',
    date: '2025-03-14',
    time: '18:30',
    belongsToDiet: false,
  },
  {
    id: '4',
    name: 'Snack',
    description: 'Greek yogurt with honey and almonds.',
    date: '2025-03-14',
    time: '10:30',
    belongsToDiet: true,
  },
  {
    id: '5',
    name: 'Late Night Snack',
    description: 'Apple slices with peanut butter.',
    date: '2025-03-14',
    time: '22:00',
    belongsToDiet: false,
  },
  {
    id: '6',
    name: 'Breakfast',
    description: 'Oatmeal with blueberries and chia seeds.',
    date: '2025-03-15',
    time: '07:30',
    belongsToDiet: true,
  },
  {
    id: '7',
    name: 'Lunch',
    description: 'Vegetarian wrap with hummus and mixed greens.',
    date: '2025-03-15',
    time: '12:00',
    belongsToDiet: true,
  },
  {
    id: '8',
    name: 'Dinner',
    description: 'Grilled steak with mashed potatoes and asparagus.',
    date: '2025-03-15',
    time: '19:00',
    belongsToDiet: false,
  },
  {
    id: '9',
    name: 'Snack',
    description: 'Carrot sticks with ranch dip.',
    date: '2025-03-15',
    time: '15:00',
    belongsToDiet: true,
  },
  {
    id: '10',
    name: 'Late Night Snack',
    description: 'Protein shake with banana and almond milk.',
    date: '2025-03-15',
    time: '22:30',
    belongsToDiet: true,
  },
]
