import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Upload, Sparkles, MessageSquareText, Compass } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-how.jpg";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    pageSeo({
      title: "How It Works — AnaGlynn AI",
      description:
        "From upload to release: how AnaGlynn AI turns your track into a pitch, ready-to-post content, and a structured next step.",
      path: "/how-it-works",
      keywords:
        "how AnaGlynn AI works, AI music pitch, release content, music marketing steps, independent artist workflow",
    }),
  component: HowItWorks,
});

const steps = [
  {
    n: "01",
    icon: Upload,
    title: "Upload Your Track",
    body: "Drop your song into AnaGlynn AI. No lengthy briefs, no filling in genre taxonomies you don't identify with. The track is the starting point — everything else builds from what you actually made.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "AI-Generated Pitch",
    body: "You get a clear pitch for your release: what the song is, who it's for, and why it matters right now. The kind of one-liner that turns a DM to a curator or a caption into something people actually click on.",
  },
  {
    n: "03",
    icon: MessageSquareText,
    title: "Ready-to-Post Content",
    body: "Captions, hooks, story angles, and short-form ideas — written to sound like you, not like a template. Post them straight to your feed or use them as prompts for your own voice.",
  },
  {
    n: "04",
    icon: Compass,
    title: "Structured Release Direction",
    body: "A clear sense of what to do next — not a 40-page marketing plan, but a real, sequenced direction so release week stops feeling like guessing.",
  },
];

function HowItWorks() {
  return (
    <SiteLayout>
      <Hero
        image={heroImg}
        imageAlt="Artist working in a studio with audio waveforms on a laptop"
        eyebrow="How It Works"
        title={
          <>
            From <span className="text-mint">finished song</span> to released song.
          </>
        }
        subtitle="Four steps. No dashboards to master, no marketing degree required. Just clarity where release day used to be confusion."
      />

      <section className="py-24" aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="sr-only">
          The four steps
        </h2>
        <div className="container-glynn space-y-24">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`grid items-center gap-10 lg:grid-cols-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-5">
                <div className="relative flex aspect-square max-w-md items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface p-10 transition duration-500 hover:border-mint/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-transparent to-transparent" aria-hidden />
                  <div className="absolute -inset-1 bg-mint/5 blur-3xl" aria-hidden />
                  <s.icon size={72} className="relative text-mint" strokeWidth={1.25} aria-hidden />
                  <span className="absolute left-6 top-6 font-display text-2xl font-bold text-mint/60">{s.n}</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-mint">Step {s.n}</p>
                <h3 className="mb-5 font-display text-3xl font-bold leading-tight text-offwhite md:text-5xl">
                  {s.title}
                </h3>
                <p className="max-w-xl text-lg leading-relaxed text-cool">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ClosingCTA
        title="Confusion in. Clarity out."
        subtitle="See it for yourself in the early access phase."
      />
    </SiteLayout>
  );
}
