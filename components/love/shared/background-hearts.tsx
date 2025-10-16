"use client"

import { useMemo } from "react"
import { Heart } from "./heart"

type Bubble = { left: string; size: number; delay: string; duration: string; opacity: number }

export default function BackgroundHearts() {
  const bubbles = useMemo<Bubble[]>(
    () =>
      Array.from({ length: 18 }).map((_, i) => {
        const left = `${Math.floor(Math.random() * 100)}%`
        const size = 10 + Math.floor(Math.random() * 18)
        const delay = `${Math.floor(Math.random() * 6000)}ms`
        const duration = `${8000 + Math.floor(Math.random() * 6000)}ms`
        const opacity = 0.2 + Math.random() * 0.35
        return { left, size, delay, duration, opacity }
      }),
    [],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-[-10%] animate-[floatUp_linear_forwards]"
          style={{
            left: b.left,
            animationDelay: b.delay,
            animationDuration: b.duration,
            opacity: b.opacity,
          }}
        >
          <Heart className="text-destructive" style={{ width: b.size, height: b.size }} />
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) translateZ(0); }
          100% { transform: translateY(-120%) translateZ(0); }
        }
      `}</style>
    </div>
  )
}
