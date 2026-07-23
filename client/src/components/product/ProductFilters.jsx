import Icon from '../common/Icon'

function ProductFilters({ searchTerm, onSearchChange, selectedCategory, onCategoryChange, categories, sortBy, onSortChange, availability, onAvailabilityChange }) {
  return (
    <div className="hh-card grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-4">
      <label className="relative flex items-center">
        <span className="sr-only">Search products</span>
        <Icon name="sparkle" className="pointer-events-none absolute left-3.5 size-4 text-mist-700" />
        <input
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          className="hh-field pl-10"
          placeholder="Search products"
        />
      </label>
      <label>
        <span className="sr-only">Filter by category</span>
        <select value={selectedCategory} onChange={(event) => onCategoryChange(event.target.value)} className="hh-field">
          {categories.map((category) => <option key={category}>{category}</option>)}
        </select>
      </label>
      <label>
        <span className="sr-only">Sort products</span>
        <select value={sortBy} onChange={(event) => onSortChange(event.target.value)} className="hh-field">
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </label>
      <label>
        <span className="sr-only">Filter by availability</span>
        <select value={availability} onChange={(event) => onAvailabilityChange(event.target.value)} className="hh-field">
          <option value="all">All availability</option>
          <option value="in-stock">In stock</option>
        </select>
      </label>
    </div>
  )
}

export default ProductFilters
