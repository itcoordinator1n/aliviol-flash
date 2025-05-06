"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  width: number
  height: number
}

export default function AnimatedBackground({ width, height }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Solo proceder si tenemos dimensiones válidas
    if (width <= 0 || height <= 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar el tamaño del canvas para que coincida con el contenedor
    canvas.width = width
    canvas.height = height

    // Color de fondo rojo intenso (como Flash)
    const backgroundColor = "#B80000" // Rojo ligeramente más oscuro como base

    // Clase para los rayos (iconos)
    class LightningIcon {
      x: number
      y: number
      size: number
      angle: number
      targetAngle: number
      speed: number
      targetX: number
      targetY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = 20 + Math.random() * 25
        this.angle = Math.random() * Math.PI * 2
        this.targetAngle = this.angle
        this.speed = 0.2 + Math.random() * 0.6 // Movimiento más lento
        this.setNewTarget()
        this.opacity = 0.5 // 50% transparencia
      }

      setNewTarget() {
        // Establecer un nuevo punto objetivo dentro del canvas
        this.targetX = Math.random() * canvas.width
        this.targetY = Math.random() * canvas.height
        // Calcular el ángulo hacia el objetivo
        this.targetAngle = Math.atan2(this.targetY - this.y, this.targetX - this.x)
      }

      update() {
        // Rotar suavemente hacia el ángulo objetivo (movimiento fluido)
        const angleDiff = this.targetAngle - this.angle

        // Normalizar la diferencia de ángulo para tomar el camino más corto
        let normalizedDiff = angleDiff
        while (normalizedDiff > Math.PI) normalizedDiff -= Math.PI * 2
        while (normalizedDiff < -Math.PI) normalizedDiff += Math.PI * 2

        // Aplicar rotación suave
        this.angle += normalizedDiff * 0.02 // Más lento

        // Mover hacia el objetivo
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        // Verificar si llegamos cerca del objetivo
        const distToTarget = Math.hypot(this.targetX - this.x, this.targetY - this.y)
        if (distToTarget < 50) {
          this.setNewTarget()
        }

        // Si sale del canvas, establecer un nuevo objetivo dentro del canvas
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.setNewTarget()
          // Ajustar posición para que esté dentro del canvas
          this.x = Math.max(0, Math.min(canvas.width, this.x))
          this.y = Math.max(0, Math.min(canvas.height, this.y))
        }
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)

        // Dibujar el icono de rayo estilizado - todos del mismo color
        const baseColor = `rgba(255, 220, 0, ${this.opacity})`
        const glowColor = `rgba(255, 240, 150, ${this.opacity * 0.7})`

        ctx.strokeStyle = baseColor
        ctx.fillStyle = baseColor
        ctx.lineWidth = 2
        ctx.shadowColor = glowColor
        ctx.shadowBlur = 10

        // Dibujar un icono de rayo estilizado
        ctx.beginPath()
        const s = this.size / 2 // Para simplificar el código

        // Puntos del icono de rayo (forma de zigzag)
        ctx.moveTo(0, -s) // Punta superior
        ctx.lineTo(-s / 2, 0) // Izquierda medio
        ctx.lineTo(0, 0) // Centro
        ctx.lineTo(-s / 2, s) // Izquierda abajo
        ctx.lineTo(s / 2, 0) // Derecha medio
        ctx.lineTo(0, 0) // Centro de nuevo
        ctx.lineTo(s / 2, -s) // Derecha arriba
        ctx.closePath()

        ctx.fill()
        ctx.stroke()

        ctx.restore()
      }
    }

    // Clase para puntos
    class Point {
      x: number
      y: number
      size: number
      speed: number
      angle: number
      targetAngle: number
      targetX: number
      targetY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = 2 + Math.random() * 4 // Puntos pequeños
        this.speed = 0.1 + Math.random() * 0.4 // Movimiento lento
        this.angle = Math.random() * Math.PI * 2
        this.targetAngle = this.angle
        this.setNewTarget()
        this.opacity = 0.4 + Math.random() * 0.2 // Transparencia variable
      }

      setNewTarget() {
        this.targetX = Math.random() * canvas.width
        this.targetY = Math.random() * canvas.height
        this.targetAngle = Math.atan2(this.targetY - this.y, this.targetX - this.x)
      }

      update() {
        // Rotar suavemente hacia el ángulo objetivo
        const angleDiff = this.targetAngle - this.angle

        // Normalizar la diferencia de ángulo
        let normalizedDiff = angleDiff
        while (normalizedDiff > Math.PI) normalizedDiff -= Math.PI * 2
        while (normalizedDiff < -Math.PI) normalizedDiff += Math.PI * 2

        this.angle += normalizedDiff * 0.01 // Muy lento

        // Mover hacia el objetivo
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        // Verificar si llegamos cerca del objetivo
        const distToTarget = Math.hypot(this.targetX - this.x, this.targetY - this.y)
        if (distToTarget < 30) {
          this.setNewTarget()
        }

        // Si sale del canvas, establecer un nuevo objetivo dentro del canvas
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.setNewTarget()
          this.x = Math.max(0, Math.min(canvas.width, this.x))
          this.y = Math.max(0, Math.min(canvas.height, this.y))
        }
      }

      draw() {
        if (!ctx) return

        // Mismo color que los rayos para consistencia
        const baseColor = `rgba(255, 220, 0, ${this.opacity})`
        ctx.fillStyle = baseColor
        ctx.shadowColor = baseColor
        ctx.shadowBlur = 5

        // Dibujar punto
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Función para dibujar líneas de velocidad en el fondo
    function drawSpeedLines() {
      if (!ctx) return

      // Dibujar líneas sutiles que sugieren velocidad
      const lineCount = 20
      const lineOpacity = 0.05 // Muy sutil

      ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`
      ctx.lineWidth = 1

      for (let i = 0; i < lineCount; i++) {
        const y = (canvas.height / lineCount) * i
        const length = 50 + Math.random() * 150
        const x = Math.random() * canvas.width

        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + length, y)
        ctx.stroke()
      }
    }

    // Crear rayos y puntos
    const lightnings: LightningIcon[] = []
    const points: Point[] = []
    const lightningCount = 6 // Menos rayos para un aspecto más serio
    const pointCount = 30 // Más puntos para dar profundidad

    for (let i = 0; i < lightningCount; i++) {
      lightnings.push(new LightningIcon())
    }

    for (let i = 0; i < pointCount; i++) {
      points.push(new Point())
    }

    // Añadir esta variable fuera de la función animate
    let pulseValue = 0
    let pulseDirection = 0.001 // Pulso extremadamente sutil

    // Función de animación
    const animate = () => {
      // Efecto de pulso para el fondo
      pulseValue += pulseDirection
      if (pulseValue > 0.04 || pulseValue < 0) {
        pulseDirection *= -1
      }

      // Color de fondo con efecto de pulso
      const r = 220 - Math.floor(pulseValue * 10)
      const backgroundColorPulse = `rgb(${r}, 0, 0)`

      // Limpiar el canvas
      // Crear gradiente vertical (de arriba hacia abajo) con tonos más oscuros
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#700000") // Rojo mucho más oscuro arriba
      gradient.addColorStop(0.5, "#900000") // Rojo oscuro en medio
      gradient.addColorStop(1, "#A80000") // Rojo menos oscuro abajo

      // Aplicar gradiente al fondo
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Dibujar líneas de velocidad en el fondo
      drawSpeedLines()

      // Actualizar y dibujar cada punto
      points.forEach((point) => {
        point.update()
        point.draw()
      })

      // Actualizar y dibujar cada rayo
      lightnings.forEach((lightning) => {
        lightning.update()
        lightning.draw()
      })

      // Continuar la animación
      requestAnimationFrame(animate)
    }

    // Iniciar la animación
    const animationId = requestAnimationFrame(animate)

    // Limpieza al desmontar
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [width, height]) // Dependencias: cuando cambian las dimensiones, se recrea el canvas

  return (
    <canvas
    ref={canvasRef}
    style={{
      position: "fixed",    // Fijo en la ventana
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#800000",
      display: "block",
      margin: 0,
      padding: 0,
      zIndex: -1,           // Detrás de todo
    }}
  />
  )
}
