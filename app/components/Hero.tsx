import { Button } from "@/components/ui/button";

const stack = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
  "Prisma", "Supabase", "Tailwind CSS", "Redis", "Docker", "Stripe",
];

export default function Hero() {
  return (
    // overflow-x-clip, not overflow-hidden: hidden would break the sticky reveal below.
    <section id="hero" className="theme-navy relative bg-background text-foreground overflow-x-clip">
      {/* Dot texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(252, 248, 237, 0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* First viewport — name centered, always visible */}
      <div className="relative min-h-screen px-6 pt-28 pb-16 flex flex-col items-center justify-center text-center">
        {/* Name */}
        <h1 className="font-heading font-light leading-[0.88] tracking-tight mb-4">
          <span className="block text-6xl sm:text-8xl lg:text-[10rem] font-normal text-foreground animate-blur-in [animation-delay:100ms] motion-reduce:animate-none">
            Tulsimani
          </span>
          <span className="block text-6xl sm:text-8xl lg:text-[10rem] italic text-primary animate-blur-in [animation-delay:400ms] motion-reduce:animate-none">
            Kumar
          </span>
        </h1>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 my-8 animate-blur-in [animation-delay:750ms] motion-reduce:animate-none">
          <div className="h-px w-14 bg-foreground/40" />
          <span className="font-heading text-foreground/60 text-sm select-none">◆</span>
          <div className="h-px w-14 bg-foreground/40" />
        </div>

        {/* Role pills — blur in one after another, tilt on hover */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {[
            "Full Stack Developer",
            "Bharatanatyam Performer",
            "MS Aspirant · South Korea",
          ].map((role, i) => (
            <span
              key={role}
              style={{ animationDelay: `${950 + i * 150}ms` }}
              className="font-body text-xs text-[#1f1a17] border-2 border-[#1f1a17] bg-card px-4 py-1.5 rounded-full tracking-wide shadow-[3px_3px_0_0_#1f1a17] transition-transform duration-200 hover:-rotate-3 hover:-translate-y-0.5 animate-blur-in motion-reduce:animate-none"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Circle reveal — pinned for a screen of scroll while the dark circle grows */}
      <div className="relative h-[200vh] [view-timeline:--reveal_block]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="circle-reveal theme-ink absolute inset-0 bg-background text-foreground flex flex-col items-center justify-center gap-12 px-6 text-center">
            <p className="font-heading italic font-light text-4xl sm:text-6xl lg:text-7xl leading-tight max-w-4xl">
              Where <span className="text-[#7ec8f2]">logic</span> meets{" "}
              <span className="text-[#f6b3c6]">expression</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="font-body text-xs tracking-[0.2em] uppercase rounded-full px-7">
                <a href="/TULSIMANI_KUMAR_Resume.pdf" download>Resume ↓</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body text-xs tracking-[0.2em] uppercase rounded-full px-7">
                <a href="https://github.com/tulsi2004" target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body text-xs tracking-[0.2em] uppercase rounded-full px-7">
                <a href="https://www.linkedin.com/in/tulsimani-kumar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="font-body text-xs tracking-[0.2em] uppercase rounded-full px-7">
                <a href="#contact">Contact</a>
              </Button>
            </div>

            {/* Stack marquee */}
            <div
              aria-hidden
              className="w-full max-w-5xl overflow-hidden select-none mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
            >
              <div className="flex w-max animate-marquee [animation-duration:40s] motion-reduce:animate-none">
                {[0, 1].map((half) => (
                  <div key={half} className="flex shrink-0">
                    {stack.map((tech) => (
                      <span key={tech} className="flex items-center font-body text-sm tracking-[0.2em] uppercase text-foreground/70">
                        {tech}
                        <span className="px-6 text-primary">✦</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
