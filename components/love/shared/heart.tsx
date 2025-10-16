import type React from "react"
import { cn } from "@/lib/utils"

export function Heart({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg viewBox="0 0 24 24" className={cn("inline-block", className)} style={style} role="img" aria-label="heart">
      <path
        fill="currentColor"
        d="M12.001 4.529c2.349-2.086 6.149-1.759 8.091.717 1.94 2.473 1.356 6.07-1.246 7.977l-6.148 4.58a1 1 0 0 1-1.194 0l-6.148-4.58C2.654 11.316 2.07 7.72 4.01 5.246c1.943-2.476 5.744-2.803 8.091-.717z"
      />
    </svg>
  )
}
