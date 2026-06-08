import SectionHeader from "./SectionHeader";

const highlights = [
  { label: "Degree", value: "B.Sc. Computer Science, 2025" },
  { label: "Focus", value: "Full Stack Development" },
  { label: "Interests", value: "Technology, Culture & Personal Growth" },
  { label: "Language", value: "Korean — TOPIK Preparation" },
  { label: "Passion", value: "Bharatanatyam & Classical Arts" },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-28 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="01" title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Bio */}
          <div>
            <p className="font-body text-foreground leading-8 text-base mb-6">
              I&apos;m a Full Stack Developer and B.Sc. Computer Science
              graduate (2025) who enjoys building products from idea to
              deployment. My work includes modern frontend development with
              Next.js and React, backend development with Node.js, database
              design, and deploying applications on
              production infrastructure.
            </p>
            <p className="font-body text-foreground leading-8 text-base mb-8">
              I enjoy understanding complete systems — from designing databases
              and APIs to deploying and maintaining reliable applications. My
              focus is not just writing code, but building solutions that people
              can use.
            </p>
            <blockquote className="border-l-2 border-primary/40 pl-4">
              <p className="font-heading italic font-light text-lg text-muted-foreground leading-relaxed">
                &ldquo;Software developer + classical artist — both demand
                precision and creativity.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Highlights */}
          <div>
            <div className="space-y-1">
              {highlights.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-baseline gap-4 py-4 border-b border-border group"
                >
                  <span className="font-body text-[10px] text-muted-foreground tracking-[0.2em] uppercase w-24 shrink-0">
                    {label}
                  </span>
                  <span className="font-body text-foreground text-sm group-hover:text-primary transition-colors duration-200">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-10 md:mt-18">
              {[
                { number: "9+", label: "Years of Bharatanatyam" },
                { number: "7+", label: "Years of Karate" },
                { number: "4+", label: "Projects Shipped" },
              ].map(({ number, label }) => (
                <div key={label}>
                  <p className="font-heading text-3xl font-semibold text-primary leading-none mb-2">
                    {number}
                  </p>
                  <p className="font-body text-[11px] text-muted-foreground leading-snug">
                    {label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
