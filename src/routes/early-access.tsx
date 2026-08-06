import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Instagram, Linkedin, Mail, Check, User, Briefcase } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { pageSeo } from "@/lib/seo";
import { SOCIAL_LINKS } from "@/lib/social";
import heroImg from "@/assets/hero-access.jpg";

export const Route = createFileRoute("/early-access")({
  head: () =>
    pageSeo({
      title: "Get Early Access — AnaGlynn AI",
      description:
        "Join the AnaGlynn AI early access list — for independent artists and for investors.",
      path: "/early-access",
      keywords:
        "AnaGlynn AI early access, artist waitlist, music AI beta, investor music tech, independent artist tools",
    }),
  component: EarlyAccess,
});

type Mode = "artist" | "investor";

function EarlyAccess() {
  const [mode, setMode] = useState<Mode>("artist");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      <Hero
        image={heroImg}
        imageAlt="Abstract glowing sound waves representing AnaGlynn AI early access"
        eyebrow="Get Early Access"
        title={
          <>
            Join the <span className="text-mint">Early Access</span> List.
          </>
        }
        subtitle="Two paths — one for independent artists, one for investors. Pick yours and we'll be in touch."
      />

      <section className="relative z-10 border-t border-border bg-background py-16 md:py-24" aria-labelledby="early-access-form-heading">
        <div className="container-glynn">
          <h2 id="early-access-form-heading" className="sr-only">
            Early access signup form
          </h2>

          <div className="mx-auto w-full max-w-2xl rounded-3xl border border-border bg-surface p-6 shadow-[0_0_60px_-28px_rgba(63,224,160,0.35)] md:p-10">
            <div
              className="mb-8 grid grid-cols-2 rounded-full bg-background p-1"
              role="tablist"
              aria-label="Signup type"
            >
              {(["artist", "investor"] as Mode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  role="tab"
                  aria-selected={mode === m}
                  onClick={() => {
                    setMode(m);
                    setSubmitted(false);
                  }}
                  className={`flex items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium transition duration-300 sm:px-4 ${
                    mode === m
                      ? "bg-mint text-primary-foreground shadow-sm"
                      : "text-cool hover:text-offwhite"
                  }`}
                >
                  {m === "artist" ? <User size={16} aria-hidden /> : <Briefcase size={16} aria-hidden />}
                  <span className="truncate">{m === "artist" ? "I'm an Artist" : "I'm an Investor"}</span>
                </button>
              ))}
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="py-10 text-center"
                role="status"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-mint/20 text-mint">
                  <Check size={26} aria-hidden />
                </div>
                <h3 className="mb-2 font-display text-2xl font-bold text-offwhite">You're on the list.</h3>
                <p className="text-cool">
                  We'll reach out personally when the next {mode === "artist" ? "artist" : "investor"} slot
                  opens.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                {mode === "artist" ? (
                  <Field
                    label="Artist / Label / Manager"
                    name="role"
                    placeholder="e.g. Solo artist, independent label, artist manager"
                    required
                  />
                ) : (
                  <Field
                    label="Firm / Focus"
                    name="firm"
                    placeholder="e.g. VC firm, angel, focus areas"
                    required
                  />
                )}
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-cool">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={
                      mode === "artist"
                        ? "Tell us about your next release, or what you struggle with most."
                        : "Tell us about your fund and what you're looking for."
                    }
                    className="w-full rounded-xl border border-border bg-background p-4 text-sm text-offwhite transition duration-300 placeholder:text-cool/60 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint px-6 py-3.5 font-medium text-primary-foreground transition duration-300 hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] glynn-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {mode === "artist" ? "Join Early Access" : "Request Investor Conversation"}
                </button>
                <p className="text-center text-xs text-cool">
                  No spam. Static form — we read every submission personally.
                </p>
              </form>
            )}
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-2xl gap-3 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-4 py-4 text-sm text-offwhite/80">
              <Instagram size={16} aria-hidden /> Instagram — Add here
            </div>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-4 py-4 text-sm text-offwhite transition duration-300 hover:border-mint/40 hover:text-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/50"
            >
              <Linkedin size={16} aria-hidden /> LinkedIn
            </a>
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-4 py-4 text-sm text-offwhite/80">
              <Mail size={16} aria-hidden /> Email — Add here
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-widest text-cool">
        {label}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-border bg-background p-4 text-sm text-offwhite transition duration-300 placeholder:text-cool/60 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"
      />
    </div>
  );
}
