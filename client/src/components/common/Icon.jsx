// A small, consistent line-icon set — hand-picked for an herbal/apothecary
// register instead of a generic icon-font grab-bag. All icons share the
// same stroke weight and cap style so the site reads as one system.
const paths = {
  leaf: 'M20 4c.7 7-2 12-6 15-3 2-7 2-9 0 3-9 8-13 15-15Zm-15 15c-1-4 0-8 3-11',
  sprout: 'M12 21V11m0 0c0-4-3-6-7-6 0 4 2 7 7 7Zm0 0c0-4 3-6 7-6 0 4-2 7-7 7Z',
  shield: 'M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6Zm-3.2 8.2 2 2 4.4-4.4',
  truck: 'M3 7h11v8H3zm11 3h4l3 3v2h-7zM6.5 20a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Zm11 0a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z',
  droplet: 'M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z',
  sparkle: 'M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Zm7 10 .8 2.6L22 16l-2.2.7L19 19l-.8-2.3L16 16l2.2-.7L19 13Z',
  heart: 'M12 20s-7-4.5-9.3-9C1.2 7.8 3 5 6 5c2 0 3.3 1.1 4 2.3C10.7 6.1 12 5 14 5c3 0 4.8 2.8 3.3 6-2.3 4.5-9.3 9-9.3 9Z',
  heartFilled: 'M12 20s-7-4.5-9.3-9C1.2 7.8 3 5 6 5c2 0 3.3 1.1 4 2.3C10.7 6.1 12 5 14 5c3 0 4.8 2.8 3.3 6-2.3 4.5-9.3 9-9.3 9Z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9c.8-4.5 3.8-7 8-7s7.2 2.5 8 7',
  cart: 'M3 4h2.2l1 11.2A2 2 0 0 0 8.2 17H18a2 2 0 0 0 2-1.7l1.2-7.3H6',
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'M6 6l12 12M18 6 6 18',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  arrowRight: 'M4 12h15m0 0-6-6m6 6-6 6',
  arrowUp: 'M12 19V5m0 0-6 6m6-6 6 6',
  quote: 'M7 8c-2.2 0-4 1.8-4 4v5h6v-6H6c0-1.7 1.3-3 3-3V8Zm10 0c-2.2 0-4 1.8-4 4v5h6v-6h-3c0-1.7 1.3-3 3-3V8Z',
  check: 'M4 12.5l5 5L20 6',
}

function Icon({ name, className = 'size-5', strokeWidth = 1.7, filled = false }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}

export default Icon
