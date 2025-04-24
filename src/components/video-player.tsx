"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false)
    }

    const video = videoRef.current
    if (video) {
      video.addEventListener("ended", handleEnded)
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded)
      }
    }
  }, [])

  return (
    <div className="relative max-w-3xl mx-auto overflow-hidden rounded-lg shadow-xl">
      <motion.div className="relative" onHoverStart={() => setIsHovering(true)} onHoverEnd={() => setIsHovering(false)}>
        {/* Video Element */}
        <video ref={videoRef} className="w-full h-auto" poster="/placeholder.svg?height=720&width=1280" playsInline>
          <source src="ANIMACION ALIVIOL FLASH MARZO.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hover Animations */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Top-left flash animation */}
          

          {/* Bottom-right speed lines */}
          <motion.div
            className="absolute bottom-10 right-10 w-32 h-32 opacity-70"
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: isHovering ? [0, 0.7, 0] : 0,
              x: isHovering ? [20, 0, -20] : 20,
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 bg-white rounded-full"
                style={{
                  width: `${80 - i * 10}px`,
                  top: `${i * 8}px`,
                  right: `${i * 5}px`,
                  transform: `rotate(-${i * 3}deg)`,
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: isHovering ? [0, 1, 0] : 0,
                  x: isHovering ? [20, 0, -20] : 20,
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            ))}
          </motion.div>

          {/* Product name flash animation */}
          
        </motion.div>

        {/* Play Button Overlay */}
        <motion.div
          className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="flex items-center justify-center w-20 h-20 bg-red-600 rounded-full text-white shadow-lg"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 170, 0, 0.7)",
              background: "linear-gradient(135deg, #ff0000 0%, #ff8800 100%)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
          >
            <Play className="w-10 h-10 ml-1" />
          </motion.button>
        </motion.div>

        {/* Controls when playing */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-between ${
            isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isPlaying ? (isHovering ? 1 : 0) : 0,
            y: isPlaying ? (isHovering ? 0 : 20) : 20,
          }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-full text-white"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>

          <div className="text-white font-bold">
            <span className="text-red-600">Aliviol</span> <span className="text-yellow-400">Flash</span>
          </div>

          <button
            className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-full text-white"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}
