"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const IMAGES = [
  { src: "/p1.jpeg", alt: "Us photo 1" },
  { src: "/p2.jpeg", alt: "Us photo 2" },
  { src: "/p3.jpeg", alt: "Us photo 3" },
  // { src: "/p4.jpeg", alt: "Us photo 4" },
]

export default function Slideshow({ onDone }: { onDone: () => void }) {
  const [idx, setIdx] = useState(0)
  const [prev, setPrev] = useState(0)
  const hoverRef = useRef<HTMLDivElement>(null)
  const hovering = useRef(false)

  useEffect(() => {
    function onEnter() {
      hovering.current = true
    }
    function onLeave() {
      hovering.current = false
    }
    const el = hoverRef.current
    el?.addEventListener("mouseenter", onEnter)
    el?.addEventListener("mouseleave", onLeave)
    return () => {
      el?.removeEventListener("mouseenter", onEnter)
      el?.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      if (hovering.current) return
      setPrev((p) => idx)
      setIdx((i) => (i + 1) % IMAGES.length)
    }, 2200)
    return () => clearInterval(t)
  }, [idx])

  return (
    <section className="flex flex-col items-center gap-4">
      <h3 className="text-lg sm:text-xl font-medium">Little moments I adore</h3>
      <Card ref={hoverRef} className="relative overflow-hidden bg-red-400 w-[min(90vw,28rem)] h-[18rem]">
        <img
          key={IMAGES[prev].src + "-prev"}
          src={IMAGES[prev].src || "/placeholder.svg?height=288&width=448&query=cute%20photo%20prev"}
          alt=""
          aria-hidden
          className="absolute inset-0 block w-full h-full object-contain opacity-100 transition-opacity duration-500"
          style={{ opacity: 0.0 }}
        />
        <img
          key={IMAGES[idx].src}
          src={IMAGES[idx].src || "/placeholder.svg?height=288&width=448&query=cute%20photo"}
          alt={IMAGES[idx].alt}
          className="absolute inset-0 block w-full h-full object-contain opacity-0 transition-opacity duration-500 data-[show=true]:opacity-100"
          data-show="true"
        />
      </Card>
      <div className="flex items-center gap-2">
        {IMAGES.map((_, i) => (
          <span key={i} aria-hidden className={`h-2 w-2 rounded-full ${i === idx ? "bg-primary" : "bg-muted"}`} />
        ))}
      </div>
      <Button className="mt-2 bg-primary text-primary-foreground" onClick={onDone}>
        Next
      </Button>
    </section>
  )
}
