import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen px-6 pt-28 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(166, 124, 82, 0.18) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(219, 208, 186, 0.55))",
          }}
        />
      </div>

      {/* First viewport — name centered, always visible */}
      <div className="min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center text-center">
        {/* Name */}
        <h1 className="font-heading font-light leading-[0.88] tracking-tight mb-4">
          <span className="block text-5xl sm:text-8xl lg:text-[9.5rem] text-foreground">
            Tulsimani
          </span>
          <span className="block text-5xl sm:text-8xl lg:text-[9.5rem] italic text-primary">
            Kumar
          </span>
        </h1>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-14 bg-primary/40" />
          <span className="font-heading text-primary/50 text-sm select-none">◆</span>
          <div className="h-px w-14 bg-primary/40" />
        </div>

        {/* Role pills */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {[
            "Full Stack Developer",
            "Bharatanatyam Performer",
            "MS Aspirant · South Korea",
          ].map((role) => (
            <span
              key={role}
              className="font-body text-[11px] text-muted-foreground border border-border bg-card px-4 py-1.5 rounded-full tracking-wide"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Below fold — visible on scroll */}
      <div className="flex flex-col items-center text-center pt-20 pb-24">
        <p className="font-heading italic font-light text-xl sm:text-2xl text-muted-foreground max-w-sm mx-auto mb-12 leading-relaxed">
          Code and creativity, in equal measure.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button asChild size="lg" className="font-body text-xs tracking-[0.2em] uppercase rounded">
            <a href="https://drive.google.com/drive/folders/1vcghAbkscV3LeV0McGVw_j41WwUGYK-7?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-body text-xs tracking-[0.2em] uppercase rounded">
            <a href="https://github.com/tulsi2004" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-body text-xs tracking-[0.2em] uppercase rounded">
            <a href="https://www.linkedin.com/in/tulsimani-kumar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="font-body text-xs tracking-[0.2em] uppercase rounded">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
