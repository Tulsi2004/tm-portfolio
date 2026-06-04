import SectionHeader from "./SectionHeader";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    institution: "SIES College of Arts, Science and Commerce",
    degree: "Bachelor of Science in Computer Science",
    period: "Aug 2022 – Apr 2025",
    grade: "8.35 CGPA",
    activities: null,
  },
  {
    institution: "SIWS",
    degree: "HSC · PCM + CS",
    period: "Jun 2020 – Mar 2022",
    grade: "61.17%",
    activities: null,
  },
  {
    institution: "Sree Narayana Guru High School",
    degree: "SSC",
    period: null,
    grade: "84.40%",
    activities: "Yoga · Karate · Kabaddi · RSP · Bharatanatyam",
  },
];

const companies = [
  {
    org: "Zoot Digital Pvt Ltd",
    location: "Navi Mumbai, Maharashtra, India",
    type: "Full-time",
    duration: "Feb 2026 – Present",
    roles: [
      {
        role: "Software Developer",
        period: "Feb 2026 – Present",
        bullets: [
          "Building and maintaining multiple production web applications — an SEO audit tool with D3.js graph visualization, a keyword ranking platform, an internal CRM, an employee portal, and a local SEO reporting system.",
          "Developed a Chrome extension that adds a configurable audit log panel to Fiverr, giving teams control over what's visible in their workspace.",
          "Shipping full-stack features across Next.js 15 frontends, Node.js APIs, Prisma with Supabase/PostgreSQL, and Clerk auth — deployed on Vercel and VPS.",
        ],
        tech: ["Next.js 15", "React", "Node.js", "Prisma", "Supabase", "PostgreSQL", "Clerk", "Vercel", "Chrome Extensions"],
      },
    ],
  },
  {
    org: "Talent Corner HR Services Pvt Ltd",
    location: "Mumbai, Maharashtra, India",
    type: "Internship",
    duration: "May 2025 – Dec 2025",
    roles: [
      {
        role: "Software Developer",
        period: "Sep 2025 – Dec 2025",
        bullets: [
          "Built Talent Corner JobPortal end-to-end as a solo developer — a full-stack job portal serving recruiters, job seekers, and admins with role-based access control.",
          "Implemented distinct permission layers in React and Node.js so recruiters post jobs, applicants track submissions, and admins oversee all platform activity independently.",
          "Designed an admin panel in Express.js and MySQL to create, update, and remove users, job listings, and applications from a single interface.",
        ],
        tech: ["React", "Node.js", "Express.js", "MySQL"],
      },
      {
        role: "Web Developer",
        period: "May 2025 – Aug 2025",
        bullets: [
          "Built the reports section and Goal Setter module for Saarthi360, a business operations platform, handling logic implementation and data integration end-to-end.",
          "Led frontend and backend development on Growbit, an investment portfolio management system, using React, Node.js, Express, and MySQL.",
          "Directed team operations as lead on Growbit, coordinating data workflows and shipping full-stack features across a two-product internship.",
        ],
        tech: ["React", "Node.js", "Express.js", "MySQL", "Vite"],
      },
    ],
  },
  {
    org: "Natanapriya Nadam",
    location: "Vishnudas Natya Gruha Auditorium · Vashi, Navi Mumbai",
    type: "Volunteer",
    duration: "Annual Event",
    roles: [
      {
        role: "Backstage & Logistics Coordinator",
        period: "",
        bullets: [
          "Coordinated backstage operations for the annual day event — managing participant flow, performance transitions, and meal scheduling to keep the programme running on time.",
          "Worked closely with the MC to maintain event pace and supported participants with whatever they needed for stage preparation.",
          "Managed backstage access control and ensured a quiet, organised environment, with particular attention to settling and guiding younger performers.",
        ],
        tech: [],
      },
    ],
  },
  {
    org: "Department Fest",
    location: "SIES College of Arts, Science and Commerce · Mumbai, India",
    type: "Leadership",
    duration: "Dec 2024",
    roles: [
      {
        role: "Finance Co-Head",
        period: "",
        bullets: [
          "Managed the department fest's financial operations end-to-end — budgeting, expense tracking, and fund allocation across event verticals.",
          "Collaborated with the finance team to maintain transparency in spending and ensure seamless execution within budget.",
        ],
        tech: [],
      },
    ],
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

          <div className="space-y-16">
            {companies.map(({ org, location, type, duration, roles }, ci) => (
              <div key={ci} className="md:pl-10 relative group">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-1/2 hidden md:block border border-primary/60"
                  style={{ background: "#f5f1e6" }}
                />

                {/* Company meta */}
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="font-body text-[10px] text-muted-foreground tracking-[0.25em] uppercase">
                    {duration}
                  </span>
                  <Badge variant="outline" className="font-body text-[10px] text-primary border-primary/30 px-2 py-0">
                    {type}
                  </Badge>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-foreground mb-0.5">
                  {org}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-6">{location}</p>

                {/* Roles */}
                <div className={`space-y-8 ${roles.length > 1 ? "border-l border-border pl-5" : ""}`}>
                  {roles.map(({ role, period, bullets, tech }, ri) => (
                    <div key={ri}>
                      {roles.length > 1 && period && (
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-body text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                            {period}
                          </span>
                          <Badge variant="outline" className="font-body text-[10px] text-primary border-primary/30 px-2 py-0">
                            {type}
                          </Badge>
                        </div>
                      )}
                      <h4 className="font-heading text-xl font-medium text-foreground mb-4">
                        {role}
                      </h4>

                      <ul className="space-y-2.5 mb-5">
                        {bullets.map((b, j) => (
                          <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-3">
                            <span className="text-primary/60 mt-1 shrink-0">—</span>
                            {b}
                          </li>
                        ))}
                      </ul>

                      {tech.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {tech.map((t) => (
                            <Badge key={t} variant="secondary" className="font-body text-[11px]">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 pt-10 border-t border-border">
          <p className="font-body text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-8">
            Education
          </p>
          <div className="divide-y divide-border">
            {education.map(({ institution, degree, period, grade, activities }) => (
              <div key={institution} className="py-5 grid md:grid-cols-[1fr_auto] gap-2">
                <div>
                  <h4 className="font-heading text-lg font-medium text-foreground mb-0.5">
                    {institution}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mb-1">{degree}</p>
                  {activities && (
                    <p className="font-body text-[11px] text-muted-foreground/70">
                      {activities}
                    </p>
                  )}
                </div>
                <div className="text-left md:text-right shrink-0">
                  {period && (
                    <p className="font-body text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-1">
                      {period}
                    </p>
                  )}
                  <p className="font-body text-sm text-primary">{grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
