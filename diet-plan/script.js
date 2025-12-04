const meals = [
  {
    id: 'b1',
    name: 'Berry Oatmeal Bowl',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1690896306653-6857ac14df1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYXRtZWFsJTIwYnJlYWtmYXN0JTIwYm93bHxlbnwxfHx8fDE3NjQ1MDQyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 320,
    ingredients: [
      '1/2 cup rolled oats',
      '1 cup almond milk',
      '1/2 cup mixed berries',
      '1 tbsp chia seeds',
      '1 tsp honey',
      'Pinch of cinnamon'
    ],
    instructions: [
      'Combine oats and almond milk in a pot',
      'Cook over medium heat for 5-7 minutes, stirring occasionally',
      'Add cinnamon and stir well',
      'Transfer to a bowl',
      'Top with mixed berries, chia seeds, and drizzle with honey',
      'Serve warm'
    ],
    prepTime: '10 min',
    servings: 1,
    nutritionInfo: {
      protein: '8g',
      carbs: '52g',
      fat: '9g',
      fiber: '10g'
    },
    restrictedFor: ['lactose-intolerance'], // Contains dairy-free milk, but if honey is a concern
    benefits: ['High in fiber', 'Heart healthy', 'Rich in antioxidants']
  },
  {
    id: 'b2',
    name: 'Avocado Toast with Eggs',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1676471970358-1cff04452e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBlZ2dzfGVufDF8fHx8MTc2NDU0MjEzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 380,
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '2 eggs',
      'Cherry tomatoes',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)'
    ],
    instructions: [
      'Toast the whole grain bread slices',
      'Mash the avocado with salt and pepper',
      'Poach or fry the eggs to your preference',
      'Spread mashed avocado on toasted bread',
      'Top with eggs and cherry tomatoes',
      'Sprinkle with red pepper flakes if desired',
      'Serve immediately'
    ],
    prepTime: '12 min',
    servings: 1,
    nutritionInfo: {
      protein: '16g',
      carbs: '38g',
      fat: '18g',
      fiber: '12g'
    },
    restrictedFor: ['celiac-disease'],
    benefits: ['High protein', 'Healthy fats', 'Rich in vitamins']
  },
  {
    id: 'b3',
    name: 'Greek Yogurt Parfait',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1618798513386-fedeb5c30d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHlvZ3VydCUyMGJlcnJpZXN8ZW58MXx8fHwxNzY0NTQyMTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 280,
    ingredients: [
      '1 cup Greek yogurt',
      '1/2 cup mixed berries',
      '2 tbsp granola',
      '1 tbsp honey',
      '1 tbsp sliced almonds',
      'Fresh mint for garnish'
    ],
    instructions: [
      'Layer half of the Greek yogurt in a glass or bowl',
      'Add half of the berries on top',
      'Repeat with remaining yogurt and berries',
      'Sprinkle granola and sliced almonds on top',
      'Drizzle with honey',
      'Garnish with fresh mint',
      'Serve chilled'
    ],
    prepTime: '5 min',
    servings: 1,
    nutritionInfo: {
      protein: '20g',
      carbs: '35g',
      fat: '7g',
      fiber: '5g'
    },
    restrictedFor: ['lactose-intolerance'],
    benefits: ['High protein', 'Probiotic rich', 'Calcium rich']
  },
  {
    id: 'b4',
    name: 'Vegetable Omelet',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1637036124319-4fa1881c9ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBvbWVsZXR8ZW58MXx8fHwxNzY0NTQyMTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 240,
    ingredients: [
      '3 eggs',
      '1/4 cup diced bell peppers',
      '1/4 cup diced onions',
      '1/4 cup spinach',
      '2 tbsp low-fat milk',
      'Salt and pepper to taste',
      '1 tsp olive oil'
    ],
    instructions: [
      'Beat eggs with milk, salt, and pepper',
      'Heat olive oil in a non-stick pan',
      'Sauté bell peppers and onions until soft',
      'Add spinach and cook until wilted',
      'Pour egg mixture over vegetables',
      'Cook until edges set, then fold omelet in half',
      'Cook for another minute and serve hot'
    ],
    prepTime: '15 min',
    servings: 1,
    nutritionInfo: {
      protein: '21g',
      carbs: '8g',
      fat: '15g',
      fiber: '2g'
    },
    restrictedFor: [],
    benefits: ['High protein', 'Low carb', 'Vitamin rich']
  },
  {
    id: 'b5',
    name: 'Chia Seed Pudding',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1552528352-59648b345866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlhJTIwcHVkZGluZ3xlbnwxfHx8fDE3NjQ0MjkzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 210,
    ingredients: [
      '3 tbsp chia seeds',
      '1 cup almond milk',
      '1 tsp vanilla extract',
      '1 tsp maple syrup',
      'Fresh berries for topping',
      'Sliced banana'
    ],
    instructions: [
      'Mix chia seeds, almond milk, vanilla, and maple syrup in a jar',
      'Stir well to prevent clumping',
      'Refrigerate for at least 4 hours or overnight',
      'Stir before serving',
      'Top with fresh berries and banana slices',
      'Enjoy cold'
    ],
    prepTime: '4 hours',
    servings: 1,
    nutritionInfo: {
      protein: '6g',
      carbs: '28g',
      fat: '10g',
      fiber: '12g'
    },
    restrictedFor: [],
    benefits: ['Omega-3 rich', 'High fiber', 'Dairy-free']
  },
  {
    id: 'b6',
    name: 'Whole Grain Pancakes',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1565288732336-b705b15584d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aG9sZSUyMGdyYWluJTIwcGFuY2FrZXN8ZW58MXx8fHwxNzY0NTQyMTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 340,
    ingredients: [
      '1 cup whole wheat flour',
      '1 tbsp baking powder',
      '1 cup almond milk',
      '1 egg',
      '2 tbsp honey',
      '1 tsp vanilla extract',
      'Fresh berries for topping'
    ],
    instructions: [
      'Mix flour and baking powder in a bowl',
      'In another bowl, whisk egg, almond milk, honey, and vanilla',
      'Combine wet and dry ingredients',
      'Heat a non-stick pan over medium heat',
      'Pour batter to form pancakes',
      'Cook until bubbles form, then flip',
      'Cook until golden brown',
      'Serve with fresh berries'
    ],
    prepTime: '20 min',
    servings: 2,
    nutritionInfo: {
      protein: '10g',
      carbs: '58g',
      fat: '8g',
      fiber: '6g'
    },
    restrictedFor: ['celiac-disease'],
    benefits: ['Whole grain', 'Energy boosting', 'Heart healthy']
  },

  // LUNCH
  {
    id: 'l1',
    name: 'Quinoa Buddha Bowl',
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1623428188495-89c064ee061a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlub2ElMjBzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzY0NTAxODg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 420,
    ingredients: [
      '1 cup cooked quinoa',
      '1 cup roasted chickpeas',
      '1 cup mixed greens',
      '1/2 avocado, sliced',
      '1/2 cup shredded carrots',
      '2 tbsp tahini dressing',
      'Cherry tomatoes'
    ],
    instructions: [
      'Cook quinoa according to package instructions',
      'Roast chickpeas with olive oil and spices at 400°F for 20 minutes',
      'Arrange mixed greens in a bowl',
      'Add quinoa, chickpeas, avocado, and carrots',
      'Top with cherry tomatoes',
      'Drizzle with tahini dressing',
      'Serve immediately'
    ],
    prepTime: '35 min',
    servings: 1,
    nutritionInfo: {
      protein: '18g',
      carbs: '52g',
      fat: '16g',
      fiber: '14g'
    },
    restrictedFor: [],
    benefits: ['Complete protein', 'High fiber', 'Nutrient dense']
  },
  {
    id: 'l2',
    name: 'Grilled Chicken & Vegetables',
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzY0NDU5ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 385,
    ingredients: [
      '6 oz chicken breast',
      '1 cup broccoli florets',
      '1 cup bell peppers',
      '1 cup zucchini',
      '2 tsp olive oil',
      'Lemon juice',
      'Herbs and spices to taste'
    ],
    instructions: [
      'Season chicken breast with herbs and spices',
      'Grill chicken for 6-7 minutes per side until cooked through',
      'Toss vegetables with olive oil and seasonings',
      'Grill or roast vegetables until tender',
      'Slice chicken and arrange with vegetables',
      'Drizzle with lemon juice',
      'Serve hot'
    ],
    prepTime: '25 min',
    servings: 1,
    nutritionInfo: {
      protein: '42g',
      carbs: '18g',
      fat: '12g',
      fiber: '6g'
    },
    restrictedFor: [],
    benefits: ['High protein', 'Low carb', 'Lean meat']
  },
  {
    id: 'l3',
    name: 'Baked Salmon with Brown Rice',
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1587995631109-2a8588e991da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjByaWNlJTIwYnJvY2NvbGl8ZW58MXx8fHwxNzY0NTQyMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 465,
    ingredients: [
      '6 oz salmon fillet',
      '3/4 cup cooked brown rice',
      '1 cup steamed broccoli',
      '1 tsp olive oil',
      'Lemon wedges',
      'Dill and garlic',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat oven to 400°F',
      'Season salmon with dill, garlic, salt, and pepper',
      'Drizzle with olive oil',
      'Bake for 12-15 minutes until flaky',
      'Cook brown rice according to package',
      'Steam broccoli until tender',
      'Plate salmon with rice and broccoli',
      'Serve with lemon wedges'
    ],
    prepTime: '30 min',
    servings: 1,
    nutritionInfo: {
      protein: '38g',
      carbs: '42g',
      fat: '14g',
      fiber: '5g'
    },
    restrictedFor: [],
    benefits: ['Omega-3 rich', 'Heart healthy', 'Anti-inflammatory']
  },
  {
    id: 'l4',
    name: 'Lentil Soup',
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1591266798549-32fa7cd32f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW50aWwlMjBzb3VwfGVufDF8fHx8MTc2NDU0MjEzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 310,
    ingredients: [
      '1 cup dried lentils',
      '1 diced onion',
      '2 diced carrots',
      '2 celery stalks',
      '3 cups low-sodium vegetable broth',
      '2 cloves garlic',
      'Cumin and turmeric',
      'Salt and pepper'
    ],
    instructions: [
      'Sauté onion, carrots, and celery until soft',
      'Add garlic and cook for 1 minute',
      'Add lentils, broth, cumin, and turmeric',
      'Bring to boil, then reduce heat',
      'Simmer for 25-30 minutes until lentils are tender',
      'Season with salt and pepper',
      'Serve hot with whole grain bread if desired'
    ],
    prepTime: '40 min',
    servings: 2,
    nutritionInfo: {
      protein: '18g',
      carbs: '48g',
      fat: '2g',
      fiber: '16g'
    },
    restrictedFor: [],
    benefits: ['High protein', 'High fiber', 'Low fat']
  },
  {
    id: 'l5',
    name: 'Turkey & Veggie Wrap',
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1763891538128-cdad95beb521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJrZXklMjB3cmFwJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzY0NTQyMTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 350,
    ingredients: [
      '1 whole wheat tortilla',
      '4 oz sliced turkey breast',
      '2 tbsp hummus',
      'Lettuce leaves',
      'Sliced tomatoes',
      'Sliced cucumbers',
      'Shredded carrots'
    ],
    instructions: [
      'Lay tortilla flat on a clean surface',
      'Spread hummus evenly over tortilla',
      'Layer turkey slices in the center',
      'Add lettuce, tomatoes, cucumbers, and carrots',
      'Fold in sides and roll tightly',
      'Cut in half diagonally',
      'Serve immediately or wrap for later'
    ],
    prepTime: '10 min',
    servings: 1,
    nutritionInfo: {
      protein: '32g',
      carbs: '36g',
      fat: '8g',
      fiber: '6g'
    },
    restrictedFor: ['celiac-disease'],
    benefits: ['High protein', 'Low fat', 'Portable meal']
  },
  {
    id: 'l6',
    name: 'Chickpea Curry',
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja3BlYSUyMGN1cnJ5fGVufDF8fHx8MTc2NDU0MjEzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 380,
    ingredients: [
      '1.5 cups cooked chickpeas',
      '1 can diced tomatoes',
      '1 diced onion',
      '2 cloves garlic',
      '1 tbsp curry powder',
      '1/2 cup coconut milk',
      '1 cup spinach',
      'Brown rice for serving'
    ],
    instructions: [
      'Sauté onion and garlic until fragrant',
      'Add curry powder and cook for 1 minute',
      'Add chickpeas and diced tomatoes',
      'Simmer for 15 minutes',
      'Stir in coconut milk and spinach',
      'Cook until spinach wilts',
      'Serve over brown rice'
    ],
    prepTime: '30 min',
    servings: 2,
    nutritionInfo: {
      protein: '14g',
      carbs: '56g',
      fat: '10g',
      fiber: '12g'
    },
    restrictedFor: [],
    benefits: ['Plant-based protein', 'Anti-inflammatory', 'Iron rich']
  },
  {
    id: 'l7',
    name: 'Tofu Stir-Fry',
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1619683548293-c74defe8d5d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2Z1JTIwc3RpciUyMGZyeXxlbnwxfHx8fDE3NjQ1NDIxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 340,
    ingredients: [
      '8 oz firm tofu',
      '2 cups mixed vegetables (broccoli, peppers, snap peas)',
      '2 tbsp low-sodium soy sauce',
      '1 tbsp sesame oil',
      '2 cloves garlic',
      '1 tsp ginger',
      'Sesame seeds for garnish'
    ],
    instructions: [
      'Press tofu to remove excess water, then cube',
      'Heat sesame oil in a wok or large pan',
      'Add tofu and cook until golden',
      'Remove tofu and set aside',
      'Stir-fry garlic and ginger',
      'Add vegetables and cook until tender-crisp',
      'Return tofu to pan, add soy sauce',
      'Toss everything together',
      'Garnish with sesame seeds and serve'
    ],
    prepTime: '25 min',
    servings: 1,
    nutritionInfo: {
      protein: '22g',
      carbs: '24g',
      fat: '16g',
      fiber: '8g'
    },
    restrictedFor: [],
    benefits: ['Plant-based protein', 'Low carb', 'Calcium rich']
  },

  // DINNER
  {
    id: 'd1',
    name: 'Grilled Fish with Asparagus',
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1633524792906-73b111908d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwZmlzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzY0NTE2OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 330,
    ingredients: [
      '6 oz white fish (cod or halibut)',
      '1 bunch asparagus',
      '1/2 cup quinoa',
      '2 tsp olive oil',
      'Lemon juice',
      'Fresh herbs',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat grill to medium-high heat',
      'Season fish with salt, pepper, and herbs',
      'Toss asparagus with olive oil',
      'Grill fish for 4-5 minutes per side',
      'Grill asparagus until tender',
      'Cook quinoa according to package',
      'Plate fish with asparagus and quinoa',
      'Drizzle with lemon juice and serve'
    ],
    prepTime: '25 min',
    servings: 1,
    nutritionInfo: {
      protein: '38g',
      carbs: '28g',
      fat: '8g',
      fiber: '6g'
    },
    restrictedFor: [],
    benefits: ['High protein', 'Low calorie', 'Omega-3 rich']
  },
  {
    id: 'd2',
    name: 'Vegetable Minestrone',
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1643786661490-966f1877effa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBzb3VwfGVufDF8fHx8MTc2NDQ4MzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 280,
    ingredients: [
      '1 can diced tomatoes',
      '1 cup mixed vegetables (carrots, celery, zucchini)',
      '1 cup cannellini beans',
      '1/2 cup whole wheat pasta',
      '4 cups vegetable broth',
      '2 cloves garlic',
      'Italian herbs',
      'Spinach'
    ],
    instructions: [
      'Sauté garlic in a large pot',
      'Add vegetables and cook for 5 minutes',
      'Add tomatoes, broth, and herbs',
      'Bring to a boil',
      'Add pasta and beans',
      'Simmer for 15 minutes',
      'Stir in spinach until wilted',
      'Serve hot with a sprinkle of parmesan if desired'
    ],
    prepTime: '35 min',
    servings: 2,
    nutritionInfo: {
      protein: '12g',
      carbs: '48g',
      fat: '3g',
      fiber: '10g'
    },
    restrictedFor: ['celiac-disease'],
    benefits: ['High fiber', 'Low fat', 'Vegetable rich']
  },
  {
    id: 'd3',
    name: 'Herb-Crusted Chicken Breast',
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzY0NDU5ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 395,
    ingredients: [
      '6 oz chicken breast',
      '1 tbsp fresh herbs (rosemary, thyme)',
      '1 cup roasted Brussels sprouts',
      '1/2 cup sweet potato',
      '2 tsp olive oil',
      'Garlic powder',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat oven to 375°F',
      'Season chicken with herbs, garlic powder, salt, and pepper',
      'Sear chicken in an oven-safe pan for 2 minutes per side',
      'Transfer to oven and bake for 15-18 minutes',
      'Toss Brussels sprouts and sweet potato with olive oil',
      'Roast vegetables at 400°F for 25 minutes',
      'Slice chicken and serve with roasted vegetables'
    ],
    prepTime: '35 min',
    servings: 1,
    nutritionInfo: {
      protein: '42g',
      carbs: '32g',
      fat: '12g',
      fiber: '8g'
    },
    restrictedFor: [],
    benefits: ['High protein', 'Balanced meal', 'Nutrient dense']
  },
  {
    id: 'd4',
    name: 'Baked Cod with Vegetables',
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1633524792906-73b111908d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwZmlzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzY0NTE2OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 310,
    ingredients: [
      '6 oz cod fillet',
      '1 cup cherry tomatoes',
      '1 cup green beans',
      '1/2 cup diced zucchini',
      '2 cloves garlic',
      'Lemon slices',
      'Olive oil and herbs'
    ],
    instructions: [
      'Preheat oven to 400°F',
      'Place cod in a baking dish',
      'Arrange vegetables around the fish',
      'Drizzle with olive oil',
      'Add garlic, herbs, and lemon slices',
      'Bake for 15-18 minutes until fish flakes easily',
      'Serve immediately'
    ],
    prepTime: '25 min',
    servings: 1,
    nutritionInfo: {
      protein: '36g',
      carbs: '16g',
      fat: '10g',
      fiber: '5g'
    },
    restrictedFor: [],
    benefits: ['Low calorie', 'High protein', 'Heart healthy']
  },
  {
    id: 'd5',
    name: 'Turkey Meatballs with Zoodles',
    category: 'dinner',
    image: 'https://images.unsplash.com/photo-1643786661490-966f1877effa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBzb3VwfGVufDF8fHx8MTc2NDQ4MzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 360,
    ingredients: [
      '6 oz ground turkey',
      '2 medium zucchinis (spiralized)',
      '1 cup marinara sauce (low-sodium)',
      '1 egg',
      '1/4 cup breadcrumbs',
      'Italian herbs',
      'Garlic and onion powder'
    ],
    instructions: [
      'Mix ground turkey, egg, breadcrumbs, and seasonings',
      'Form into small meatballs',
      'Bake at 400°F for 20 minutes',
      'Heat marinara sauce in a pan',
      'Add meatballs to sauce and simmer',
      'Sauté zucchini noodles for 2-3 minutes',
      'Serve meatballs over zoodles with sauce'
    ],
    prepTime: '35 min',
    servings: 1,
    nutritionInfo: {
      protein: '38g',
      carbs: '28g',
      fat: '12g',
      fiber: '6g'
    },
    restrictedFor: ['celiac-disease'],
    benefits: ['Low carb', 'High protein', 'Lean meat']
  },

  // SNACKS
  {
    id: 's1',
    name: 'Apple with Almond Butter',
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1726514733355-02fe48ae6795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGFsbW9uZCUyMGJ1dHRlcnxlbnwxfHx8fDE3NjQ1NDIxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 195,
    ingredients: [
      '1 medium apple',
      '2 tbsp almond butter',
      'Cinnamon (optional)'
    ],
    instructions: [
      'Wash and slice the apple',
      'Arrange slices on a plate',
      'Serve with almond butter for dipping',
      'Sprinkle with cinnamon if desired'
    ],
    prepTime: '5 min',
    servings: 1,
    nutritionInfo: {
      protein: '4g',
      carbs: '28g',
      fat: '10g',
      fiber: '6g'
    },
    restrictedFor: [],
    benefits: ['Healthy fats', 'Natural sweetness', 'Energy boost']
  },
  {
    id: 's2',
    name: 'Mixed Nuts & Seeds',
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1621926037410-5c727521e695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG51dHMlMjB0cmFpbCUyMG1peHxlbnwxfHx8fDE3NjQ1NDIxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 180,
    ingredients: [
      '1/4 cup almonds',
      '2 tbsp pumpkin seeds',
      '2 tbsp sunflower seeds',
      '1 tbsp dried cranberries (unsweetened)'
    ],
    instructions: [
      'Mix all ingredients in a small bowl',
      'Portion into serving sizes',
      'Store in an airtight container',
      'Enjoy as a quick snack'
    ],
    prepTime: '2 min',
    servings: 1,
    nutritionInfo: {
      protein: '7g',
      carbs: '12g',
      fat: '14g',
      fiber: '4g'
    },
    restrictedFor: [],
    benefits: ['Healthy fats', 'Protein rich', 'Portable snack']
  },
  {
    id: 's3',
    name: 'Hummus with Veggie Sticks',
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1732216714035-90972b82b6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1tdXMlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc2NDU0MjEzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 150,
    ingredients: [
      '1/4 cup hummus',
      '1 cup carrot sticks',
      '1 cup cucumber slices',
      '1/2 cup bell pepper strips',
      'Cherry tomatoes'
    ],
    instructions: [
      'Wash and cut all vegetables into sticks or slices',
      'Arrange vegetables on a plate',
      'Place hummus in a small bowl',
      'Serve together for dipping'
    ],
    prepTime: '10 min',
    servings: 1,
    nutritionInfo: {
      protein: '6g',
      carbs: '22g',
      fat: '5g',
      fiber: '8g'
    },
    restrictedFor: [],
    benefits: ['Low calorie', 'High fiber', 'Vitamin rich']
  },
  {
    id: 's4',
    name: 'Berry Smoothie',
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1628642550774-56eedbfea57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHNtb290aGllJTIwYm93bHxlbnwxfHx8fDE3NjQ1MDUzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 210,
    ingredients: [
      '1 cup mixed berries',
      '1/2 banana',
      '1 cup almond milk',
      '1 tbsp chia seeds',
      '1 tsp honey (optional)',
      'Ice cubes'
    ],
    instructions: [
      'Add all ingredients to a blender',
      'Blend until smooth',
      'Add ice if desired for thickness',
      'Pour into a glass',
      'Serve immediately'
    ],
    prepTime: '5 min',
    servings: 1,
    nutritionInfo: {
      protein: '5g',
      carbs: '38g',
      fat: '6g',
      fiber: '8g'
    },
    restrictedFor: [],
    benefits: ['Antioxidant rich', 'Refreshing', 'Vitamin packed']
  },
  {
    id: 's5',
    name: 'Green Power Smoothie',
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1610622930110-3c076902312a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllfGVufDF8fHx8MTc2NDUwMjY1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 185,
    ingredients: [
      '1 cup spinach',
      '1/2 banana',
      '1/2 cup pineapple',
      '1 cup coconut water',
      '1 tbsp flax seeds',
      'Ice'
    ],
    instructions: [
      'Add spinach and coconut water to blender first',
      'Add banana, pineapple, and flax seeds',
      'Add ice cubes',
      'Blend until smooth and creamy',
      'Pour into a glass and enjoy'
    ],
    prepTime: '5 min',
    servings: 1,
    nutritionInfo: {
      protein: '4g',
      carbs: '32g',
      fat: '4g',
      fiber: '6g'
    },
    restrictedFor: [],
    benefits: ['Detoxifying', 'Hydrating', 'Nutrient dense']
  },
  {
    id: 's6',
    name: 'Rice Cakes with Avocado',
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1676471970358-1cff04452e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBlZ2dzfGVufDF8fHx8MTc2NDU0MjEzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 165,
    ingredients: [
      '2 brown rice cakes',
      '1/4 avocado',
      'Cherry tomatoes',
      'Red pepper flakes',
      'Sea salt',
      'Lemon juice'
    ],
    instructions: [
      'Mash avocado with lemon juice and salt',
      'Spread avocado on rice cakes',
      'Top with sliced cherry tomatoes',
      'Sprinkle with red pepper flakes',
      'Serve immediately'
    ],
    prepTime: '5 min',
    servings: 1,
    nutritionInfo: {
      protein: '4g',
      carbs: '20g',
      fat: '8g',
      fiber: '4g'
    },
    restrictedFor: [],
    benefits: ['Healthy fats', 'Low calorie', 'Gluten-free']
  },
  {
    id: 's7',
    name: 'Cottage Cheese & Berries',
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1618798513386-fedeb5c30d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHlvZ3VydCUyMGJlcnJpZXN8ZW58MXx8fHwxNzY0NTQyMTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 160,
    ingredients: [
      '1/2 cup low-fat cottage cheese',
      '1/2 cup mixed berries',
      '1 tsp honey',
      'Mint leaves for garnish'
    ],
    instructions: [
      'Place cottage cheese in a bowl',
      'Top with fresh berries',
      'Drizzle with honey',
      'Garnish with mint',
      'Enjoy immediately'
    ],
    prepTime: '3 min',
    servings: 1,
    nutritionInfo: {
      protein: '14g',
      carbs: '18g',
      fat: '3g',
      fiber: '3g'
    },
    restrictedFor: ['lactose-intolerance'],
    benefits: ['High protein', 'Low fat', 'Probiotic rich']
  },
  {
    id: 's8',
    name: 'Dark Chocolate & Almonds',
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1621926037410-5c727521e695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG51dHMlMjB0cmFpbCUyMG1peHxlbnwxfHx8fDE3NjQ1NDIxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    calories: 190,
    ingredients: [
      '1 oz dark chocolate (70% cocoa)',
      '12 almonds'
    ],
    instructions: [
      'Break dark chocolate into small pieces',
      'Pair with almonds',
      'Enjoy slowly as a treat'
    ],
    prepTime: '2 min',
    servings: 1,
    nutritionInfo: {
      protein: '4g',
      carbs: '16g',
      fat: '14g',
      fiber: '3g'
    },
    restrictedFor: ['diabetes'],
    benefits: ['Antioxidant rich', 'Heart healthy', 'Satisfying sweet treat']
  }
];

function displayMeals(mealList) {
    const container = document.querySelector(".meal-cards-container");
    container.innerHTML = ""; // clear previous content

    mealList.forEach(meal => {
        const card = document.createElement("div");
        card.classList.add("meal-card");

        card.innerHTML = `
            <div class="card-header">
                <div class="card-badges">
                    <div class="calorie-badge">🔥 ${meal.calories} kcal</div>
                    <div class="category-badge">${meal.category}</div>
                </div>
                <h3>${meal.name}</h3>
                <span>${meal.prepTime}   |   ${meal.servings} serving</span>
            </div>
            <img class="food-images" src="${meal.image}" alt="${meal.name}" />
            <div class="nutrition-info">
                <div class="proteins"><strong>Proteins: </strong>${meal.nutritionInfo.protein}</div>
                <div class="fiber"><strong>Fiber: </strong>${meal.nutritionInfo.fiber}</div>
            </div>
        `;

        // Open modal on click
        card.addEventListener("click", () => openModal(meal));

        container.appendChild(card);
    });
}

function openModal(meal) {
    const modal = document.querySelector(".modal-pop-up");
    modal.style.display = "flex";

    modal.innerHTML = `
        <div class="modal-content">
            <img class="modal-image" src="${meal.image}" alt="${meal.name}" />
            
            <div class="modal-header">
                <div class="modal-badge">🔥 ${meal.calories} kcal</div>
            </div>

            <h2>${meal.name}</h2>

            <div class="modal-meta">
                <div class="meta-item">
                    <span class="icon">⏱️</span>
                    <span>${meal.prepTime}</span>
                </div>
                <div class="meta-item">
                    <span class="icon">👥</span>
                    <span>${meal.servings} serving${meal.servings > 1 ? 's' : ''}</span>
                </div>
            </div>

            <div class="nutrition-section">
                <h3>Nutrition Information</h3>
                <div class="nutrition-grid">
                    <div class="nutrition-item">
                        <span class="nutrition-label">Protein</span>
                        <span class="nutrition-value">${meal.nutritionInfo.protein}</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">Carbs</span>
                        <span class="nutrition-value">${meal.nutritionInfo.carbs}</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">Fat</span>
                        <span class="nutrition-value">${meal.nutritionInfo.fat}</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">Fiber</span>
                        <span class="nutrition-value">${meal.nutritionInfo.fiber}</span>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3>Health Benefits</h3>
                <div class="benefits-list">
                    ${meal.benefits.map(benefit => `<span class="benefit-tag">✓ ${benefit}</span>`).join("")}
                </div>
            </div>

            <div class="modal-section">
                <h3>Ingredients</h3>
                <ul class="ingredients-list">
                    ${meal.ingredients.map(item => `<li>${item}</li>`).join("")}
                </ul>
            </div>

            <div class="modal-section">
                <h3>Instructions</h3>
                <ol class="instructions-list">
                    ${meal.instructions.map(instruction => `<li>${instruction}</li>`).join("")}
                </ol>
            </div>

            <button class="close-modal">Close Recipe</button>
        </div>
    `;

    document.querySelector(".close-modal").addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", event => {
        if (event.target === modal) modal.style.display = "none";
    });
}


// Chatbot functionality - Smart Pattern Matching (No API needed!)
const chatToggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");
const chatClose = document.getElementById("chat-close");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");
const chatMessages = document.getElementById("chat-messages");

chatToggle.addEventListener("click", () => {
    chatContainer.classList.add("open");
    chatToggle.classList.add("active");
    chatInput.focus();
});

chatClose.addEventListener("click", () => {
    chatContainer.classList.remove("open");
    chatToggle.classList.remove("active");
});

chatSend.addEventListener("click", () => {
    sendMessage();
});

chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Smart nutrition chatbot responses
function getSmartResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Greeting patterns
    if (/(hi|hello|hey|greetings)/i.test(lowerMessage)) {
        return "Hello! 👋 I'm your nutrition assistant. I can help you find meals, answer nutrition questions, or provide dietary advice. What would you like to know?";
    }
    
    // Breakfast queries
    if (/breakfast/i.test(lowerMessage)) {
        const breakfastMeals = meals.filter(m => m.category === 'breakfast');
        const suggestions = breakfastMeals.slice(0, 3).map(m => m.name).join(", ");
        return `Great breakfast options include: ${suggestions}. All are nutrient-dense and energizing! Would you like to know more about any specific meal?`;
    }
    
    // Lunch queries
    if (/lunch/i.test(lowerMessage)) {
        const lunchMeals = meals.filter(m => m.category === 'lunch');
        const suggestions = lunchMeals.slice(0, 3).map(m => m.name).join(", ");
        return `For lunch, I recommend: ${suggestions}. These meals are balanced and satisfying. Click on any meal card to see full details!`;
    }
    
    // Dinner queries
    if (/dinner/i.test(lowerMessage)) {
        const dinnerMeals = meals.filter(m => m.category === 'dinner');
        const suggestions = dinnerMeals.slice(0, 3).map(m => m.name).join(", ");
        return `Delicious dinner options: ${suggestions}. All are healthy and easy to prepare. Want to see the recipes?`;
    }
    
    // Snack queries
    if (/snack/i.test(lowerMessage)) {
        return "Healthy snacks include: Apple with Almond Butter, Mixed Nuts & Seeds, Hummus with Veggie Sticks, and Berry Smoothie. All under 200 calories!";
    }
    
    // Protein queries
    if (/protein|high protein/i.test(lowerMessage)) {
        const highProtein = meals.filter(m => parseInt(m.nutritionInfo.protein) > 30);
        const suggestions = highProtein.slice(0, 3).map(m => `${m.name} (${m.nutritionInfo.protein})`).join(", ");
        return `High protein meals: ${suggestions}. These are perfect for muscle building and recovery!`;
    }
    
    // Calorie queries
    if (/calorie|calories|low calorie/i.test(lowerMessage)) {
        const lowCal = meals.filter(m => m.calories < 300).slice(0, 3);
        const suggestions = lowCal.map(m => `${m.name} (${m.calories} cal)`).join(", ");
        return `Low calorie options: ${suggestions}. Great for weight management!`;
    }
    
    // Vegetarian/Vegan queries
    if (/vegetarian|vegan|plant.based/i.test(lowerMessage)) {
        return "Plant-based options: Quinoa Buddha Bowl, Chickpea Curry, Tofu Stir-Fry, Lentil Soup, and Chia Seed Pudding. All are nutritious and delicious!";
    }
    
    // Gluten-free queries
    if (/gluten|celiac/i.test(lowerMessage)) {
        return "Use the 'Celiac Disease' filter at the top to see gluten-free meals! Options include: Quinoa Buddha Bowl, Grilled Chicken & Vegetables, Salmon with Brown Rice, and many more.";
    }
    
    // Lactose-free queries
    if (/lactose|dairy/i.test(lowerMessage)) {
        return "Select 'Lactose Intolerance' in the health conditions filter to see dairy-free options. Most of our meals use almond milk or are naturally dairy-free!";
    }
    
    // Weight loss queries
    if (/weight loss|lose weight|diet/i.test(lowerMessage)) {
        return "For weight loss, focus on meals under 400 calories with high protein and fiber. Try: Grilled Fish with Asparagus (330 cal), Vegetable Omelet (240 cal), or Tofu Stir-Fry (340 cal).";
    }
    
    // Muscle building queries
    if (/muscle|gain|bodybuilding/i.test(lowerMessage)) {
        return "For muscle building, aim for 30-40g protein per meal. Best options: Herb-Crusted Chicken (42g protein), Grilled Chicken & Vegetables (42g protein), Baked Salmon (38g protein).";
    }
    
    // Fiber queries
    if (/fiber/i.test(lowerMessage)) {
        return "High fiber meals (10g+): Berry Oatmeal Bowl, Avocado Toast with Eggs, Quinoa Buddha Bowl, and Lentil Soup. Fiber aids digestion and keeps you full!";
    }
    
    // Quick meal queries
    if (/quick|fast|easy/i.test(lowerMessage)) {
        return "Quick meals (under 15 min): Greek Yogurt Parfait (5 min), Avocado Toast (12 min), Turkey & Veggie Wrap (10 min), and most snacks!";
    }
    
    // Diabetes queries
    if (/diabetes|diabetic|blood sugar/i.test(lowerMessage)) {
        return "For diabetes, avoid high sugar options. Use the diabetes filter at the top. Focus on: Grilled Chicken & Vegetables, Baked Salmon, Vegetable Omelet - all low in simple carbs.";
    }
    
    // Recipe queries
    if (/recipe|how to make|cook/i.test(lowerMessage)) {
        return "Click on any meal card to see the complete recipe with ingredients and step-by-step instructions! All recipes are easy to follow.";
    }
    
    // Nutrition info queries
    if (/nutrition|nutrients|macros/i.test(lowerMessage)) {
        return "Every meal shows complete nutrition info: protein, carbs, fat, and fiber. Click on any meal card to see detailed nutritional breakdown!";
    }
    
    // Help queries
    if (/help|what can you do/i.test(lowerMessage)) {
        return "I can help you with:\n• Find meals by category (breakfast, lunch, dinner, snacks)\n• Search by dietary needs (high protein, low calorie, gluten-free)\n• Filter by health conditions\n• Get nutrition advice\n• View recipes and instructions\n\nJust ask me anything!";
    }
    
    // Default response with suggestions
    return "I'm here to help with meal planning! Try asking:\n• 'Show me high protein meals'\n• 'What's good for breakfast?'\n• 'I need low calorie options'\n• 'What snacks do you have?'\n• 'Show me vegetarian meals'";
}

function sendMessage() {
    const message = chatInput.value.trim();
    
    if (message === "") return;
    
    // Add user message to chat
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("chat-message", "user");
    userMessageDiv.innerHTML = `<p>${escapeHtml(message)}</p>`;
    chatMessages.appendChild(userMessageDiv);
    
    // Clear input
    chatInput.value = "";
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Show typing indicator
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("chat-message", "bot");
    typingDiv.innerHTML = `<p>Typing...</p>`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Simulate thinking delay for natural feel
    setTimeout(() => {
        // Remove typing indicator
        typingDiv.remove();
        
        // Get smart response
        const botResponse = getSmartResponse(message);
        
        // Add bot message to chat
        const botMessageDiv = document.createElement("div");
        botMessageDiv.classList.add("chat-message", "bot");
        botMessageDiv.innerHTML = `<p>${escapeHtml(botResponse)}</p>`;
        chatMessages.appendChild(botMessageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 600);
}

// Sanitize user input to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
// display all meals on initial load
displayMeals(meals);

// Toggle accordion for health conditions filter
const filterToggle = document.querySelector(".filter-toggle");
const healthConditionsChecklist = document.querySelector(".health-conditions-checklist");

filterToggle.addEventListener("click", () => {
    filterToggle.classList.toggle("active");
    healthConditionsChecklist.classList.toggle("open");
});

// Filter buttons functionality
const filterButtons = document.querySelectorAll(".filter-btn");
let activeCategory = "all";

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        
        // Add active class to clicked button
        button.classList.add("active");
        
        // Get the filter value
        activeCategory = button.getAttribute("data-filter");
        
        // Apply filters
        applyAllFilters();
    });
});

// Health conditions checklist functionality
const healthCheckboxes = document.querySelectorAll(".health-conditions-checklist input[type='checkbox']");

healthCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        applyAllFilters();
    });
});

function applyAllFilters() {
    // Get selected health conditions
    const selectedConditions = Array.from(healthCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    // Filter meals
    let filteredMeals = meals;
    
    // Filter by category
    if (activeCategory !== "all") {
        filteredMeals = filteredMeals.filter(meal => meal.category === activeCategory);
    }
    
    // Filter by health conditions (only show meals NOT restricted for selected conditions)
    if (selectedConditions.length > 0) {
        filteredMeals = filteredMeals.filter(meal => {
            // If a meal is restricted for any of the selected conditions, exclude it
            return !selectedConditions.some(condition => meal.restrictedFor.includes(condition));
        });
    }
    
    // Display filtered meals
    displayMeals(filteredMeals);
}