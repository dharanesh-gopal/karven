import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <AlertCircle className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Course Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The training course you're looking for doesn't exist or has been removed. 
            Please check our available courses.
          </p>
        </div>
        
        <div className="space-y-3">
          <Link 
            href="/training"
            className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            View All Training Courses
          </Link>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
        
        <p className="text-sm text-gray-500 mt-8">
          Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link>
        </p>
      </div>
    </div>
  )
}
