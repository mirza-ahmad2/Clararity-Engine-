import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mic2, Code2, Compass, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      title: "About Anagheem — AnaGlynn AI",
      description:
        "Anagheem Azzam — software engineer and working singer building the release companion she needed as an artist.",
      path: "/about",
      keywords:
        "Anagheem Azzam, AnaGlynn AI founder, artist engineer, music AI founder, vocal coach Germany",
    }),
  component: About,
});

const values = [
  { icon: Mic2, title: "Real artist experience", body: "30K+ followers as a working singer and vocal coach. The problem is lived, not imagined." },
  { icon: Code2, title: "Real technical expertise", body: "BSc Computer Science, ex-Deloitte, Flutter developer. The build is engineered, not glued together." },
  { icon: Compass, title: "Clarity over more tools", body: "Artists don't need another dashboard. They need to know what to do next." },
  { icon: Sparkles, title: "Built from a genuine unmet need", body: "Nothing on the market solves this for independents. So we're building it." },
];

function About() {
  return (
    <SiteLayout>
      <Hero
        image={heroImg}
        imageAlt="Founder Anagheem Azzam working between monitors with code and audio waveforms"
        eyebrow="About the Founder"
        title={
          <>
            Anagheem Azzam — <span className="text-mint">engineer, artist,</span> founder.
          </>
        }
        subtitle="A rare dual background: a computer science engineer who's also a working singer and vocal coach. Building AnaGlynn AI from both sides of the release-day problem."
      />

      <section className="py-24" aria-labelledby="story-heading">
        <div className="container-glynn grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-mint">The story</p>
            <h2 id="story-heading" className="font-display text-3xl font-bold leading-tight text-offwhite md:text-5xl">
              Two worlds. <span className="text-mint">One tool.</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-cool lg:col-span-7">
            <p>
              Anagheem trained as a software engineer — a BSc in Computer Science, a Berater role at Deloitte, and Flutter development experience. On paper, a pure technologist.
            </p>
            <p>
              But she's also a real singer and vocal coach based in Germany, with 30,000+ followers as a working artist. She's lived the release-day panic: the finished song, the empty content calendar, the not-knowing what to post or say.
            </p>
            <p className="text-offwhite">
              "Most tools are built by engineers who don't understand artists, or artists who don't understand systems. We're building both."
            </p>
            <p>
              That's the whole point of AnaGlynn AI — artist instinct, technical depth, and prompt engineering in the same product, made by the same person.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40 py-16" aria-labelledby="values-heading">
        <div className="container-glynn">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-mint">What we believe</p>
            <h2 id="values-heading" className="font-display text-3xl font-bold leading-tight text-offwhite md:text-5xl">
              Values that shape the product.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-2xl border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-mint/40"
              >
                <v.icon size={22} className="mb-4 text-mint" aria-hidden />
                <h3 className="mb-2 font-display text-lg font-bold text-offwhite">{v.title}</h3>
                <p className="text-sm leading-relaxed text-cool">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="now-heading">
        <div className="container-glynn">
          <div className="rounded-3xl border border-border bg-surface p-10 md:p-14">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-mint">Where we are now</p>
            <h2 id="now-heading" className="max-w-3xl font-display text-2xl font-bold leading-tight text-offwhite md:text-4xl">
              MVP built. First pilots run with real artists. Actively raising to scale the next phase.
            </h2>
            <p className="mt-4 max-w-2xl text-cool">
              We're early. That's the honest version. There's no thousand-user vanity number to quote — just a product that works, real artists testing it, and a founder building the next stage in the open.
            </p>
          </div>
        </div>
      </section>

      <ClosingCTA
        title="Want to build alongside us?"
        subtitle="Join the early access list — or, if you invest, reach out on the investor path."
      />
    </SiteLayout>
  );
}
