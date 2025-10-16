import { Heart } from "./shared/heart"

export default function IntroScreen() {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-10">
      <div className="flex gap-2" aria-hidden>
        <Heart className="size-6 text-destructive animate-bounce" />
        <Heart className="size-6 text-destructive/80 animate-bounce [animation-delay:120ms]" />
        <Heart className="size-6 text-destructive/60 animate-bounce [animation-delay:240ms]" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold text-pretty">I’m sorry for everything.</h1>
      <p className="text-muted-foreground max-w-prose leading-relaxed">
        You mean the world to me. I want to make you smile today, even just a little.
      </p>
      <p className="text-sm text-muted-foreground">A little surprise is loading…</p>
    </section>
  )
}
