"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "./shared/heart"

export default function ExtraCute({ onDone }: { onDone: () => void }) {
  const rows = new Array(12).fill(0)

  return (
    <section className="flex flex-col items-center gap-6 py-6">
      <h3 className="text-lg sm:text-xl font-medium text-center text-pretty">
        If hugs were hearts, I’d send you a sky full of them
      </h3>
      <div className="relative w-full max-w-md h-48 rounded-lg border bg-card/70 overflow-hidden" aria-hidden>
        <div className="absolute inset-0">
          <div className="grid grid-cols-6 gap-2 opacity-90 p-3">
            {rows.map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Heart
                  className={`size-5 ${
                    i % 3 === 0
                      ? "text-destructive animate-bounce"
                      : i % 3 === 1
                        ? "text-primary animate-pulse"
                        : "text-accent-foreground/70 animate-bounce"
                  }`}
                  style={{ animationDelay: `${(i % 6) * 120}ms` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button onClick={onDone} className="bg-primary text-primary-foreground">
        Final surprise
      </Button>
    </section>
  )
}
