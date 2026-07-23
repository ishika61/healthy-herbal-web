import { useState } from 'react'
import EmptyState from '../components/common/EmptyState'
import ErrorState from '../components/common/ErrorState'
import Seo from '../components/common/Seo'
import PageHero from '../components/common/PageHero'
import ProductCard from '../components/product/ProductCard'
import { ProductGridSkeleton } from '../components/product/ProductCardSkeleton'
import ProductFilters from '../components/product/ProductFilters'
import Reveal from '../components/common/Reveal'
import { productCategories } from '../data/products'
import { useDebouncedValue } from '../hooks/useDebouncedValue'
import { useProducts } from '../hooks/useProducts'

function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('newest')
  const [availability, setAvailability] = useState('all')
  const debouncedSearch = useDebouncedValue(searchTerm)
  const apiSort = { newest: 'newest', 'price-low': 'price_asc', 'price-high': 'price_desc' }[sortBy]
  const { products, loading, error } = useProducts({
    category: selectedCategory,
    search: debouncedSearch,
    sort: apiSort,
    inStock: availability === 'in-stock' ? 'true' : undefined,
  })

  return (
    <>
      <Seo title="Products" description="Explore Healthy Herbal's thoughtfully selected herbal wellness essentials." />
      <PageHero title="Herbal essentials" description="Explore plant-led essentials made for mindful daily rituals." />

      <section className="hh-container py-12 sm:py-16">
        <Reveal>
          <ProductFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={productCategories}
            sortBy={sortBy}
            onSortChange={setSortBy}
            availability={availability}
            onAvailabilityChange={setAvailability}
          />
        </Reveal>

        {loading ? (
          <ProductGridSkeleton count={6} />
        ) : error ? (
          <div className="mt-8"><ErrorState title="Products are unavailable" message={error} /></div>
        ) : (
          <>
            <p className="mt-8 text-sm text-mist-500">Showing {products.length} products</p>
            {products.length ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <Reveal key={product.id} delay={(index % 3) * 80}>
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="mt-6">
                <EmptyState title="No products found" description="Try clearing your search or choosing another filter." actionLabel="Browse all products" />
              </div>
            )}
          </>
        )}
      </section>
    </>
  )
}

export default Products
