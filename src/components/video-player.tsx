"use client";
import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(0.25rem)",
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
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 900,
              marginBottom: "1rem",
              color: "white",
            }}
          >
            Conoce más sobre Aliviol Flash
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              maxWidth: "768px",
              margin: "0 auto",
              color: "white",
            }}
          >
            Mira nuestro video para entender cómo Aliviol Flash puede cambiar tu experiencia con el dolor.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            position: "relative",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
          }}
        >
          {/* Video element */}
          <video
            ref={videoRef}
            poster="/placeholder.svg?height=720&width=1280"
            style={{
              width: "100%",
              aspectRatio: "16/9",
              backgroundColor: "black",
              display: "block",
            }}
          >
            <source src="/ANIMACION ALIVIOL FLASH MARZO.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>

          {/* Custom controls */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            }}
          >
            <button
              onClick={togglePlay}
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                backgroundColor: "#DC2626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginRight: "1rem",
              }}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "1.25rem", height: "1.25rem" }}
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "1.25rem", height: "1.25rem" }}
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>

            <button
              onClick={toggleMute}
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                backgroundColor: "rgba(55,65,81,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginRight: "auto",
              }}
            >
              {isMuted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "1rem", height: "1rem" }}
                >
                  <line x1="1" y1="1" x2="23" y2="23" />
                  <path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6" />
                  <path d="M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "1rem", height: "1rem" }}
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 000 14.14M15.54 8.46a5 5 0 000 7.07" />
                </svg>
              )}
            </button>

            <div style={{ color: "white", fontSize: "0.875rem" }}>
              Aliviol Flash – Spot Oficial
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
