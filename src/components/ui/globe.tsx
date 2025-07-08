"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

// Fallback SVG Globe Component
function FallbackGlobe({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="animate-spin-slow"
      >
        <defs>
          <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        {/* Globe circle */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#globeGradient)"
          stroke="#1E40AF"
          strokeWidth="2"
          opacity="0.8"
        />
        {/* Grid lines */}
        <g stroke="#1E40AF" strokeWidth="1" opacity="0.6" fill="none">
          {/* Horizontal lines */}
          <ellipse cx="200" cy="200" rx="180" ry="60" />
          <ellipse cx="200" cy="200" rx="180" ry="120" />
          <line x1="20" y1="200" x2="380" y2="200" />
          
          {/* Vertical lines */}
          <ellipse cx="200" cy="200" rx="60" ry="180" />
          <ellipse cx="200" cy="200" rx="120" ry="180" />
          <line x1="200" y1="20" x2="200" y2="380" />
        </g>
        {/* Location markers */}
        <circle cx="150" cy="120" r="4" fill="#F59E0B" />
        <circle cx="250" cy="140" r="4" fill="#F59E0B" />
        <circle cx="180" cy="180" r="4" fill="#F59E0B" />
        <circle cx="220" cy="220" r="4" fill="#F59E0B" />
        <circle cx="120" cy="240" r="4" fill="#F59E0B" />
        <circle cx="280" cy="260" r="4" fill="#F59E0B" />
      </svg>
    </div>
  )
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Client-side only rendering
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, number>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
    },
    [r],
  )

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return
    
    let globe: { destroy: () => void } | null = null
    let animationId: number | undefined

    const initGlobe = async () => {
      try {
        const canvas = canvasRef.current
        if (!canvas) return

        // Get canvas dimensions
        const rect = canvas.getBoundingClientRect()
        const size = Math.min(rect.width || 600, rect.height || 600)

        globe = createGlobe(canvas, {
          ...config,
          width: size * 2,
          height: size * 2,
          onRender,
        })

        // Show canvas after globe is created
        setTimeout(() => {
          if (canvas) {
            canvas.style.opacity = "1"
          }
        }, 100)

      } catch (error) {
        console.error("Globe initialization error:", error)
        setHasError(true)
      }
    }

    // Wait for canvas to be ready
    const timer = setTimeout(initGlobe, 50)

    return () => {
      clearTimeout(timer)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (globe) {
        try {
          globe.destroy()
        } catch (error) {
          console.error("Globe cleanup error:", error)
        }
      }
    }
  }, [isMounted, onRender, config])

  // Show fallback only if there's an error, not during loading
  if (hasError) {
    return <FallbackGlobe className={className} />
  }

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        width={600}
        height={600}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
} 