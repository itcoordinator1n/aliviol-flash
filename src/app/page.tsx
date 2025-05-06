"use client"
import { useRef, useEffect, useState } from "react"
import AnimatedBackground from "@/components/animated-background"
import AliviolFlashSteps from "@/components/aliviol-flash-steps"
import VideoPlayer from "@/components/video-player"
import CarouselWithEffects from "@/components/carousel-with-effects"

export default function Home() {
  // Referencia al contenedor principal
  const containerRef = useRef<HTMLDivElement>(null)
  // Estado para almacenar las dimensiones del contenedor
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Función para actualizar las dimensiones
  const updateDimensions = () => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      })
    }
  }

  // Efecto para medir el contenedor y configurar un observer
  useEffect(() => {
    // Actualizar dimensiones iniciales
    updateDimensions()

    // Configurar ResizeObserver para detectar cambios en el tamaño del contenedor
    const observer = new ResizeObserver(updateDimensions)

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    // También detectar cambios en el tamaño de la ventana
    window.addEventListener("resize", updateDimensions)

    // Limpiar observer al desmontar
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  return (
    <main
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <CarouselWithEffects/>
      {/* Fondo animado */}
      <AnimatedBackground
        width={dimensions.width}
        height={dimensions.height}
      />

      {/* Capa superior */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          color: "white",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <div style={{ flex: "1 1 50%", zIndex: 10 }}>
                <h1
                  style={{
                    fontSize: "3rem",
                    fontWeight: 900,
                    marginBottom: "1rem",
                    lineHeight: 1.2,
                  }}
                >
                  Quítate el dolor en un Flash
                </h1>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: "2rem",
                  }}
                >
                  Alivio extremo en solo 10 minutos. Práctico, potente y listo
                  para usar.
                </p>
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#DC2626",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.75rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#F3F4F6")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  Descubrí cómo funciona
                </button>
              </div>

              <div
  style={{
    flex: "1 1 50%",
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
  }}
>
  <div style={{ position: "relative", width: "100%", maxWidth: "700px" }}>
    <img
      src="/VALLA MONTAJE_3.png"
      alt="Aliviol Flash Product"
      style={{
        position: "relative",
        zIndex: 10,
        width: "100%",      // que ocupe todo el ancho del contenedor
        height: "auto",     // mantenga la proporción
        display: "block",   // evitar márgenes bajos
      }}
    />
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#FACC15",
        filter: "blur(3rem)",
        opacity: 0.6,
        animation: "pulse 2s infinite",
      }}
    />
  </div>
</div>

            </div>
          </div>
        </section>
        <VideoPlayer/>
        {/* Product Description Section */}
        <section style={{ padding: "4rem 0" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1rem",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(0.25rem)",
                borderRadius: "1rem",
                padding: "2rem",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    marginBottom: "1rem",
                  }}
                >
                  ¿Qué es Aliviol Flash?
                </h2>
                <p
                  style={{
                    fontSize: "1.25rem",
                    maxWidth: "768px",
                    margin: "0 auto",
                  }}
                >
                  Aliviol Flash es un shot bebible de acción rápida que alivia
                  dolores extremos en solo 10 minutos. Sin agua, sin pausas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section style={{ padding: "4rem 0" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1rem",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(0.25rem)",
                borderRadius: "1rem",
                padding: "2rem",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    marginBottom: "1rem",
                  }}
                >
                  El dolor no espera. Tu alivio tampoco.
                </h2>
                <p
                  style={{
                    fontSize: "1.25rem",
                    maxWidth: "768px",
                    margin: "0 auto",
                  }}
                >
                  Aliviol Flash se diferencia por su rapidez comprobada y formato
                  práctico, superando a la competencia.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  color: "#374151",
                  borderRadius: "1rem",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                  padding: "2rem",
                  maxWidth: "1024px",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {[
                    { title: "Aliviol Flash", time: "10 minutos", desc: "Alivio comprobado", color: "#DC2626" },
                    { title: "Competidor A", time: "30+ minutos", desc: "Alivio lento", color: "#6B7280" },
                    { title: "Competidor B", time: "20+ minutos", desc: "Requiere agua", color: "#6B7280" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      style={{
                        textAlign: "center",
                        padding: "1rem",
                        borderBottom: "1px solid #E5E7EB",
                      }}
                    >
                      <div style={{ color: item.color, fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem" }}>
                        {item.title}
                      </div>
                      <div style={{ fontWeight: 900, fontSize: "1.875rem", marginBottom: "0.5rem" }}>
                        {item.time}
                      </div>
                      <p style={{ color: "#6B7280" }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "2rem",
                    padding: "1rem",
                    backgroundColor: "#FEF2F2",
                    borderLeft: "4px solid #DC2626",
                    borderRadius: "0.75rem",
                  }}
                >
                  <p style={{ fontWeight: 700, textAlign: "center" }}>
                    "Un shot bebible que alivia el dolor en solo 10 minutos, sin
                    interrupciones, llevando tu bienestar a donde vayas."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional sections follow the same pattern... */}
        <AliviolFlashSteps/>
        
        {/* Footer */}
        <footer style={{ backgroundColor: "#DC2626", padding: "3rem 0" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1rem",
              color: "white",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem" }}>
              Síguenos en redes sociales
            </h2>
            <p style={{ fontSize: "1rem" }}>Comparte tu experiencia con #AlivioEnUnFlash</p>
          </div>
          <div
            style={{
              maxWidth: "1280px",
              margin: "2rem auto 0 auto",
              padding: "0 1rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "2rem",
              color: "white",
            }}
          >
            {/* Logo y descripción */}
            <div>
              <div style={{ fontWeight: 900, fontSize: "1.5rem", marginBottom: "1rem" }}>
                Alviol<span style={{ color: "#FBBF24" }}>Flash</span>
              </div>
              <p>El alivio ultrarrápido que necesitas para recuperar tu libertad de movimiento.</p>
            </div>
            {/* Enlaces */}
            <div >
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Enlaces</h3>
              {["Inicio", "Beneficios", "Cómo Funciona", "Testimonios", "Comprar"].map((link) => (
                <div key={link} style={{ marginBottom: "0.5rem" }}>
                  <a href={`#${link.toLowerCase()}`} style={{ color: "#D1D5DB", textDecoration: "none" }}
                     onMouseOver={e => e.currentTarget.style.color = "white"}
                     onMouseOut={e => e.currentTarget.style.color = "#D1D5DB"}>
                    {link}
                  </a>
                </div>
              ))}
            </div>
            {/* Contacto */}
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Contacto</h3>
              <div style={{ marginBottom: "0.5rem" }}>
                <span>Email: </span>
                <a href="mailto:info@alviolflash.com" style={{ color: "#D1D5DB", textDecoration: "none" }}
                   onMouseOver={e => e.currentTarget.style.color = "white"}
                   onMouseOut={e => e.currentTarget.style.color = "#D1D5DB"}>
                  info@alviolflash.com
                </a>
              </div>
              <div>
                <span>Teléfono: </span>
                <a href="tel:+34900123456" style={{ color: "#D1D5DB", textDecoration: "none" }}
                   onMouseOver={e => e.currentTarget.style.color = "white"}
                   onMouseOut={e => e.currentTarget.style.color = "#D1D5DB"}>
                  900 123 456
                </a>
              </div>
            </div>
            {/* Redes */}
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Síguenos</h3>
              <div style={{ display: "flex", gap: "1rem" }}>
                {[
                  { href: "#", iconPath: "M22 12..." }, // Completa los paths SVG
                  { href: "#", iconPath: "M12.315..." },
                  { href: "#", iconPath: "M8.29..." },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      backgroundColor: "#1F2937",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#DC2626")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1F2937")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.iconPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid #374151",
              textAlign: "center",
              color: "#9CA3AF",
              fontSize: "0.875rem",
            }}
          >
            <p>© {new Date().getFullYear()} Alviol Flash. Todos los derechos reservados.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "1rem" }}>
              {["Política de Privacidad", "Términos y Condiciones", "Aviso Legal"].map((text) => (
                <a
                  key={text}
                  href="#"
                  style={{ textDecoration: "none", color: "#9CA3AF" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </main>
  )
}
