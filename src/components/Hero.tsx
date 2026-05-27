"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const words = [
    "Modern Websites That Perform",
    "Digital Experiences That Scale",
    "High-Performance Web Systems",
    "Engineering Premium Interfaces",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((v) => v + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((v) => v - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setWordIndex((v) => (v + 1) % words.length);
        }
      }
    }, deleting ? 40 : 70);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: any[] = [];
    const particleCount = 50;

    let mouseX = 0;
    let mouseY = 0;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.x -= (dx / distance) * force * 1.5;
          this.y -= (dy / distance) * force * 1.5;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 3
        );

        gradient.addColorStop(0, `rgba(125, 211, 252, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(167, 139, 250, 0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (gridRef.current) {
        const x = (mouseX / window.innerWidth) * 100;
        const y = (mouseY / window.innerHeight) * 100;
        gridRef.current.style.backgroundPosition = `${x}px ${y}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8 },
    }),
  };

  const tech = [
    "Next.js","React","Node.js","Python","Java","PHP","Laravel",
    "AWS","Docker","MongoDB","PostgreSQL","TypeScript","GraphQL"
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">

      {/* GRID */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* GLOW */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#7dd3fc]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#a78bfa]/10 blur-[140px] rounded-full" />
      </div>

      {/* EYEBROW */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 
        text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-white/40 z-20 whitespace-nowrap"
      >
        <div className="h-px w-5 sm:w-10 bg-gradient-to-r from-transparent to-[#7dd3fc]" />
        Senovra · Since 2020
        <div className="h-px w-5 sm:w-10 bg-gradient-to-l from-transparent to-[#a78bfa]" />
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-5xl w-full mx-auto text-center relative z-10 pt-28 sm:pt-32">

        {/* TYPEWRITER */}
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-[1.1]">
          {text.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] bg-clip-text text-transparent">
            {text.split(" ").slice(-2).join(" ")}
          </span>
          <span className="text-[#7dd3fc] animate-pulse">|</span>
        </motion.h1>

        {/* SUBTITLE */}
        <p className="text-sm sm:text-base md:text-lg text-[#a1a1aa] mb-8 sm:mb-10 max-w-xl mx-auto px-2">
          We engineer high-performance web solutions for ambitious businesses that demand speed, precision and scale.
        </p>

        {/* ICON STRIP (RESTORED LABELS) */}
        <div className="flex justify-center gap-5 sm:gap-8 mb-10 text-white/50">
          {[
            { icon: Code, text: "Development" },
            { icon: Layers, text: "Scalable" },
            { icon: Zap, text: "Performance" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-[10px] sm:text-xs gap-1">
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#7dd3fc]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center px-2 mb-12">
          <a
            href="/about"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm bg-gradient-to-r from-[#7dd3fc]/20 to-[#a78bfa]/20 border border-white/10 backdrop-blur-md w-full sm:w-auto"
          >
            Discover Senovra →
          </a>

          <a
            href="/portfolio"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm border border-white/10 hover:bg-white/5 w-full sm:w-auto"
          >
            Our Portfolio
          </a>
        </div>

        {/* CONVEYOR */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
          <div className="flex w-max gap-4 animate-[marquee_22s_linear_infinite]">
            {[...tech, ...tech].map((t, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 whitespace-nowrap"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}
