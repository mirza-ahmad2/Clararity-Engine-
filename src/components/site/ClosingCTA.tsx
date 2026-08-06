import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Props {
  title?: string;
  subtitle?: string;
  cta?: string;
  to?: string;
}
export function ClosingCTA({
  title = "Ready to release with clarity?",
  subtitle = "Join the early access list and be one of the first artists to use AnaGlynn AI.",
  cta = "Get Early Access",
  to = "/early-access",
}: Props) {
  return (
    <section className="py-24" aria-labelledby="closing-cta-heading">
      <div className="container-glynn">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-mint/30 bg-gradient-to-br from-mint/20 via-surface to-surface p-12 text-center md:p-20"
        >
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-mint/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-mint/10 blur-3xl" aria-hidden />
          <h2
            id="closing-cta-heading"
            className="relative mx-auto max-w-3xl font-display text-3xl font-bold text-offwhite md:text-5xl"
          >
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-cool">{subtitle}</p>
          <Link
            to={to}
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 font-medium text-primary-foreground transition duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] glynn-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            {cta}
            <ArrowRight size={18} aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
