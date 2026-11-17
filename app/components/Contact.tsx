"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

const socials = [
  { label: "Email",    value: "tulsimani04@gmail.com",          href: "mailto:tulsimani04@gmail.com" },
  // { label: "Phone",    value: "+91 93266 36546",                href: "tel:+919326636546" },
  { label: "LinkedIn", value: "linkedin.com/in/tulsimani-kumar", href: "https://www.linkedin.com/in/tulsimani-kumar" },
  { label: "GitHub",   value: "github.com/tulsi2004",           href: "https://github.com/tulsi2004" },
];

const initial: ContactState = { success: false, error: "" };

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initial);
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setShowSuccess(true);
      const t = setTimeout(() => setShowSuccess(false), 4000);
      return () => clearTimeout(t);
    }
  }, [state.success]);

  return (
    <section id="contact" className="theme-ink py-16 md:py-28 px-6 bg-background text-foreground">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="06"
          title="Contact"
          subtitle="Whether it's a project, a conversation, or just a hello — I'm always open to connecting."
        />

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 reveal">
          {/* Links + quote */}
          <div className="min-w-0">
            <p className="font-body text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-7">
              Get in Touch
            </p>
            <div className="space-y-4 mb-10">
              {socials.map(({ label, value, href }, si) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{ background: ["#f6b3c6", "#7ec8f2", "#f5cf5c"][si % 3] }}
                  className="flex items-center gap-4 rounded-full border-2 border-[#1f1a17] px-5 py-3 text-[#1f1a17] shadow-[4px_4px_0_0_#fcf8ed] transition-transform duration-200 hover:-translate-y-0.5 hover:-rotate-1 group"
                >
                  <span className="hidden sm:inline font-body text-[10px] tracking-widest uppercase w-20 shrink-0 opacity-70">
                    {label}
                  </span>
                  <span className="font-body text-sm truncate">
                    {value}
                  </span>
                  <span className="ml-auto transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
            <div className="border-t border-border pt-8">
              <p className="font-heading italic font-light text-2xl text-muted-foreground leading-relaxed">
                &ldquo;Let&apos;s build something
                <br />
                worth remembering.&rdquo;
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border-2 border-border bg-card p-6 sm:p-8 shadow-[6px_6px_0_0_#f5cf5c]">
            <p className="font-body text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-7">
              Send a Message
            </p>
            <form ref={formRef} action={formAction} className="space-y-3.5">
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="font-body text-sm bg-card"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="font-body text-sm bg-card"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="font-body text-sm bg-card resize-none"
              />

              <Button
                type="submit"
                disabled={isPending}
                className="w-full font-body text-xs tracking-[0.2em] uppercase rounded"
              >
                {isPending ? "Sending…" : "Send Message"}
              </Button>

              {showSuccess && (
                <p className="font-body text-sm text-primary text-center pt-1">
                  Message sent — I&apos;ll get back to you soon.
                </p>
              )}
              {state.error && (
                <p className="font-body text-sm text-destructive text-center pt-1">
                  {state.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
