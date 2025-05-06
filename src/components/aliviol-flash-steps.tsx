"use client"

import { useEffect, useRef, useState } from "react"

export default function AliviolFlashSteps() {
  // Referencias para cada paso
  const step1Ref = useRef<HTMLDivElement>(null)
  const step2Ref = useRef<HTMLDivElement>(null)
  const step3Ref = useRef<HTMLDivElement>(null)
  const step4Ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Estados para controlar la visibilidad de cada paso
  const [step1Visible, setStep1Visible] = useState(false)
  const [step2Visible, setStep2Visible] = useState(false)
  const [step3Visible, setStep3Visible] = useState(false)
  const [step4Visible, setStep4Visible] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Comprobar si estamos en escritorio
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    // Ejecutar al inicio
    checkDesktop()

    // Configurar listener para cambios de tamaño
    window.addEventListener("resize", checkDesktop)

    // Configurar IntersectionObserver para cada paso
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Cuando al menos el 30% del elemento es visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Identificar qué elemento está entrando en el viewport
        if (entry.target === step1Ref.current) {
          if (entry.isIntersecting) setStep1Visible(true)
        } else if (entry.target === step2Ref.current) {
          if (entry.isIntersecting) setStep2Visible(true)
        } else if (entry.target === step3Ref.current) {
          if (entry.isIntersecting) setStep3Visible(true)
        } else if (entry.target === step4Ref.current) {
          if (entry.isIntersecting) setStep4Visible(true)
        }
      })
    }, options)

    // Observar cada paso
    if (step1Ref.current) observer.observe(step1Ref.current)
    if (step2Ref.current) observer.observe(step2Ref.current)
    if (step3Ref.current) observer.observe(step3Ref.current)
    if (step4Ref.current) observer.observe(step4Ref.current)

    // Limpiar al desmontar
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", checkDesktop)
    }
  }, [])

  // Estilos base para los pasos
  const stepStyle = {
    opacity: 0,
    transform: "translateY(30px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
  }

  // Estilos para pasos visibles
  const visibleStepStyle = {
    opacity: 1,
    transform: "translateY(0)",
  }

  return (
    <div
      ref={containerRef}
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        backgroundColor: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(8px)",
        padding: "2rem",
        borderRadius: "1rem",
        position: "relative",
        overflow: "hidden",
        marginBottom:"10rem"
      }}
    >
      {/* Efecto de brillo sutil */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 900,
            marginBottom: "1rem",
            color: "white",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Cómo funciona Aliviol Flash
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            maxWidth: "48rem",
            margin: "0 auto",
            color: "white",
            opacity: 0.9,
          }}
        >
          Un proceso simple para un alivio rápido y efectivo.
        </p>
      </div>

      <div style={{ position: "relative" }}>
        {/* Línea de conexión vertical */}
        {isDesktop && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              backgroundColor: "rgba(248, 215, 218, 0.6)",
              transform: "translateX(-50%)",
            }}
          />
        )}

        {/* Pasos */}
        <div style={{ position: "relative" }}>
          {/* Paso 1 */}
          <div
            ref={step1Ref}
            style={{
              display: "flex",
              flexDirection: isDesktop ? "row" : "column",
              alignItems: "center",
              marginBottom: "3rem",
              ...stepStyle,
              ...(step1Visible ? visibleStepStyle : {}),
              transitionDelay: "0.1s",
            }}
          >
            <div
              style={{
                width: isDesktop ? "50%" : "100%",
                paddingRight: isDesktop ? "3rem" : "0",
                textAlign: isDesktop ? "right" : "center",
                order: isDesktop ? 1 : 2,
                marginTop: isDesktop ? 0 : "1rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "white",
                  textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                Identifica el dolor
              </h3>
              <p style={{ color: "white", opacity: 0.9, lineHeight: 1.6 }}>
                Cuando sientas dolor intenso que interrumpe tu día, es momento de actuar rápido.
              </p>
            </div>
            <div
              style={{
                zIndex: 10,
                order: isDesktop ? 2 : 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  backgroundColor: "#DC2626",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              >
                1
              </div>
            </div>
            <div style={{ width: isDesktop ? "50%" : "100%", order: 3 }} />
          </div>

          {/* Paso 2 */}
          <div
            ref={step2Ref}
            style={{
              display: "flex",
              flexDirection: isDesktop ? "row" : "column",
              alignItems: "center",
              marginBottom: "3rem",
              ...stepStyle,
              ...(step2Visible ? visibleStepStyle : {}),
              transitionDelay: "0.3s",
            }}
          >
            <div style={{ width: isDesktop ? "50%" : "100%", order: isDesktop ? 1 : 2 }} />
            <div
              style={{
                zIndex: 10,
                order: isDesktop ? 2 : 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  backgroundColor: "#DC2626",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              >
                2
              </div>
            </div>
            <div
              style={{
                width: isDesktop ? "50%" : "100%",
                paddingLeft: isDesktop ? "3rem" : "0",
                textAlign: isDesktop ? "left" : "center",
                order: 3,
                marginTop: isDesktop ? 0 : "1rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "white",
                  textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                Toma Aliviol Flash
              </h3>
              <p style={{ color: "white", opacity: 0.9, lineHeight: 1.6 }}>
                Consume el shot bebible directamente, sin necesidad de agua. Su formato práctico te permite tomarlo en
                cualquier lugar.
              </p>
            </div>
          </div>

          {/* Paso 3 */}
          <div
            ref={step3Ref}
            style={{
              display: "flex",
              flexDirection: isDesktop ? "row" : "column",
              alignItems: "center",
              marginBottom: "3rem",
              ...stepStyle,
              ...(step3Visible ? visibleStepStyle : {}),
              transitionDelay: "0.5s",
            }}
          >
            <div
              style={{
                width: isDesktop ? "50%" : "100%",
                paddingRight: isDesktop ? "3rem" : "0",
                textAlign: isDesktop ? "right" : "center",
                order: isDesktop ? 1 : 2,
                marginTop: isDesktop ? 0 : "1rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "white",
                  textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                Espera solo 10 minutos
              </h3>
              <p style={{ color: "white", opacity: 0.9, lineHeight: 1.6 }}>
                La fórmula de acción rápida comienza a trabajar inmediatamente, proporcionando alivio en solo 10
                minutos.
              </p>
            </div>
            <div
              style={{
                zIndex: 10,
                order: isDesktop ? 2 : 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  backgroundColor: "#DC2626",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              >
                3
              </div>
            </div>
            <div style={{ width: isDesktop ? "50%" : "100%", order: 3 }} />
          </div>

          {/* Paso 4 */}
          <div
            ref={step4Ref}
            style={{
              display: "flex",
              flexDirection: isDesktop ? "row" : "column",
              alignItems: "center",
              ...stepStyle,
              ...(step4Visible ? visibleStepStyle : {}),
              transitionDelay: "0.7s",
            }}
          >
            <div style={{ width: isDesktop ? "50%" : "100%", order: isDesktop ? 1 : 2 }} />
            <div
              style={{
                zIndex: 10,
                order: isDesktop ? 2 : 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  backgroundColor: "#DC2626",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <div
              style={{
                width: isDesktop ? "50%" : "100%",
                paddingLeft: isDesktop ? "3rem" : "0",
                textAlign: isDesktop ? "left" : "center",
                order: 3,
                marginTop: isDesktop ? 0 : "1rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "white",
                  textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                ¡Continúa con tu día!
              </h3>
              <p style={{ color: "white", opacity: 0.9, lineHeight: 1.6 }}>
                Vuelve a tus actividades sin interrupciones. El alivio dura horas, permitiéndote mantener tu ritmo de
                vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
