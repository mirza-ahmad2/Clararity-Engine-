import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  index?: number;
}

export function ProductStepCard({ icon: Icon, step, title, description, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative h-full rounded-2xl border border-border bg-surface p-8 transition duration-300 hover:border-mint/40 hover:shadow-[0_0_40px_-20px_rgba(63,224,160,0.45)]"
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-cool">{step}</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-soft text-mint transition duration-300 group-hover:bg-mint group-hover:text-primary-foreground">
          <Icon size={20} aria-hidden />
        </div>
      </div>
      <h3 className="mb-3 font-display text-2xl font-bold text-offwhite">{title}</h3>
      <p className="text-sm leading-relaxed text-cool">{description}</p>
    </motion.div>
  );
}
