import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoLight from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  to?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-11 w-11",
};

export function Logo({
  className,
  showWordmark = true,
  to = "/",
  size = "sm",
}: LogoProps) {
  const mark = (
    <span className={cn("relative inline-flex shrink-0 items-center justify-center", sizes[size])}>
      <img
        src={logoLight}
        alt="AnaGlynn AI Logo - Stylized letter A with green heartbeat waveform"
        width={36}
        height={36}
        className="relative z-10 h-full w-full object-contain logo-glow"
        decoding="async"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-mint/25 blur-md opacity-70 transition-opacity duration-300 group-hover:opacity-100"
      />
    </span>
  );

  if (!to) {
    return (
      <span className={cn("group inline-flex items-center gap-2.5", className)}>
        {mark}
        {showWordmark && (
          <span className="font-display font-bold tracking-tight text-offwhite">AnaGlynn AI</span>
        )}
      </span>
    );
  }

  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label="AnaGlynn AI home"
    >
      {mark}
      {showWordmark && (
        <span className="font-display font-bold tracking-tight text-offwhite transition-colors group-hover:text-mint">
          AnaGlynn AI
        </span>
      )}
    </Link>
  );
}
