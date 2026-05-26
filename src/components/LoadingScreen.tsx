"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{
            y: "-110%",
            transition: {
              duration: 1.4,
              ease: [0.76, 0, 0.24, 1], // smoother "cinematic lift"
            },
          }}
          className="fixed inset-0 z-[9999] bg-dark-900 flex items-center justify-center"
        >
          {/* Cinematic Glow Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-[#7dd3fc]/20 via-[#a78bfa]/20 to-[#c084fc]/20 rounded-full blur-[120px] animate-pulse" />
          </div>

          <div className="relative flex flex-col items-center justify-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.6,
                delay: 0.2,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="relative w-44 h-44 mb-8"
            >
              <Image
                src="/logo2.png"
                alt="Senovra"
                fill
                className="object-contain"
                style={{
                  filter: "drop-shadow(0 0 40px rgba(125, 211, 252, 0.3))",
                }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <p className="font-display text-lg tracking-wide gradient-text font-medium">
                Your Vision. Perfected.
              </p>
            </motion.div>

            {/* Loading Bar */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 0.3,
                  duration: 2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full bg-gradient-to-r from-[#7dd3fc] via-[#a78bfa] to-[#c084fc]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}