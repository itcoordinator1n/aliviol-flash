"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Step {
  id: number
  title: string
  description: string
  imageSrc: string
}

interface AliviolFlashStepsProps {
  steps?: Step[]
}

export default function AliviolFlashSteps({
  steps = [
    {
      id: 1,
      title: "Alivio en 3",
      description: "Simples pasos.",
      imageSrc: "/RRSS ALIVIOL FLASH-02.png",
    },
    {
      id: 2,
      title: "Identificar el dolor",
      description: "Identifique el área afectada donde siente el dolor o malestar.",
      imageSrc: "/RRSS ALIVIOL FLASH-03.png",
    },
    {
      id: 3,
      title: "Tomalo en segundos",
      description: "Deja que actúe.",
      imageSrc: "/RRSS ALIVIOL FLASH-04.png",
    },
    {
      id: 4,
      title: "10 minutos después",
      description: "Seguí tu día sin dolor.",
      imageSrc: "/RRSS ALIVIOL FLASH-05.png",
    }
  ],
}: AliviolFlashStepsProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const goToNextStep = () => {
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))
  }

  const goToPrevStep = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
          Aliviol Flash <Zap className="h-8 w-8 text-yellow-400 animate-pulse" />
        </h2>
        <p className="text-red-700 font-medium">Alivio ultrarrápido para tu dolor</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-600 to-orange-400 p-1 shadow-lg">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={steps[currentStep].imageSrc || "/placeholder.svg"}
              alt={`Paso ${steps[currentStep].id}: ${steps[currentStep].title}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold">{steps[currentStep].title}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  currentStep === index ? "bg-red-600 w-8" : "bg-gray-200 w-2.5 hover:bg-orange-300",
                )}
                aria-label={`Ir al paso ${step.id}`}
              />
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 font-bold">
                {steps[currentStep].id}
              </div>
              <h3 className="text-xl font-bold">{steps[currentStep].title}</h3>
            </div>

            <p className="text-gray-700 mb-6">{steps[currentStep].description}</p>

            <div className="flex justify-between">
              <Button variant="outline" size="sm" onClick={goToPrevStep} className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" /> Anterior
              </Button>

              <Button
                onClick={goToNextStep}
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-1"
              >
                Siguiente <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
        {/*
        
        
      <div className="mt-12 flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
          <Zap className="h-4 w-4" />
          Alivio ultrarrápido en menos de 10 minutos
        </div>
      </div>
      */}
    </div>
  )
}
