import { useState } from 'react'
import Icon from '../common/Icon'

const galleryIcons = ['droplet', 'sprout', 'sparkle', 'leaf']

function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = product.gallery[activeIndex]
  const imageSource = activeImage?.image || product.image

  return (
    <div>
      <div className="hh-frame relative flex aspect-square flex-col items-center justify-center gap-3 p-8 text-center">
        {imageSource ? (
          <img src={imageSource} alt={product.name} className="relative size-full object-contain" />
        ) : (
          <>
            <span aria-hidden="true" className="hh-glow hh-pulse-glow absolute left-1/2 top-1/2 size-2/3 -translate-x-1/2 -translate-y-1/2 opacity-50" />
            <span className="absolute left-4 top-4 rounded-full border border-white/12 bg-black-950/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300 backdrop-blur">
              Product Collection
            </span>
            <span className="relative flex size-16 items-center justify-center rounded-full border border-white/12 bg-white/5 text-emerald-300 backdrop-blur">
              <Icon name={galleryIcons[activeIndex % galleryIcons.length]} className="size-7" />
            </span>
            <p className="relative text-lg font-bold uppercase tracking-[0.18em] text-mist-300">{activeImage.label}</p>
          </>
        )}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {product.gallery.map((image, index) => (
          <button
            key={image.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`hh-glass flex aspect-square flex-col items-center justify-center gap-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors ${
              index === activeIndex ? 'border-emerald-400/60 text-emerald-300' : 'text-mist-500 hover:border-white/20'
            }`}
          >
            {image.image || product.image ? <img src={image.image || product.image} alt={`${product.name} ${image.label}`} className="size-full object-contain" /> : <><Icon name={galleryIcons[index % galleryIcons.length]} className="size-4" />{image.label}</>}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
