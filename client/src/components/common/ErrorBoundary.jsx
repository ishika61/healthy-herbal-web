import { Component } from 'react'
import ErrorState from './ErrorState'

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false } }

  static getDerivedStateFromError() { return { hasError: true } }

  componentDidCatch(error) { console.error('Unhandled application error:', error) }

  render() {
    if (this.state.hasError) return <main className="hh-container py-16"><ErrorState title="Something unexpected happened" message="Please refresh the page and try again." action={<button type="button" className="mt-4 text-sm font-bold text-rose-300 underline" onClick={() => window.location.reload()}>Refresh page</button>} /></main>
    return this.props.children
  }
}

export default ErrorBoundary
