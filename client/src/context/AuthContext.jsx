import { useMemo, useState } from 'react'
import { AuthContext } from './AuthState'
import { clearCurrentUser, getStoredUser, getStoredUsers, saveCurrentUser, saveUsers } from '../services/authStorage'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser)

  const signUp = ({ name, email, password }) => {
    const users = getStoredUsers()
    const normalizedEmail = email.trim().toLowerCase()
    if (users.some((item) => item.email === normalizedEmail)) return { success: false, message: 'An account with this email already exists.' }
    const account = { id: `user-${Date.now()}`, name: name.trim(), email: normalizedEmail, password, createdAt: new Date().toISOString() }
    saveUsers([...users, account])
    const currentUser = { id: account.id, name: account.name, email: account.email, createdAt: account.createdAt }
    saveCurrentUser(currentUser)
    setUser(currentUser)
    return { success: true }
  }

  const signIn = ({ email, password }) => {
    const account = getStoredUsers().find((item) => item.email === email.trim().toLowerCase() && item.password === password)
    if (!account) return { success: false, message: 'Incorrect email or password.' }
    const currentUser = { id: account.id, name: account.name, email: account.email, createdAt: account.createdAt }
    saveCurrentUser(currentUser)
    setUser(currentUser)
    return { success: true }
  }

  const logout = () => { clearCurrentUser(); setUser(null) }
  const value = useMemo(() => ({ user, signUp, signIn, logout, isAuthenticated: Boolean(user) }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
