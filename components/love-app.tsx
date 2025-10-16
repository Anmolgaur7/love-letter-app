"use client"

import { useEffect, useState } from "react"
import IntroScreen from "./love/intro-screen"
import LovePrompt from "./love/love-prompt"
import Questionnaire from "./love/questionnaire"
import Slideshow from "./love/slideshow"
import ExtraCute from "./love/extra-cute"
import EnvelopeLetter from "./love/envelope-letter"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import BackgroundHearts from "./love/shared/background-hearts"
import ConfettiHearts from "./love/shared/confetti-hearts"

type Step = "intro" | "lovePrompt" | "questions" | "slideshow" | "extras" | "letter"

export default function LoveApp() {
  const [step, setStep] = useState<Step>("intro")
  const [confetti, setConfetti] = useState(false)

  // Auto advance from intro to prompt after 5s
  useEffect(() => {
    if (step === "intro") {
      const t = setTimeout(() => setStep("lovePrompt"), 5000)
      return () => clearTimeout(t)
    }
  }, [step])

  const steps: Step[] = ["intro", "lovePrompt", "questions", "slideshow", "extras", "letter"]
  const current = steps.indexOf(step) + 1
  const percent = (current / steps.length) * 100

  function handleYes() {
    // Show confetti hearts briefly, then move to questionnaire
    setConfetti(true)
    setTimeout(() => {
      setConfetti(false)
      setStep("questions")
    }, 1400)
  }

  return (
    <div className="relative w-full">
      <BackgroundHearts />
      <div className="relative z-10 flex items-center justify-center py-6">
        <Card className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl bg-accent/60 backdrop-blur p-4 sm:p-6 md:p-8 border-0 shadow-lg">
          <div className="mb-4">
            <Progress value={percent} aria-label={`Step ${current} of ${steps.length}`} />
            <p className="mt-2 text-xs text-muted-foreground text-center">
              Step {current} of {steps.length}
            </p>
          </div>

          {step === "intro" && <IntroScreen />}
          {step === "lovePrompt" && <LovePrompt onYes={handleYes} />}
          {step === "questions" && <Questionnaire onDone={() => setStep("slideshow")} />}
          {step === "slideshow" && <Slideshow onDone={() => setStep("extras")} />}
          {step === "extras" && <ExtraCute onDone={() => setStep("letter")} />}
          {step === "letter" && <EnvelopeLetter />}
        </Card>
      </div>

      {confetti && <ConfettiHearts />}
    </div>
  )
}
