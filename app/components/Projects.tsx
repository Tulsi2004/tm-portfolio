"use client";

import { useLayoutEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    label: "Professional",
    role: "contributing" as const,
    title: "PMS",
    period: "Jun 2026 – Ongoing",
    sortDate: "2026-06",
    description:
      "Internal order and team management platform — role-based access for Admins, Team Leaders, Creators, and Members, with revision workflows, task assignment, and a full authentication flow.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://pms.zootcloud.com/",
    repo: null,
  },
  {
    label: "Professional",
    role: "contributing" as const,
    title: "Internal Linking Microservice",
    period: "May 2026",
    sortDate: "2026-05",
    description:
      "Frontend for an internal linking microservice — surfaces crawl data as an interactive graph in a website audit tool, giving SEO teams a visual map of site-wide link structure.",
    tech: ["Next.js 15", "TypeScript", "Node.js", "D3.js"],
    demo: "https://app.websiteaudittools.com",
    repo: null,
  },
  {
    label: "Professional",
    role: "contributing" as const,
    title: "FreeSERP",
    period: "May 2026 – Ongoing",
    sortDate: "2026-05",
    description:
      "Free keyword ranking tool for SEOs, marketers, and developers — built and extended the frontend, delivering keyword discovery and real-time search ranking tracking, all without a paywall.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://freeserp.com",
    repo: null,
  },
  {
    label: "Professional",
    role: "contributing" as const,
    title: "CRM",
    period: "May 2026 – Ongoing",
    sortDate: "2026-05",
    description:
      "Sales CRM for tracking clients through pitching workflows, quality checks, and tag-based categorisation — role-based access, real-time alarm notifications, global activity tracking, and a companion Chrome extension.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma"],
    demo: "https://crm.zootcloud.com/",
    repo: null,
  },
  {
    label: "Professional",
    role: "built" as const,
    title: "Dev Config Manager",
    period: "Apr 2026",
    sortDate: "2026-04",
    description:
      "Centralised config platform for app settings, environment variables, and deployment configs — self-contained with custom JWT auth, PostgreSQL via Prisma, and email verification via Nodemailer.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Clerk", "Nodemailer", "Radix UI"],
    demo: "https://devconfig-manager.vercel.app",
    repo: null,
  },
  {
    label: "Professional",
    role: "built" as const,
    title: "Fiverr Audit Log Extension",
    period: "Mar 2026",
    sortDate: "2026-03",
    description:
      "Chrome extension adding an audit log panel to Fiverr — hides configurable UI elements and pages, giving teams full control over what is visible in their shared Fiverr workspace.",
    tech: ["JavaScript", "Chrome Extension API"],
    demo: "https://chromewebstore.google.com/detail/melfdbdpfbdocahbpeedgelenpkpnemi",
    repo: null,
  },
  {
    label: "Professional",
    role: "contributing" as const,
    title: "Employee Portal",
    period: "Feb 2026 – Ongoing",
    sortDate: "2026-02",
    description:
      "Internal employee management portal — contributing across frontend and backend to ship features covering employee records, task workflows, approvals, and the operational tooling teams rely on.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://portal.zootcloud.com/",
    repo: null,
  },
  {
    label: "Professional",
    role: "contributing" as const,
    title: "Local Rank Reports",
    period: "Feb 2026",
    sortDate: "2026-02",
    description:
      "Local SEO reporting platform — building and maintaining frontend and backend features that help users track local search rankings, monitor position changes, and generate reports across locations.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://www.localrankreports.com",
    repo: null,
  },
  {
    label: "Professional",
    role: "built" as const,
    title: "Talent Corner JobPortal",
    period: "Sep 2025 – Dec 2025",
    sortDate: "2025-12",
    description:
      "Full-stack job portal built at Talent Corner HR — recruiters post and manage listings, applicants apply and track status, and admins oversee platform operations through a role-gated panel.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "JWT"],
    demo: "https://jobportal-talentcor.vercel.app",
    repo: null,
  },
  {
    label: "Professional",
    role: "built" as const,
    title: "Growbit",
    period: "Jul 2025 – Aug 2025",
    sortDate: "2025-08",
    description:
      "Investment portfolio management system built for a fintech team — led a team of four as team lead, overseeing React dashboards, Express APIs, and MySQL operations through to deployment.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "Vite"],
    demo: "https://investment-frontend-eight.vercel.app",
    repo: null,
  },
  {
    label: "Professional",
    role: "contributing" as const,
    title: "Saarthi360",
    period: "May 2025 – Jul 2025",
    sortDate: "2025-07",
    description:
      "Business operations platform for enterprise teams — contributed the reports section and Goal Setter module, wiring React frontends to a Node.js/MySQL backend to surface actionable business data.",
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    demo: "https://www.sarthi360.in/",
    repo: null,
  },
  {
    label: "Academic",
    role: "built" as const,
    title: "Clothify",
    period: "Dec 2024 – Mar 2025",
    sortDate: "2025-03",
    description:
      "Clothing e-commerce platform built for a college project — products browse into a persistent cart, orders flow through authentication-gated management, and Stripe handles payments end to end.",
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Stripe"],
    demo: null,
    repo: "https://github.com/Tulsi2004/Clothify_Frontend",
  },
  {
    label: "Academic",
    role: "built" as const,
    title: "STVBinge",
    period: "Sep 2024 – Nov 2024",
    sortDate: "2024-11",
    description:
      "Movie ticket booking platform built for a college project — led a team of three, delivering real-time seat availability, role-based access for users and admins, and end-to-end booking flows.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    demo: null,
    repo: "https://github.com/Tulsi2004/STVBinge_Frontend",
  },
  {
    label: "In Progress",
    role: "built" as const,
    title: "Performing Arts Management System",
    period: undefined,
    sortDate: "0000-00",
    description:
      "Platform built to manage a Bharatanatyam academy — students enroll, batches are scheduled, fees are tracked, and performance records replace the spreadsheets that once handled it all.",
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
  Professional:      "text-primary border-primary/50 bg-primary/10",
  "Academic": "text-muted-foreground border-border bg-muted",
  Personal:          "text-sky-700 border-sky-400/50 bg-sky-50",
  "In Progress":     "text-amber-700 border-amber-400/50 bg-amber-50",
};

const labelAccent: Record<string, string> = {
  Professional:      "linear-gradient(to bottom, #a67c52, rgba(166,124,82,0.12))",
  "Academic": "linear-gradient(to bottom, #8a9099, rgba(138,144,153,0.12))",
  "In Progress":     "linear-gradient(to bottom, #b07d2a, rgba(176,125,42,0.12))",
  Personal:          "linear-gradient(to bottom, #5b8dd9, rgba(91,141,217,0.12))",
};

const FILTERS = ["All", "Professional", "Academic", "In Progress"] as const;
type Filter = (typeof FILTERS)[number];
type Sort = "newest" | "oldest";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<Sort>("newest");

  const visible = projects
    .filter((p) => filter === "All" || p.label === filter)
    .sort((a, b) =>
      sort === "newest"
        ? b.sortDate.localeCompare(a.sortDate)
        : a.sortDate.localeCompare(b.sortDate)
    );

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-animate]"));

    const reveal = (target: HTMLElement) => {
      target.style.opacity = "1";
      target.style.transform = "translateY(0)";
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );

    cards.forEach((c) => {
      const rect = c.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal(c);
      } else {
        c.style.opacity = "0";
        c.style.transform = "translateY(20px)";
        c.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        obs.observe(c);
      }
    });

    return () => obs.disconnect();
  }, [filter, sort]);

  return (
    <section id="projects" className="py-16 md:py-28 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        <SectionHeader number="03" title="Projects" />

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-body text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 border rounded-sm transition-colors duration-200 ${
                filter === f
                  ? "border-primary/60 text-primary bg-primary/5"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Count + sort row */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            <span className="text-primary">{visible.length}</span>
            {" "}project{visible.length !== 1 ? "s" : ""}
          </span>
          <div className="flex gap-1">
            {(["newest", "oldest"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={`font-body text-[11px] tracking-[0.15em] uppercase px-2.5 py-1 border rounded-sm transition-colors duration-200 ${
                  sort === s
                    ? "border-primary/60 text-primary bg-primary/5"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary/30"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid — 3 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map(({ label, role, title, period, description, tech, demo, repo }, i) => (
              <Card
                key={title}
                data-animate
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
                className="group relative flex flex-col hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_4px_22px_rgba(166,124,82,0.14)] border-border"
              >
                {/* Label-coloured left accent bar */}
                <div
                  className="absolute left-0 top-5 bottom-5 w-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: labelAccent[label] ?? labelAccent["Professional"] }}
                />

                <CardHeader className="pl-6">
                  <div className="flex items-start justify-between mb-1">
                    <span
                      className="font-heading font-light leading-none"
                      style={{ fontSize: "4rem", color: "rgba(166, 124, 82, 0.18)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-2 flex flex-col items-end gap-1.5">
                      <div className="flex items-center gap-1.5 flex-wrap justify-end">
                        <Badge
                          variant="outline"
                          className={`font-body text-[10px] tracking-wide ${labelStyles[label]}`}
                        >
                          {label}
                        </Badge>
                        {role === "built" ? (
                          <Badge
                            variant="outline"
                            className="font-body text-[10px] tracking-wide text-foreground border-foreground/40 bg-foreground/[0.06]"
                          >
                            Creator
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="font-body text-[10px] tracking-wide text-muted-foreground border-dashed border-muted-foreground/40 bg-muted-foreground/[0.06]"
                          >
                            Contributor
                          </Badge>
                        )}
                      </div>
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

                <CardContent className="pl-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tech.map((t) => (
                      <Badge key={t} variant="outline" className="font-body text-[11px] text-primary border-primary/30">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {(demo || repo) && (
                    <div className="flex gap-4 mt-auto pt-4 border-t border-border/50">
                      {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-blue-500 font-medium hover:text-blue-600 transition-colors duration-200">
                          Live ↗
                        </a>
                      )}
                      {repo && (
                        <a href={repo} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-blue-700 font-medium hover:text-blue-800 transition-colors duration-200">
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
            {miniProjects.map(({ title, description, period, tech }, i) => (
              <div
                key={title}
                data-animate
                style={{ transitionDelay: `${(i % 3) * 90}ms` }}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-[0_2px_14px_rgba(166,124,82,0.1)] transition-all duration-200"
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
