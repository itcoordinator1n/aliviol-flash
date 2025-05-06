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
    <div
      ref={carouselRef}
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Main Carousel */}
      <div
        style={{
          position: "relative",
          height: "70vh",
          overflow: "hidden",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              inset: 0,
              transition: "opacity 1s ease-in-out",
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 10 : 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "calc(100% + 100px)",
                  marginTop: "-50px",
                  transform: `translateY(${scrollY * 0.15}px)`,
                }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  priority={index === currentIndex}
                  style={{ objectFit: "cover" }}
                  sizes="100vw"
                />
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                padding: "2rem",
                color: "white",
              }}
            >
              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  transform:
                    index === currentIndex
                      ? "translateY(0)"
                      : "translateY(100%)",
                  opacity: index === currentIndex ? 1 : 0,
                  transition:
                    "transform 1s ease-out, opacity 1s ease-out",
                  transitionDelay: "300ms",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  fontSize: "1.25rem",
                  transform:
                    index === currentIndex
                      ? "translateY(0)"
                      : "translateY(100%)",
                  opacity: index === currentIndex ? 1 : 0,
                  transition:
                    "transform 1s ease-out, opacity 1s ease-out",
                  transitionDelay: "500ms",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={goToPrev}
        onMouseEnter={() => setIsHoveringPrev(true)}
        onMouseLeave={() => setIsHoveringPrev(false)}
        style={{
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          padding: "0.5rem",
          borderRadius: "9999px",
          backdropFilter: "blur(0.25rem)",
          backgroundColor: "rgba(255,255,255,0.2)",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        <ChevronLeft size={24} color="white" />
      </button>

      <button
        onClick={goToNext}
        onMouseEnter={() => setIsHoveringNext(true)}
        onMouseLeave={() => setIsHoveringNext(false)}
        style={{
          position: "absolute",
          right: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          padding: "0.5rem",
          borderRadius: "9999px",
          backdropFilter: "blur(0.25rem)",
          backgroundColor: "rgba(255,255,255,0.2)",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        <ChevronRight size={24} color="white" />
      </button>

      {/* Preview on hover */}
      {isHoveringNext && (
        <div
          style={{
            position: "absolute",
            right: "4rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            width: "8rem",
            height: "6rem",
            overflow: "hidden",
            borderRadius: "0.5rem",
            boxShadow: "0 10px 15px rgba(0,0,0,0.3)",
            border: "2px solid rgba(255,255,255,0.5)",
            transition: "opacity 0.3s",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={items[getNextIndex()].image || "/placeholder.svg"}
              alt={`Preview of ${items[getNextIndex()].title}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="128px"
            />
          </div>
        </div>
      )}

      {isHoveringPrev && (
        <div
          style={{
            position: "absolute",
            left: "4rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            width: "8rem",
            height: "6rem",
            overflow: "hidden",
            borderRadius: "0.5rem",
            boxShadow: "0 10px 15px rgba(0,0,0,0.3)",
            border: "2px solid rgba(255,255,255,0.5)",
            transition: "opacity 0.3s",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={items[getPrevIndex()].image || "/placeholder.svg"}
              alt={`Preview of ${items[getPrevIndex()].title}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="128px"
            />
          </div>
        </div>
      )}

      {/* Indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          gap: "0.5rem",
        }}
      >
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: index === currentIndex ? "1rem" : "0.5rem",
              height: "0.5rem",
              borderRadius: "9999px",
              backgroundColor: "white",
              opacity: index === currentIndex ? 1 : 0.5,
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  )
}
