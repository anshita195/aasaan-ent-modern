export default function LoadingSpinner() {
  return (
    <div className="h-96 flex items-center justify-center" role="status" aria-label="Loading content">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
