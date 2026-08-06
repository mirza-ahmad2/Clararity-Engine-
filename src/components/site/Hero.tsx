import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  ctaLabel?: string;
  ctaTo?: string;
  overlay?: string;
  children?: ReactNode;
  /** Full viewport height (default true). */
  fullScreen?: boolean;
  className?: string;
}

export function Hero({
  image,
  imageAlt = "AnaGlynn AI hero background",
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaTo,
  overlay = "from-background/95 via-background/70 to-background/95",
  children,
  fullScreen = true,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden pt-16",
        fullScreen ? "min-h-[100svh] min-h-screen" : "min-h-[70vh]",
        className,
      )}
      aria-label={typeof eyebrow === "string" ? eyebrow : "Hero"}
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} aria-hidden />
      <div className="absolute inset-0 glynn-noise" aria-hidden />
      <div className="container-glynn relative z-10 py-20 text-center md:py-24">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-xs uppercase tracking-[0.25em] text-mint"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.05] text-offwhite md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cool md:text-lg"
        >
          {subtitle}
        </motion.p>
        {ctaLabel && ctaTo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex justify-center"
          >
            <Link
              to={ctaTo}
              className="group inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 font-medium text-primary-foreground transition duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] glynn-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {ctaLabel}
              <ArrowRight
                size={18}
                className="transition duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
