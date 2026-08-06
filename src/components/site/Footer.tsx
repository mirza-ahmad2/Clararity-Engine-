import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { SOCIAL_LINKS } from "@/lib/social";

const explore = [
  ["/", "Home"],
  ["/how-it-works", "How It Works"],
  ["/for-artists", "For Artists"],
  ["/about", "About"],
  ["/early-access", "Get Early Access"],
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-glynn grid gap-12 py-16 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cool">
            Elevate your sound. Built by an artist who's also an engineer.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-cool">Explore</p>
          <ul className="space-y-2 text-sm">
            {explore.map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-offwhite/80 transition duration-300 hover:text-mint focus-visible:outline-none focus-visible:text-mint"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-cool">Connect</p>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="inline-flex items-center gap-2 text-offwhite/80">
                <Instagram size={16} aria-hidden />
                Instagram — Add here
              </span>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-offwhite/80 transition duration-300 hover:text-mint focus-visible:outline-none focus-visible:text-mint"
              >
                <Linkedin size={16} aria-hidden /> LinkedIn
              </a>
            </li>
            <li>
              <span className="inline-flex items-center gap-2 text-offwhite/80">
                <Mail size={16} aria-hidden />
                Email — Add here
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-cool">Based in</p>
          <p className="text-sm text-offwhite/80">Germany · Building in public</p>
          <p className="mt-6 text-xs text-cool">
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mint transition hover:underline focus-visible:outline-none focus-visible:underline"
            >
              The Innovations
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-glynn flex flex-col justify-between gap-2 py-6 text-xs text-cool md:flex-row">
          <p>© {new Date().getFullYear()} AnaGlynn AI. All rights reserved.</p>
          <p>Elevate Your Sound.</p>
        </div>
      </div>
    </footer>
  );
}
