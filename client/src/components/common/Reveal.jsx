import { useReveal } from '../../hooks/useReveal'

// Wraps any content in a consistent fade-up-on-scroll reveal.
// `as` lets it render as a section/div/etc. `delay` staggers groups.
function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const { ref, isVisible } = useReveal()
  return (
    <Tag
      ref={ref}
      className={`hh-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
