import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { EyeOff, Compass, Repeat, HeartHandshake } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { StatCallout } from "@/components/site/StatCallout";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-artists.jpg";

export const Route = createFileRoute("/for-artists")({
  head: () =>
    pageSeo({
      title: "For Artists — AnaGlynn AI",
      description:
        "Built for independent artists without label marketing support. Stop guessing what to post around your release.",
      path: "/for-artists",
      keywords:
        "for independent artists, music release help, what to post after release, artist marketing AI, independent musician tools",
    }),
  component: ForArtists,
});

const problems = [
  { icon: EyeOff, title: "Feeling invisible after a release", body: "You put out the song. Then… nothing. No clear next move, no idea why the numbers didn't move." },
  { icon: Compass, title: "No idea what to actually post", body: "You know you 'should be posting'. You don't know what, in what voice, or in what order." },
  { icon: Repeat, title: "Guessing week after week", body: "Every release becomes a re-invention. No repeatable rhythm, no direction — just vibes and stress." },
  { icon: HeartHandshake, title: "No label marketing team", body: "You're doing artist, marketer, editor and manager. You didn't sign up to be all four." },
];

function ForArtists() {
  return (
    <SiteLayout>
      <Hero
        image={heroImg}
        imageAlt="Independent musician preparing a release with AnaGlynn AI"
        eyebrow="For Artists"
        title={
          <>
            For independents who are <span className="text-mint">tired of guessing.</span>
          </>
        }
        subtitle="Independent musicians without label marketing support. Artists who feel invisible after a release. Anyone tired of asking 'what am I supposed to post today?'"
        ctaLabel="Get Early Access"
        ctaTo="/early-access"
      />

      <section className="py-24" aria-labelledby="problem-heading">
        <div className="container-glynn">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-mint">The real problem</p>
            <h2 id="problem-heading" className="font-display text-3xl font-bold leading-tight text-offwhite md:text-5xl">
              The song was never the hard part. <span className="text-mint">The release was.</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-border bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-mint/40"
              >
                <p.icon size={22} className="mb-4 text-mint" aria-hidden />
                <h3 className="mb-2 font-display text-xl font-bold text-offwhite">{p.title}</h3>
                <p className="text-sm leading-relaxed text-cool">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatCallout>
        People don't connect to <span className="text-mint">perfect music.</span>
        <br />
        They connect to <span className="text-mint">real stories.</span>
      </StatCallout>

      <section className="py-16" aria-labelledby="fit-heading">
        <h2 id="fit-heading" className="sr-only">
          Who AnaGlynn AI is for
        </h2>
        <div className="container-glynn grid gap-8 md:grid-cols-3">
          {[
            { k: "Written for", v: "Independent musicians" },
            { k: "Built around", v: "Real release-day workflow" },
            { k: "Voice", v: "Yours — not generic AI" },
          ].map((c) => (
            <div
              key={c.k}
              className="rounded-2xl border border-border bg-background p-8 transition duration-300 hover:border-mint/30"
            >
              <p className="text-xs uppercase tracking-widest text-cool">{c.k}</p>
              <p className="mt-2 font-display text-2xl text-offwhite">{c.v}</p>
            </div>
          ))}
        </div>
      </section>

      <ClosingCTA
        title="You made the song. We'll help you release it."
        subtitle="Get early access and use AnaGlynn AI on your next drop."
      />
    </SiteLayout>
  );
}
