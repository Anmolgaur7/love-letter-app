"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export default function LovePrompt({ onYes }: { onYes: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [noPos, setNoPos] = useState<{ x: number; y: number }>({ x: 16, y: 120 })

  function bounds() {
    const wrap = wrapRef.current
    if (!wrap) return { maxX: 0, maxY: 0 }
    const wrapRect = wrap.getBoundingClientRect()
    const btnW = 88
    const btnH = 40
    const pad = 8
    return {
      maxX: Math.max(0, wrapRect.width - btnW - pad),
      maxY: Math.max(0, wrapRect.height - btnH - pad),
    }
  }

  // Random relocation
  function moveNoRandom() {
    const { maxX, maxY } = bounds()
    const x = Math.floor(Math.random() * (maxX + 1))
    const y = Math.floor(Math.random() * (maxY + 1))
    setNoPos({ x, y })
  }

  // Evasive movement away from cursor
  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const wrap = wrapRef.current
    if (!wrap) return
    const rect = wrap.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const dx = noPos.x - mouseX
    const dy = noPos.y - mouseY
    const dist = Math.max(1, Math.hypot(dx, dy))
    // Push away proportional to proximity
    const push = Math.min(60, 1800 / dist)
    const nx = noPos.x + (dx / dist) * push + (Math.random() * 10 - 5)
    const ny = noPos.y + (dy / dist) * push + (Math.random() * 10 - 5)
    const { maxX, maxY } = bounds()
    const clampedX = Math.min(Math.max(8, nx), maxX)
    const clampedY = Math.min(Math.max(8, ny), maxY)
    setNoPos({ x: clampedX, y: clampedY })
  }

  // Periodic random relocation
  useEffect(() => {
    const t = setInterval(() => moveNoRandom(), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="flex flex-col items-center gap-6 py-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-pretty text-center">Do you love me?</h2>
      <p className="text-muted-foreground text-center">
        Be honest… but the universe is gently nudging you towards the right answer.
        <span className="sr-only"> Hint: choose Yes.</span>
      </p>

      <div
        ref={wrapRef}
        onMouseMove={onMouseMove}
        className="relative w-full max-w-md h-64 sm:h-72 md:h-80 mt-2 rounded-lg bg-card/70 border flex items-center justify-center overflow-hidden"
      >
        <Button
          variant="default"
          className="bg-primary text-primary-foreground shadow"
          onClick={onYes}
          aria-label="Yes, I do"
        >
          Yes
        </Button>

        <button
          type="button"
          aria-label="No"
          className="absolute inline-flex items-center justify-center rounded-md border px-4 py-2 bg-secondary text-secondary-foreground transition-transform select-none"
          style={{ left: noPos.x, top: noPos.y, transform: "translate3d(0,0,0)" }}
          onMouseEnter={moveNoRandom}
          onMouseDown={(e) => {
            e.preventDefault()
            moveNoRandom()
          }}
          onFocus={moveNoRandom}
          onClick={(e) => {
            e.preventDefault()
            moveNoRandom()
          }}
        >
          No
        </button>
      </div>
      <p className="text-xs text-muted-foreground">Psst… I knew you’d pick the right one.</p>
    </section>
  )
}
