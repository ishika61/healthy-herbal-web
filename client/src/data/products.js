export const productCategories = ['All', 'Weight Loss', 'Hair Care']

const gallery = (image) => [
  { label: 'Product view', image },
  { label: 'Product view', image },
  { label: 'Product view', image },
]

export const products = [
  {
    id: 'ashwagandha-powder', name: 'Nutra Onion Hair Oil', slug: 'ashwagandha-powder', category: 'Hair Care', price: 349, createdAt: '2026-06-15', shortDescription: 'Nourishing onion hair oil for a complete care ritual.', description: 'A botanical onion hair oil crafted to support a nourishing hair-care routine.', ingredients: ['Onion extract', 'Coconut oil', 'Aloe vera'], benefits: ['Supports a nourishing hair-care ritual', 'Lightweight daily application', 'Botanical care'], howToUse: 'Apply to the scalp and hair, massage gently, then wash as desired.', certifications: ['Herbal care', 'No added preservatives', 'Vegetarian'], image: '/nutra-onion-hair-oil.jpg', gallery: gallery('/nutra-onion-hair-oil.jpg'), inStock: true,
  },
  {
    id: 'calming-herbal-tea', name: 'Biotin Hair Capsules', slug: 'calming-herbal-tea', category: 'Hair Care', price: 299, createdAt: '2026-06-20', shortDescription: 'A biotin capsule supplement for your hair-care routine.', description: 'Biotin capsules designed as an easy addition to a considered hair-care routine.', ingredients: ['Biotin', 'Herbal blend'], benefits: ['Convenient capsule format', 'Easy daily routine', 'Hair-care support'], howToUse: 'Take as directed on the product label with water.', certifications: ['Vegetarian', 'Daily supplement', 'Herbal care'], image: '/biotin-hair-capsules.jpg', gallery: gallery('/biotin-hair-capsules.jpg'), inStock: true,
  },
  {
    id: 'neem-face-pack', name: 'Nutra Shampoo', slug: 'neem-face-pack', category: 'Hair Care', price: 249, createdAt: '2026-05-30', shortDescription: 'A botanical shampoo for a simple cleansing ritual.', description: 'Nutra Shampoo combines familiar botanical ingredients for an everyday hair-care routine.', ingredients: ['Aloe vera', 'Neem', 'Amla', 'Brahmi'], benefits: ['Cleanses hair', 'Supports a soft, shiny finish', 'Botanical care'], howToUse: 'Apply to wet hair, massage into a lather, then rinse thoroughly.', certifications: ['Herbal care', 'No parabens', 'Cruelty free'], image: '/nutra-shampoo.png', gallery: gallery('/nutra-shampoo.png'), inStock: true,
  },
  {
    id: 'triphala-tablets', name: 'Keto Capsules', slug: 'triphala-tablets', category: 'Weight Loss', price: 399, createdAt: '2026-07-01', shortDescription: 'Keto capsules for an active wellness routine.', description: 'Keto Capsules in a convenient daily supplement format for mindful, active routines.', ingredients: ['Herbal blend', 'Vegetarian capsule shell'], benefits: ['Convenient daily format', 'Supports active routines', 'Easy wellness companion'], howToUse: 'Take as directed on the product label with water.', certifications: ['Vegetarian', 'Daily supplement', 'No artificial colours'], image: '/keto-capsules.png', gallery: gallery('/keto-capsules.png'), inStock: true,
  },
  {
    id: 'moringa-capsules', name: 'Nutra Natural Weight Management Capsules', slug: 'moringa-capsules', category: 'Weight Loss', price: 429, createdAt: '2026-07-10', shortDescription: 'Weight-management capsules for an active routine.', description: 'Nutra Natural Weight Management Capsules are a convenient addition to mindful daily routines.', ingredients: ['Ginger', 'Herbal blend', 'Vegetarian capsule shell'], benefits: ['Supports mindful routines', 'Convenient capsule format', 'Easy daily use'], howToUse: 'Take as directed on the product label with water after a meal.', certifications: ['Vegetarian', 'No added preservatives', 'Plant based'], image: '/nutra-natural-weight-management.png', gallery: gallery('/nutra-natural-weight-management.png'), inStock: true,
  },
  {
    id: 'slim-herbal-infusion', name: 'Slim Herbal Infusion', slug: 'slim-herbal-infusion', category: 'Weight Loss', price: 329, createdAt: '2026-07-18', shortDescription: 'A refreshing herbal infusion for mindful routines.', description: 'A refreshing herbal infusion selected to complement mindful, active routines.', ingredients: ['Herbal blend', 'Green tea', 'Ginger'], benefits: ['Refreshing daily infusion', 'Complements active lifestyles', 'Enjoy hot or cold'], howToUse: 'Take as directed on the product label with water.', certifications: ['No added sugar', 'Vegetarian', 'Plant based'], image: '/slim-herbal-infusion.png', gallery: gallery('/slim-herbal-infusion.png'), inStock: true,
  },
]

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug)
