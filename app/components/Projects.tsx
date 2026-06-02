import SectionHeader from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    label: "Professional",
    title: "Internal Linking Microservice",
    period: "May 2026",
    sortDate: "2026-05",
    description:
      "Frontend for an internal linking microservice — surfaces crawl data through an interactive graph inside a website audit tool, giving SEO teams a visual map of internal link structure across pages.",
    tech: ["Next.js 15", "TypeScript", "Node.js", "D3.js"],
    demo: "https://app.websiteaudittools.com",
    repo: null,
  },
  {
    label: "Professional",
    title: "FreeSERP",
    period: "May 2026",
    sortDate: "2026-05",
    description:
      "Free keyword ranking tool for SEOs, marketers, and developers — built and extended the frontend, shipping features for keyword discovery and real-time search ranking tracking without a paywall.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://freeserp.com",
    repo: null,
  },
  {
    label: "Professional",
    title: "CRM",
    period: "May 2026",
    sortDate: "2026-05",
    description:
      "Internal CRM platform — building and maintaining frontend and backend features that manage customer relationships, data records, and operational workflows.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: null,
    repo: null,
  },
  {
    label: "Professional",
    title: "Dev Config Manager",
    period: "Apr 2026",
    sortDate: "2026-04",
    description:
      "Configuration management platform that centralizes app settings, environment variables, and deployment configs across projects — custom JWT auth, PostgreSQL via Prisma, and email verification via Nodemailer keep it self-contained without third-party auth dependencies.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Clerk", "Nodemailer", "Radix UI"],
    demo: "https://devconfig-manager.vercel.app",
    repo: null,
  },
  {
    label: "Professional",
    title: "Fiverr Audit Log Extension",
    period: "Mar 2026",
    sortDate: "2026-03",
    description:
      "Chrome extension that adds an audit log panel to Fiverr — hides configurable UI elements and pages, letting teams track and control what's visible in their Fiverr workspace.",
    tech: ["JavaScript", "Chrome Extension API"],
    demo: "https://chromewebstore.google.com/detail/melfdbdpfbdocahbpeedgelenpkpnemi",
    repo: null,
  },
  {
    label: "Professional",
    title: "Employee Portal",
    period: "Feb 2026",
    sortDate: "2026-02",
    description:
      "Internal employee management portal — contributing to both frontend and backend, shipping features across modules handling employee data, workflows, and operations.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: null,
    repo: null,
  },
  {
    label: "Professional",
    title: "Local Rank Reports",
    period: "Feb 2026",
    sortDate: "2026-02",
    description:
      "Local SEO reporting platform — maintaining and contributing frontend and backend features that help users track local search rankings and generate reports across locations.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://www.localrankreports.com",
    repo: null,
  },
  {
    label: "Professional",
    title: "Talent Corner JobPortal",
    period: "Sep 2025 – Dec 2025",
    sortDate: "2025-12",
    description:
      "Full-stack job portal built during an internship at Talent Corner HR Services — recruiters post and manage listings, job seekers apply and track status, and admins oversee users and platform operations through a role-gated panel.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "JWT"],
    demo: "https://jobportal-talentcor.vercel.app",
    repo: null,
  },
  {
    label: "Professional",
    title: "Growbit",
    period: "Jul 2025 – Aug 2025",
    sortDate: "2025-08",
    description:
      "Investment portfolio management system built for a fintech team — React dashboards surface live holdings data, Express APIs handle transactions, and MySQL powers the underlying data layer.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "Vite"],
    demo: "https://investment-frontend-eight.vercel.app",
    repo: null,
  },
  {
    label: "Professional",
    title: "Saarthi360",
    period: "May 2025 – Jul 2025",
    sortDate: "2025-07",
    description:
      "Business operations platform built for enterprise teams — contributed the reports section and Goal Setter module, wiring React front-ends to a Node.js/MySQL back-end to surface actionable business data.",
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    demo: null,
    repo: null,
  },
  {
    label: "College Project",
    title: "Clothify",
    period: "Dec 2024 – Mar 2025",
    sortDate: "2025-03",
    description:
      "Clothing e-commerce platform built for a college project — products browse into a persistent cart, orders flow through authentication-gated management, and Stripe handles payments end to end.",
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Stripe"],
    demo: null,
    repo: null,
  },
  {
    label: "College Project",
    title: "STVBinge",
    period: "Sep 2024 – Nov 2024",
    sortDate: "2024-11",
    description:
      "Movie ticket booking platform built for a college project — real-time seat availability updates across user and admin roles, with end-to-end booking workflows backed by a MERN stack.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    demo: null,
    repo: null,
  },
  {
    label: "In Progress",
    title: "Performing Arts Management System",
    period: undefined,
    sortDate: "0000-00",
    description:
      "Platform built to manage a Bharatanatyam academy's operations — students enroll, batches are scheduled, fees are tracked, and performance records replace the spreadsheets that once ran everything manually.",
    tech: ["Next.js", "TypeScript", "Supabase", "Prisma", "Clerk", "Shadcn UI"],
    demo: null,
    repo: null,
  },
].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

const miniProjects = [
  {
    title: "Funflix",
    description: "Netflix homepage clone built with HTML, CSS and JavaScript.",
    period: "Jul 2023",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Temp Converter",
    description: "Simple utility that converts between °C and °F in real time.",
    period: "Jul 2023",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Product Landing Page",
    description: "Landing page with scroll-triggered animations — fade, slide, and zoom — using the AOS library.",
    period: "Apr 2025",
    tech: ["HTML", "CSS", "JavaScript", "AOS"],
  },
  {
    title: "Drag & Drop Builder",
    description: "Page builder that lets users drag and drop text, images, and buttons to compose layouts.",
    period: "Apr 2025",
    tech: ["React", "JavaScript"],
  },
  {
    title: "TravelLog",
    description: "Personal travel diary where users record and revisit their journeys, with timeline-based browsing.",
    period: "Mar 2026",
    tech: ["Next.js", "TypeScript", "Clerk", "Prisma", "Tailwind CSS"],
  },
];

const labelStyles: Record<string, string> = {
  Professional:      "text-primary border-primary/30",
  "College Project": "text-muted-foreground border-border",
  Personal:          "text-sky-700 border-sky-400/40",
  "In Progress":     "text-amber-700 border-amber-400/40",
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="03" title="Projects" />

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map(({ label, title, period, description, tech, demo, repo }, i) => (
            <Card
              key={title}
              className="group relative hover:-translate-y-1 transition-all duration-300 hover:shadow-md border-border"
            >
              {/* Primary left accent */}
              <div
                className="absolute left-0 top-5 bottom-5 w-0.5 rounded-full"
                style={{ background: "linear-gradient(to bottom, #a67c52, rgba(166, 124, 82, 0.12))" }}
              />

              <CardHeader className="pl-6">
                <div className="flex items-start justify-between mb-1">
                  <span
                    className="font-heading font-light leading-none"
                    style={{ fontSize: "4rem", color: "rgba(166, 124, 82, 0.18)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-2 flex flex-col items-end gap-1">
                    <Badge
                      variant="outline"
                      className={`font-body text-[10px] tracking-wide ${labelStyles[label]}`}
                    >
                      {label}
                    </Badge>
                    {period && (
                      <span className="font-body text-[10px] text-muted-foreground">
                        {period}
                      </span>
                    )}
                  </div>
                </div>
                <CardTitle className="font-heading text-[1.3rem] font-semibold leading-snug">
                  {title}
                </CardTitle>
                <CardDescription className="font-body text-sm leading-relaxed">
                  {description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pl-6">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tech.map((t) => (
                    <Badge key={t} variant="outline" className="font-body text-[11px] text-primary border-primary/30">
                      {t}
                    </Badge>
                  ))}
                </div>
                {(demo || repo) && (
                  <div className="flex gap-4">
                    {demo && (
                      <a href={demo} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                        Live ↗
                      </a>
                    )}
                    {repo && (
                      <a href={repo} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mini Projects */}
        <div className="mt-16 pt-10 border-t border-border">
          <p className="font-body text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-6">
            Mini Projects
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {miniProjects.map(({ title, description, period, tech }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-heading text-sm font-semibold text-foreground leading-snug">
                    {title}
                  </h4>
                  <span className="font-body text-[10px] text-muted-foreground shrink-0 ml-2 mt-0.5">
                    {period}
                  </span>
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-3">
                  {description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {tech.map((t) => (
                    <Badge key={t} variant="outline" className="font-body text-[10px] text-primary/70 border-primary/20 px-1.5 py-0">
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
