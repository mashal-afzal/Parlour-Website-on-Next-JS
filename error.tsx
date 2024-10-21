'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-400 min-h-screen flex-col mb-4 p-4 text-9xl text-center text-yellow-800 animate-pulse ">“Well, this is awkward... We hit a snag!” 
    </div>
  )
}