"use client"

import { useEffect, useMemo, useState } from "react"
import { Heart } from "./heart"

export default function ConfettiHearts() {
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setMounted(false), 1400)
    return () => clearTimeout(t)
  }, [])
  const pieces = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        left: Math.random() * 100,
        rot: (Math.random() - 0.5) * 60,
        delay: Math.random() * 100,
        dur: 900 + Math.random() * 700,
        size: 10 + Math.random() * 18,
        hue: i % 3,
      })),
    [],
  )

  if (!mounted) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-20" aria-hidden>
      {pieces.map((p, i) => (
        <div
          key={i}
          className="absolute top-[-10%] animate-[fall_linear_forwards]"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}ms`,
            animationDuration: `${p.dur}ms`,
            transform: `rotate(${p.rot}deg)`,
          }}
        >
          <Heart
            className={p.hue === 0 ? "text-destructive" : p.hue === 1 ? "text-primary" : "text-accent-foreground/70"}
            style={{ width: p.size, height: p.size }}
          />
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(120vh) rotate(45deg); opacity: 0.9; }
        }
      `}</style>
    </div>
  )
}
