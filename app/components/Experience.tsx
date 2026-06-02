import SectionHeader from "./SectionHeader";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "Sep 2025 — Dec 2025",
    role: "Software Developer",
    org: "Talent Corner HR Services Pvt Ltd · Mumbai, India",
    type: "Internship",
    bullets: [
      "Built Talent Corner JobPortal end-to-end as a solo developer — a full-stack job portal serving recruiters, job seekers, and admins with role-based access control.",
      "Implemented distinct permission layers in React and Node.js so recruiters post jobs, applicants track submissions, and admins oversee all platform activity independently.",
      "Designed an admin panel in Express.js and MySQL to create, update, and remove users, job listings, and applications from a single interface.",
    ],
    tech: ["React", "Node.js", "Express.js", "MySQL"],
  },
  {
    period: "May 2025 — Aug 2025",
    role: "Web Developer",
    org: "Talent Corner HR Services Pvt Ltd · Mumbai, India",
    type: "Internship",
    bullets: [
      "Built reports section and Goal Setter module for Saarthi360, a business operations platform, handling logic implementation and data integration end-to-end.",
      "Led frontend and backend development on Growbit, an investment portfolio management system, using React, Node.js, Express, and MySQL.",
      "Directed team operations as lead on Growbit, coordinating data workflows and shipping full-stack features across a two-product internship.",
    ],
    tech: ["React", "Node.js", "Express.js", "MySQL", "Vite"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="04" title="Experience" />

        <div className="relative">
          {/* Timeline track */}
          <div
            className="absolute left-0 top-3 bottom-3 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #a67c52, rgba(166, 124, 82, 0.08))" }}
          />

          <div className="space-y-12">
            {experiences.map(({ period, role, org, type, bullets, tech }, i) => (
              <div
                key={i}
                className="md:pl-10 relative group hover:bg-secondary/30 transition-colors duration-200 rounded-xl py-5 px-4 -mx-4 md:mx-0 md:px-0 md:pr-0"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-8 w-2 h-2 rounded-full -translate-x-1/2 hidden md:block border border-primary/60 group-hover:bg-primary/30 transition-colors duration-200"
                  style={{ background: "#f5f1e6" }}
                />

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-body text-[10px] text-muted-foreground tracking-[0.25em] uppercase">
                    {period}
                  </span>
                  <Badge variant="outline" className="font-body text-[10px] text-primary border-primary/30 px-2 py-0">
                    {type}
                  </Badge>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-foreground mb-1">
                  {role}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-5">{org}</p>

                <ul className="space-y-2.5 mb-5">
                  {bullets.map((b, j) => (
                    <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-3">
                      <span className="text-primary/60 mt-1 shrink-0">—</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <Badge key={t} variant="secondary" className="font-body text-[11px]">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
