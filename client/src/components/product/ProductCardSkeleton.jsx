function ProductCardSkeleton() {
  return (
    <div className="hh-card animate-pulse p-5">
      <div className="aspect-square rounded-2xl bg-white/5" />
      <div className="mt-5 h-3 w-20 rounded bg-white/5" />
      <div className="mt-3 h-5 w-2/3 rounded bg-white/5" />
      <div className="mt-3 h-4 w-full rounded bg-white/5" />
      <div className="mt-2 h-4 w-4/5 rounded bg-white/5" />
    </div>
  )
}

export function ProductGridSkeleton({ count = 3 }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }, (_, index) => <ProductCardSkeleton key={index} />)}
    </div>
  )
}

export default ProductCardSkeleton
