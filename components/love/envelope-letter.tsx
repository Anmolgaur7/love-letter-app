"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Heart } from "./shared/heart"

export default function EnvelopeLetter() {
  const [open, setOpen] = useState(false)

  return (
    <section className="flex flex-col items-center gap-6 py-8">
      <h3 className="text-xl font-semibold text-center">A letter for you</h3>

      <div className="relative">
        {/* Envelope */}
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative w-64 h-44 rounded-md border bg-secondary text-secondary-foreground shadow-sm transition-transform hover:scale-[1.02] focus:outline-none"
        >
          {/* Flap */}
          <div
            className={`absolute left-0 right-0 top-0 h-1/2 bg-secondary rounded-t-md origin-top transition-transform duration-500 ${
              open ? "-rotate-x-180 [transform:rotateX(180deg)]" : ""
            }`}
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            aria-hidden
          />
          {/* Inner triangle (flap edge) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-0 h-0 border-l-[64px] border-r-[64px] border-t-[56px] border-l-transparent border-r-transparent border-t-muted"
            aria-hidden
          />
          {/* Seams */}
          <div
            className="absolute bottom-0 left-0 w-0 h-0 border-l-[128px] border-t-[72px] border-l-muted border-t-transparent"
            aria-hidden
          />
          <div
            className="absolute bottom-0 right-0 w-0 h-0 border-r-[128px] border-t-[72px] border-r-muted border-t-transparent"
            aria-hidden
          />
          {/* Heart seal */}
          <div
            className={`absolute left-1/2 top-[42%] -translate-x-1/2 rounded-full bg-primary text-primary-foreground p-1 shadow transition-all ${
              open ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
            aria-hidden
          >
            <Heart className="size-4" />
          </div>
          <span className="sr-only">Open letter</span>
        </button>

        {/* Letter content */}
        <Card
          className={`absolute left-1/2 -translate-x-1/2 w-[15rem] sm:w-[18rem] bg-card/95 border shadow-md p-4 transition-all duration-500 ${
            open ? "opacity-100 -top-36 rotate-[0.5deg]" : "opacity-0 -top-10 pointer-events-none"
          }`}
          aria-hidden={!open}
        >
          <p className="leading-relaxed text-pretty">
            Guugu❤️,
            <br />
            jaana i know i am not a good boyfreind  may be the shittiest one  i dont know how to express love  but i love you the more  than anything in this world  i know i am not perfect but i will try to be the best for you  i will try to be the best version of myself for you  i will try to make you happy  i will try to make you smile  i will try to be there for you in every situation  i will try to be your support system  i will try to be your best friend  i will try to be your everything  because you are my everything  you are the reason for my happiness  you are the reason for my smile  you are the reason for my existence mujhe ni pata  how much you love me now  but babyyy you are the most special person in my life  i love you so much  i love you more than anything in this world  i love you more than my life  i love you more than myself  i love you more than anything else  i love you more than anything else in this world  i love you more than anything else in this universe  i love you more than anything else in this galaxy  i love you more than anything else in this solar system  i love you more than anything else in this planet  i love you more than anything else in this earth  i love you more than anything else in this universe  i love you more than anything else in this galaxy  i love you more than anything else in this solar system  i love you more than anything else in this planet  i love you more than anything else in this earth  kash mai apko kiss kar paata abhi  or  bata paata how much you mean to me or how much i love you  or how much i need you in my life  or how much i want you in my life  or how much i want to be with you  or how much i want to spend my life with you  or how much i want to grow old with you  or how much i want to be your husband  or how much i want to be your father of our kids  or how much i want to be your everything  or how much i want to be your forever  or how much i want to be your always  or how much i want to be your forever and always  or how much i want to be your forever and always and forever  or how much i want to be your forever and always and forever and ever  or how much i want to be your forever and always and forever and ever and ever  or how much i want to be your forever and always and forever and ever and ever and ever  or how much i want to be your forever and always and forever and ever and ever and ever and ever  or how much i want to be your forever and always and forever and ever and ever and ever and ever and ever  or how much i want to be your forever and always and forever and ever and ever and ever and ever and ever and ever agar ho sake to merko  maaf kar dena for being a shitty boyfriend  or for being a shitty person  also i know ki apko mai mota pasand nahi hu par vo maine apko bata dia hai deppression wali baat bas vahi hai ill try to change and the inde thing which i cant bear is tears in your eyes baccha  i miss  you  honeyy .
            <br />
            <br />
            Yours, always and forever.
          </p>
        </Card>
      </div>

      <p className="text-sm text-muted-foreground text-center">Tap the envelope to {open ? "close it" : "open it"}.</p>
    </section>
  )
}
