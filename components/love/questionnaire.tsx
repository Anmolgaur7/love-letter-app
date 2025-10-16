"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Questionnaire({ onDone }: { onDone: () => void }) {
  const [answers, setAnswers] = useState({
    met: "",
    memory: "",
    word: "",
  })

  function handleChange<K extends keyof typeof answers>(key: K, value: string) {
    setAnswers((a) => ({ ...a, [key]: value }))
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    onDone()
  }

  return (
    <section className="flex flex-col gap-6">
      <Card className="bg-card/80">
        <CardHeader>
          <CardTitle className="text-xl">A tiny questionnaire</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="met">When did we meet?</Label>
              <Input
                id="met"
                placeholder="e.g., 14 Feb 2023, at the café"
                value={answers.met}
                onChange={(e) => handleChange("met", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="memory">Your favorite memory of us?</Label>
              <Input
                id="memory"
                placeholder="That one time we couldn’t stop laughing…"
                value={answers.memory}
                onChange={(e) => handleChange("memory", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="word">One word that describes us</Label>
              <Input
                id="word"
                placeholder="Forever, home, sunshine…"
                value={answers.word}
                onChange={(e) => handleChange("word", e.target.value)}
              />
            </div>
            <div className="pt-2">
              <Button type="submit" className="bg-primary text-primary-foreground">
                Continue
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
