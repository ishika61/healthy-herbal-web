export function resolvePublicAssetUrl(path) {
  if (!path || /^(?:https?:|data:|blob:)/i.test(path)) return path
  if (typeof window === 'undefined') return path
  return new URL(path, window.location.origin).href
}
