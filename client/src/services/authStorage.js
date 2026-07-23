const USERS_STORAGE_KEY = 'healthy-herbal-users'
const CURRENT_USER_STORAGE_KEY = 'healthy-herbal-current-user'

function parseStorage(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) || fallback } catch { return fallback } }

export function getStoredUsers() { const users = parseStorage(USERS_STORAGE_KEY, []); return Array.isArray(users) ? users : [] }
export function saveUsers(users) { localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users)) }
export function getStoredUser() { return parseStorage(CURRENT_USER_STORAGE_KEY, null) }
export function saveCurrentUser(user) { localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user)) }
export function clearCurrentUser() { localStorage.removeItem(CURRENT_USER_STORAGE_KEY) }
