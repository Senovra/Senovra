'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const scrolled = scrollTop / docHeight

      setProgress(scrolled)
      setIsVisible(scrollTop > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // circle math
  const size = 52
  const stroke = 2
  const radius = (size - stroke) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - progress * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50"
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{
            opacity: 0,
            scale: 0.85,
            y: 10,
            transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={scrollToTop}
            className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center group"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
            aria-label="Scroll to top"
          >
            {/* Premium gradient glow on hover */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  'radial-gradient(circle, rgba(125, 211, 252, 0.08) 0%, rgba(167, 139, 250, 0.06) 50%, transparent 70%)',
              }}
            />

            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: '0 0 20px rgba(125, 211, 252, 0.2), 0 0 40px rgba(167, 139, 250, 0.1)',
              }}
            />

            {/* PROGRESS RING */}
            <svg
              className="absolute inset-0 rotate-[-90deg]"
              width={size}
              height={size}
            >
              {/* background ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="rgba(255, 255, 255, 0.06)"
                strokeWidth={stroke}
                fill="none"
              />

              {/* progress ring with gradient */}
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="url(#progressGradient)"
                strokeWidth={stroke}
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{
                  transition: 'stroke-dashoffset 0.15s linear',
                  filter: 'drop-shadow(0 0 4px rgba(125, 211, 252, 0.4))',
                }}
              />
            </svg>

            {/* Icon with gradient */}
            <ArrowUp
              size={16}
              className="relative z-10 text-[#7dd3fc]/70 group-hover:text-[#7dd3fc] transition-all duration-300"
              strokeWidth={2}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(125, 211, 252, 0.3))',
              }}
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}