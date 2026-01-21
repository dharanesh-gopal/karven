"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  href?: string
  label?: string
  className?: string
}

export default function BackButton({ href, label = "Back", className = "" }: BackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-300 rounded-2xl ${className}`}
      aria-label={label}
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </button>
  )
}
