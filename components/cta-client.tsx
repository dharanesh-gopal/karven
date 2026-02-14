"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { ConsultationForm } from "@/components/consultation-form"

interface CTAClientProps {
  title: string
  description: string
  buttonText: string
  videoUrl?: string
  imageUrl?: string
}

export function CTAClient({ title, description, buttonText, videoUrl, imageUrl }: CTAClientProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let playPromise: Promise<void> | undefined

    const playVideo = () => {
      if (playPromise !== undefined) {
        playPromise.then(() => {
          playPromise = video.play()
        }).catch(() => {
          playPromise = video.play()
        })
      } else {
        playPromise = video.play()
        playPromise.catch((error) => {
          if (error.name !== 'AbortError' && error.name !== 'NotAllowedError') {
            console.log("Video play error:", error.name)
          }
        })
      }
    }

    video.addEventListener('loadeddata', playVideo)

    video.addEventListener('pause', () => {
      if (!document.hidden) {
        playVideo()
      }
    })

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playVideo()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    playVideo()

    return () => {
      video.removeEventListener('loadeddata', playVideo)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [videoUrl])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-800 text-white relative overflow-hidden">
      {videoUrl ? (
        <video
          key={videoUrl}
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : imageUrl ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : null}

      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 text-center relative z-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          {title}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-center">
          <Button
            onClick={() => setIsFormOpen(true)}
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 group"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}
