import Icon from './Icon'

// Every one of these frames is a drop-in slot: swap the future <img>
// in without touching layout, spacing, or the surrounding markup.
const presets = {
  'hero-product': { icon: 'droplet', tag: 'Hero Product' },
  'herbal-ingredients': { icon: 'sprout', tag: 'Herbal Ingredients' },
  'lifestyle-wellness': { icon: 'heart', tag: 'Lifestyle Wellness' },
  'product-collection': { icon: 'leaf', tag: 'Product Collection' },
  'customer-testimonial': { icon: 'user', tag: 'Customer Testimonial' },
  founder: { icon: 'user', tag: 'Founder Photo' },
  map: { icon: 'droplet', tag: 'Map' },
}

function ImagePlaceholder({ variant = 'product-collection', label, sublabel, aspect = 'aspect-square', className = '', iconClassName = 'size-7', src, alt = '', imageFit }) {
  const preset = presets[variant] || presets['product-collection']
  return (
    <div className={`hh-frame flex ${aspect} flex-col items-center justify-center gap-3 p-6 text-center ${className}`}>
      {src && <img src={src} alt={alt} className={`absolute inset-0 size-full ${imageFit || (variant === 'map' ? 'object-cover' : 'object-contain')}`} />}
      {!src && <>
      <span aria-hidden="true" className="hh-glow absolute left-1/2 top-1/2 size-2/3 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <span className="absolute left-4 top-4 rounded-full border border-white/12 bg-black-950/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300 backdrop-blur">
        {preset.tag}
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-full border border-white/12 bg-white/5 text-mist-300 backdrop-blur">
        <Icon name={preset.icon} className={iconClassName} />
      </span>
      <p className="relative text-sm font-bold text-mist-300">{label || preset.tag}</p>
      {sublabel && <p className="relative max-w-[16rem] text-xs leading-5 text-mist-700">{sublabel}</p>}
      </>}
    </div>
  )
}

export default ImagePlaceholder
