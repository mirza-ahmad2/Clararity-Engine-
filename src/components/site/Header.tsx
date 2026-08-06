import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/for-artists", label: "For Artists" },
  { to: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl transition-colors">
      <div className="container-glynn flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-sm text-cool transition-colors duration-300 hover:text-offwhite after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-mint after:transition-all after:duration-300 hover:after:w-full"
              activeProps={{
                className:
                  "relative text-sm text-mint after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-mint",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/early-access"
          className="hidden items-center rounded-full bg-mint px-4 py-2 text-sm font-medium text-primary-foreground transition duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] md:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Get Early Access
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-offwhite transition hover:bg-surface md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <div className="container-glynn flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-cool transition hover:bg-surface hover:text-offwhite"
                activeProps={{ className: "rounded-lg px-3 py-3 text-mint bg-mint/5" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/early-access"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-mint px-4 py-2.5 font-medium text-primary-foreground transition hover:brightness-110"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
