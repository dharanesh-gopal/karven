"use client"

import { useEffect, useRef, useState } from "react"

interface StatData {
  _id: string
  label: string
  value: string
  order: number
}

interface StatsClientProps {
  stats: StatData[]
}

export function StatsClient({ stats }: StatsClientProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const numValue = parseInt(stat.value.replace(/\D/g, '')) || 0
            const suffix = stat.value.replace(/\d/g, '')
            
            return (
              <div
                key={stat._id}
                className="text-center transform hover:scale-105 transition-transform"
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` : "none",
                  opacity: isVisible ? 1 : 0
                }}
              >
                <div className="text-5xl font-bold text-white mb-2">
                  {numValue > 0 ? (
                    <><Counter target={numValue} isVisible={isVisible} duration={2000} />{suffix}</>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Counter({ target, isVisible, duration }: { target: number; isVisible: boolean; duration: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return <span>{count}</span>
}
