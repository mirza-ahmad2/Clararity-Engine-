import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Upload, Sparkles, MessageSquareText, Compass, ArrowRight, Music4, Code2, Mic2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { StatCallout } from "@/components/site/StatCallout";
import { ProductStepCard } from "@/components/site/ProductStepCard";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "AnaGlynn AI — Elevate Your Sound",
      description:
        "Upload a song. Get a clear pitch, ready-to-post content, and structured next steps. AI release companion for independent artists.",
      path: "/",
    }),
  component: Home,
});

const steps = [
  { icon: Upload, step: "01", title: "Upload Your Track", description: "Drop in your song. That's the whole starting point — no forms, no guessing what to fill in." },
  { icon: Sparkles, step: "02", title: "Get Your Pitch", description: "A clear positioning line for your release: what it is, who it's for, and why it matters right now." },
  { icon: MessageSquareText, step: "03", title: "Get Your Content", description: "Ready-to-post captions, hooks and story angles — in your voice, not generic marketing speak." },
  { icon: Compass, step: "04", title: "Know What's Next", description: "A structured release direction so you always know the next step, not just the finished song." },
];

function Home() {
  return (
    <SiteLayout>
      <Hero
        image={heroImg}
        imageAlt="Studio atmosphere with glowing sound visuals for AnaGlynn AI"
        eyebrow="Elevate Your Sound"
        title={<>Upload a Song. Get <span className="text-mint">Clarity</span>, Not Confusion.</>}
        subtitle="AnaGlynn AI turns your release into a clear pitch, ready-to-post content, and a structured next step — built by an artist who's also an engineer."
        ctaLabel="Get Early Access"
        ctaTo="/early-access"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-widest text-cool sm:gap-6"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" aria-hidden /> MVP live
          </span>
          <span className="hidden h-4 w-px bg-border sm:inline" aria-hidden />
          <span>Pilot testing with real artists</span>
          <span className="hidden h-4 w-px bg-border md:inline" aria-hidden />
          <span className="hidden md:inline">Based in Germany</span>
        </motion.div>
      </Hero>

      <StatCallout>
        Artists Don't Need More Tools. <span className="text-mint">They Need Clarity.</span>
      </StatCallout>

      <section className="py-20" aria-labelledby="how-preview-heading">
        <div className="container-glynn">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-mint">How It Works</p>
              <h2 id="how-preview-heading" className="max-w-xl font-display text-3xl font-bold leading-tight text-offwhite md:text-5xl">
                Four steps between a finished song and a released one.
              </h2>
            </div>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-sm text-mint transition duration-300 hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/50"
            >
              See the full flow <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <ProductStepCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40 py-24" aria-labelledby="why-heading">
        <div className="container-glynn grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-mint">Why AnaGlynn AI</p>
            <h2 id="why-heading" className="font-display text-3xl font-bold leading-tight text-offwhite md:text-5xl">
              Built by <span className="text-mint">both sides</span> of the release day.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-cool lg:col-span-7">
            <p>
              Most music tools are built by engineers who don't understand artists, or artists who don't understand systems.
            </p>
            <p className="text-offwhite">
              AnaGlynn AI is built by someone who's genuinely both — a computer science engineer with experience at Deloitte and in Flutter development, and a working singer and vocal coach with 30K+ followers as an artist.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: Mic2, label: "Real artist" },
                { icon: Code2, label: "Real engineer" },
                { icon: Music4, label: "Real problem" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border p-4 text-center transition duration-300 hover:border-mint/40 hover:-translate-y-0.5"
                >
                  <Icon className="mx-auto mb-2 text-mint" size={20} aria-hidden />
                  <p className="text-xs uppercase tracking-widest text-offwhite">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        title="Elevate your sound. Skip the guessing."
        subtitle="Be one of the first independent artists to use AnaGlynn AI in the early access phase."
      />
    </SiteLayout>
  );
}
