"use client"

import { motion, useScroll } from "framer-motion"
import { useReducedMotion } from "framer-motion"

interface ScrollProgressProps {
  color?: string
  height?: number
  zIndex?: number
}

export function ScrollProgress({ color = "#DC2626", height = 4, zIndex = 50 }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 origin-left"
      style={{
        height,
        background: `linear-gradient(90deg, ${color}, #2563EB)`,
        scaleX: scrollYProgress,
        zIndex,
      }}
    />
  )
}
