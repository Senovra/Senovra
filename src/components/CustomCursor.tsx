"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // ONLY disable on actual mobile/tablet coarse-pointer devices
    const isMobilePointer = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!isMobilePointer);
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.style.cursor = "auto";
      return;
    }

    document.body.style.cursor = "none";

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let isHovering = false;
    let rafId: number;

    // Faster + smoother tracking
    const ringSpeed = 0.22;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Instant dot movement (NO framer-motion lag)
      dot.style.transform = `translate3d(${mouseX - 3}px, ${
        mouseY - 3
      }px, 0) scale(${isHovering ? 0 : 1})`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("a, button, [role='button']")) {
        isHovering = true;

        ring.style.transform = `translate3d(${ringX - 20}px, ${
          ringY - 20
        }px, 0) scale(1.5)`;

        dot.style.transform = `translate3d(${mouseX - 3}px, ${
          mouseY - 3
        }px, 0) scale(0)`;
      } else {
        isHovering = false;

        ring.style.transform = `translate3d(${ringX - 20}px, ${
          ringY - 20
        }px, 0) scale(1)`;

        dot.style.transform = `translate3d(${mouseX - 3}px, ${
          mouseY - 3
        }px, 0) scale(1)`;
      }
    };

    const animate = () => {
      // Smooth interpolation
      ringX += (mouseX - ringX) * ringSpeed;
      ringY += (mouseY - ringY) * ringSpeed;

      ring.style.transform = `translate3d(${ringX - 20}px, ${
        ringY - 20
      }px, 0) scale(${isHovering ? 1.5 : 1})`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, {
      passive: true,
    });

    window.addEventListener("mouseover", onMouseOver, {
      passive: true,
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "auto";

      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);

      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#7dd3fc] pointer-events-none z-[9999] will-change-transform"
        style={{
          transform: "translate3d(-100px,-100px,0)",
        }}
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#7dd3fc]/50 pointer-events-none z-[9999] will-change-transform"
        style={{
          transform: "translate3d(-100px,-100px,0)",
        }}
      />
    </>
  );
}