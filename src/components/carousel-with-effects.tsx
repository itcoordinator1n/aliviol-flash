"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselItem {
  image: string
  title: string
  description: string
}

export default function CarouselWithEffects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHoveringNext, setIsHoveringNext] = useState(false)
  const [isHoveringPrev, setIsHoveringPrev] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const items: CarouselItem[] = [
    {
      image: "/PORTADA FB ALIVIOL FLASH-02.png",
      title: "Alivio en solo 10 minutos",
      description: "Actúa rápidamente para que puedas volver a tu rutina sin interrupciones.",
    },
    {
      image: "/PORTADA FB ALIVIOL FLASH_Mesa de trabajo 1.png",
      title: "Shot fácil de tomar",
      description: "Sin necesidad de agua, tómalo directamente cuando lo necesites.",
    },
    {
      image: "/RRSS ALIVIOL FLASH-02.png",
      title: "Portátil y práctico",
      description: "Formato ideal para llevar a donde vayas, adaptado a tu ritmo de vida.",
    },
    {
      image: "/PORTADA FB ALIVIOL FLASH_Mesa de trabajo 1.png",
      title: "Disponible en farmacias",
      description: "Encuentra Aliviol Flash en tu farmacia más cercana.",
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [items.length])

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
        setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
}, [])

const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
}

const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
}

const getNextIndex = () => (currentIndex + 1) % items.length
const getPrevIndex = () => (currentIndex - 1 + items.length) % items.length

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      {/* Main Carousel */}
      <div className="relative h-[70vh] overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <div className="parallax-wrapper absolute inset-0 overflow-hidden">
              <div
                className="relative w-full h-[calc(100%+100px)] -mt-[50px]"
                style={{
                  transform: `translateY(${scrollY * 0.15}px)`,
                }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  priority={index === currentIndex}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
              <h2
                className={cn(
                  "text-4xl font-bold mb-2 transform transition-transform duration-1000 ease-out",
                  index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
                )}
                style={{ transitionDelay: "300ms" }}
              >
                {item.title}
              </h2>
              <p
                className={cn(
                  "text-xl transform transition-transform duration-1000 ease-out",
                  index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
                )}
                style={{ transitionDelay: "500ms" }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        onClick={goToPrev}
        onMouseEnter={() => setIsHoveringPrev(true)}
        onMouseLeave={() => setIsHoveringPrev(false)}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        onClick={goToNext}
        onMouseEnter={() => setIsHoveringNext(true)}
        onMouseLeave={() => setIsHoveringNext(false)}
      >
        <ChevronRight size={24} />
      </button>

      {/* Preview on hover */}
      {isHoveringNext && (
        <div className="absolute right-16 top-1/2 -translate-y-1/2 z-20 w-32 h-24 overflow-hidden rounded-md shadow-lg border-2 border-white/50 transition-all duration-300">
          <div className="relative w-full h-full">
            <Image
              src={items[getNextIndex()].image || "/placeholder.svg"}
              alt={`Preview of ${items[getNextIndex()].title}`}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        </div>
      )}

      {isHoveringPrev && (
        <div className="absolute left-16 top-1/2 -translate-y-1/2 z-20 w-32 h-24 overflow-hidden rounded-md shadow-lg border-2 border-white/50 transition-all duration-300">
          <div className="relative w-full h-full">
            <Image
              src={items[getPrevIndex()].image || "/placeholder.svg"}
              alt={`Preview of ${items[getPrevIndex()].title}`}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        </div>
      )}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-white w-4" : "bg-white/50",
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
