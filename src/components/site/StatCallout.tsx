import { motion } from "motion/react";

export function StatCallout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-glynn">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-center max-w-5xl mx-auto"
        >
          {children}
        </motion.h2>
      </div>
    </section>
  );
}
