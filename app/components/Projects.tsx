"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import TulsiLogo from "./TulsiLogo";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    label: "Industry",
    role: "built" as const,
    title: "Tenon",
    period: "Oct 2026 – Nov 2026",
    sortDate: "2026-11",
    description:
      "Freelance services marketplace built in phases from scratch — gig listings, buyer–seller chat tied to each gig, seller profiles and reviews, direct Stripe payments without an escrow middleman, and Redis-backed caching.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Redis", "Stripe"],
    demo: "https://www.tenonegig.com/",
    image: "/projects/tenon.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Local Citation Network",
    period: "Oct 2026 – Nov 2026",
    sortDate: "2026-11",
    description:
      "Network of 100+ local business directory sites sharing one database of listings and reviews — generated, built, and deployed in batches with custom domains on Coolify, plus a companion app to manage site credentials and batch data splits.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Coolify"],
    demo: "https://servicehubnearby.com/",
    image: "/projects/local-citation-network.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Zoot Careers",
    period: "Nov 2026",
    sortDate: "2026-11",
    description:
      "Mobile-first careers portal — candidates apply through a shareable form, and recruiters track each application with statuses, call logs, and notes. Reused as the base for a second company's careers site.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://careers.zootcloud.com/",
    image: "/projects/zoot-careers.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Real Estate Lead-Gen Suite",
    period: "Jul 2026 – Sep 2026",
    sortDate: "2026-09",
    description:
      "Six high-conversion real estate landing pages, each with its own admin panel — lead capture with validation, session replay and analytics, Telegram lead alerts, and a Claude-powered assistant, tuned for page speed on paid traffic.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Claude API", "Telegram Bot API"],
    demo: "https://tangent.nobrokerss.com/",
    image: "/projects/real-estate-lead-gen-suite.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Custom Cars",
    period: "Oct 2026",
    sortDate: "2026-10",
    description:
      "Animated automotive showcase website — scroll-driven motion and rich visuals, designed, built, and deployed in two days.",
    tech: ["Next.js 15", "TypeScript", "Vercel"],
    demo: "https://custom-cars-ten.vercel.app/",
    image: "/projects/custom-cars.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Lusso Executive",
    period: "Jun 2026 – Jul 2026",
    sortDate: "2026-07",
    description:
      "Website for a UK executive taxi service — location pages with per-page FAQs, contact flows, and social links, iterated on client feedback and later migrated from HTML to Next.js.",
    tech: ["Next.js 15", "HTML", "CSS", "JavaScript"],
    demo: "https://www.lussoexecutive.co.uk/",
    image: "/projects/lusso-executive.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "ZootWebAgency",
    period: "Oct – Nov 2026",
    sortDate: "2026-11",
    description:
      "48-page website for the agency — service, industry, and company pages built and deployed to Vercel in two days, plus a link-in-bio page where every service link opens WhatsApp with a pre-filled message.",
    tech: ["Next.js 15", "TypeScript", "Vercel"],
    demo: "https://zootwebagency.com/",
    image: "/projects/zootwebagency.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Leadsonus",
    period: "Jul 2026",
    sortDate: "2026-07",
    description:
      "Lead-generation agency website — designed, redesigned, and deployed the landing page, then added a backend and database to capture incoming leads.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://leadsonus.vercel.app/",
    image: "/projects/leadsonus.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Trackly",
    period: "Jul 2026",
    sortDate: "2026-07",
    description:
      "Marketing homepage for Trackly, a tracking product — built the landing experience from the initial design.",
    tech: ["Next.js 15", "TypeScript"],
    demo: null,
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "CPL Careers",
    period: "Nov 2026",
    sortDate: "2026-11",
    description:
      "Careers portal for a second company, built on the Zoot Careers base — application form, candidate statuses, and recruiter notes.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://cpl-career.vercel.app/",
    image: "/projects/cpl-careers.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Local Citation Creds",
    period: "Nov 2026",
    sortDate: "2026-11",
    description:
      "Internal tool that stores credentials for every citation site — batch management with data splitting, repo names as links, and one-click copy of all repo links.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: null,
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Zoot Service Planner",
    period: "Nov 2026",
    sortDate: "2026-11",
    description:
      "Service planning site for the agency — built and deployed in days, paired with a PDF brochure of every service offered.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://zoot-service-planner.vercel.app/",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "GMB Posting Scheduler",
    period: "Oct 2026",
    sortDate: "2026-10",
    description:
      "Google Calendar-style scheduler for planning and queuing Google Business Profile posts across client listings.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: null,
    repo: null,
  },
  {
    label: "Industry",
    role: "contributing" as const,
    title: "Website Audit Tools",
    period: "May 2026",
    sortDate: "2026-05",
    description:
      "Website audit platform — integrated the internal linking microservice and rebuilt the internal link graph section with real-time updates while the crawler runs.",
    tech: ["Next.js 15", "TypeScript", "D3.js", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://www.websiteaudittools.com/",
    image: "/projects/website-audit-tools.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "contributing" as const,
    title: "LORA KP",
    period: "Mar 2026",
    sortDate: "2026-03",
    description:
      "White-labelled edition of Local Rank Reports for a second department — rebranded as MrReports with its own colour scheme, Clerk project, and Vercel deployment.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Clerk"],
    demo: "https://marketingreports.co/",
    image: "/projects/lora-kp.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "contributing" as const,
    title: "PMS",
    period: "Jun 2026 – Ongoing",
    sortDate: "2026-06",
    description:
      "Internal order and team management platform — role-based access for Admins, Team Leaders, Creators, and Members. Shipped order extensions, revision assignment fixes, debounced search across bulk order lists, infinite loading, and a reworked notification centre.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://pms.zootcloud.com/",
    repo: null,
  },
  {
    label: "Industry",
    role: "contributing" as const,
    title: "Internal Linking Microservice",
    period: "Apr 2026 – May 2026",
    sortDate: "2026-05",
    description:
      "Microservice that crawls a site and maps its internal links — tested the API, made its logs readable, documented the API and schema, added forced recrawls that bypass the cache, and deployed the backend on a VPS via Coolify.",
    tech: ["Next.js 15", "TypeScript", "Node.js", "D3.js", "Coolify"],
    demo: "https://app.websiteaudittools.com",
    repo: null,
  },
  {
    label: "Industry",
    role: "contributing" as const,
    title: "FreeSERP",
    period: "May 2026 – Ongoing",
    sortDate: "2026-05",
    description:
      "Free SEO toolkit — built the rank tracker, competitor analysis, internal link analysis, Google Maps grid tracker, and AEO/GEO audit, plus ad landing pages, schema markup, GTM funnel tracking, and a companion mobile app.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://freeserp.com",
    image: "/projects/freeserp.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "contributing" as const,
    title: "CRM",
    period: "May 2026 – Ongoing",
    sortDate: "2026-05",
    description:
      "Sales CRM for tracking clients through pitching workflows — added a follow-up management system with weekly reports reviewed by team leads, win buckets, auto access locks with admin unlock, deletion audit trails, and public reporting APIs.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma"],
    demo: "https://crm.zootcloud.com/",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Dev Config Manager",
    period: "Apr 2026 – May 2026",
    sortDate: "2026-05",
    description:
      "Centralised platform to organise project credentials, environment variables, and setup docs — public/private projects, key management, email OTP auth, copyable code docs, and light/dark themes.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Clerk", "Nodemailer", "Radix UI"],
    demo: "https://dev-config-manager.vercel.app/",
    image: "/projects/dev-config-manager.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Fiverr Page Hider Extension",
    period: "Mar 2026 – May 2026",
    sortDate: "2026-05",
    description:
      "Chrome extension that lets admins control what employees see in a shared Fiverr workspace — hides earnings and pages, grants temporary access, and logs activity to an audit dashboard. Published on the Chrome Web Store.",
    tech: ["JavaScript", "Chrome Extension API", "Node.js", "PostgreSQL", "Coolify"],
    demo: "https://chromewebstore.google.com/detail/melfdbdpfbdocahbpeedgelenpkpnemi",
    image: "/projects/fiverr-page-hider-extension.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "contributing" as const,
    title: "Employee Portal",
    period: "Feb 2026 – Ongoing",
    sortDate: "2026-02",
    description:
      "Internal employee management portal — shipped the incentive tracker, salary slips, WFH attendance and overtime logic, asset management, work-tag analytics with Excel export, document bulk download, and anonymous messaging.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://portal.zootcloud.com/",
    repo: null,
  },
  {
    label: "Industry",
    role: "contributing" as const,
    title: "Local Rank Reports",
    period: "Feb 2026 – Ongoing",
    sortDate: "2026-02",
    description:
      "Local SEO reporting platform — built the rank tracker frontend, map citation reports, and history search, and added an AEO tool, helping users track local search rankings across locations.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://www.localrankreports.com",
    image: "/projects/local-rank-reports.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Talent Corner JobPortal",
    period: "Sep 2025 – Jan 2026",
    sortDate: "2026-01",
    description:
      "Full-stack job portal built solo — applications with status tracking, interview scheduling, recruiter–candidate messaging, CV search, resumes on Google Cloud Storage, an admin panel, and throttled Gmail API campaigns that reached ~2,000 candidates.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Google Cloud Storage"],
    demo: "https://jobportal-talentcor.vercel.app",
    image: "/projects/talent-corner-jobportal.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Growbit",
    period: "Jun 2025 – Aug 2025",
    sortDate: "2025-08",
    description:
      "Investment portfolio management system for a fintech team — led a team of four, covering banks, stocks, mutual funds, PPF, insurance, property, and taxation modules with reports and PDF exports, deployed on Render.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "Vite"],
    demo: "https://investment-frontend-eight.vercel.app",
    image: "/projects/growbit.webp",
    repo: null,
  },
  {
    label: "Industry",
    role: "built" as const,
    title: "Capital Need Analysis",
    period: "May 2025 – Aug 2025",
    sortDate: "2025-07",
    description:
      "Financial planning tool for fresh investors, families, and senior citizens — dynamic need-analysis forms with projections, calculations, comparison studies, and PDF report generation.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    demo: null,
    repo: null,
  },
  {
    label: "Industry",
    role: "contributing" as const,
    title: "Saarthi360",
    period: "May 2025 – Jun 2025",
    sortDate: "2025-06",
    description:
      "Business operations platform for enterprise teams — built franchisee, revenue, recruitment, and legal-contract reports and the Goal Setter module, driven by master data from a Node.js/MySQL backend.",
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
    label: "Personal",
    role: "built" as const,
    title: "Worklog",
    period: "Aug 2026 – Ongoing",
    sortDate: "2026-08",
    description:
      "Personal work journal that replaced spreadsheets — daily work reports, a colour-coded day planner, salary and PF tracking, a recurring-event calendar, custom fields and dashboard cards, and a Claude-powered assistant over your own records. Installable as a PWA.",
    tech: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Clerk", "Claude API", "TanStack Query"],
    demo: null,
    repo: null,
    tulsi: true,
  },
  {
    label: "Personal",
    role: "built" as const,
    title: "TULSI",
    period: "Aug 2026 – Sep 2026",
    sortDate: "2026-09",
    description:
      "Brand site for TULSI, my vertical SaaS company — a products page for its apps, English, Hindi, Marathi, and Tamil translations with accessibility support, OpenGraph, robots and sitemap SEO, and an admin panel.",
    tech: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Supabase"],
    demo: "https://tulsi-solutions.vercel.app/",
    image: "/projects/tulsi.webp",
    repo: null,
    tulsi: true,
  },
  {
    label: "In Progress",
    role: "built" as const,
    title: "Academy OS",
    period: "Aug 2026 – Ongoing",
    sortDate: "0000-00",
    description:
      "TULSI's first product — multi-tenant SaaS for dance, music, and arts academies, built around how a real academy runs. Enquiries and admissions, role-based auth, batches, and fees replace Excel sheets, WhatsApp threads, and paper registers. Ships with its own multilingual landing site.",
    tech: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Clerk", "Shadcn UI"],
    demo: "https://academy-os-landing.vercel.app/",
    image: "/projects/academy-os.webp",
    app: "https://academy-os-beta.vercel.app/",
    repo: null,
    tulsi: true,
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
  Industry:      "text-primary border-primary/50 bg-primary/10",
  "Academic": "text-muted-foreground border-border bg-muted",
  Personal:          "text-sky-700 border-sky-400/50 bg-sky-50",
  "In Progress":     "text-amber-700 border-amber-400/50 bg-amber-50",
};

const labelAccent: Record<string, string> = {
  Industry:      "linear-gradient(to bottom, #a67c52, rgba(166,124,82,0.12))",
  "Academic": "linear-gradient(to bottom, #8a9099, rgba(138,144,153,0.12))",
  "In Progress":     "linear-gradient(to bottom, #b07d2a, rgba(176,125,42,0.12))",
  Personal:          "linear-gradient(to bottom, #5b8dd9, rgba(91,141,217,0.12))",
};

const FILTERS = ["All", "Industry", "Personal", "Academic", "In Progress"] as const;
type Filter = (typeof FILTERS)[number];
type Sort = "newest" | "oldest";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<Sort>("newest");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [preview, setPreview] = useState<{ title: string; image: string } | null>(null);

  const openPreview = (title: string, image: string) => {
    setPreview({ title, image });
    dialogRef.current?.showModal();
  };

  const visible = projects
    .filter((p) => filter === "All" || p.label === filter)
    .sort((a, b) =>
      sort === "newest"
        ? b.sortDate.localeCompare(a.sortDate)
        : a.sortDate.localeCompare(b.sortDate)
    );

  const advance = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: amount, behavior: "smooth" });
    }
  }, []);

  const stopAuto = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    timerRef.current = setInterval(advance, 3000);
  }, [advance, stopAuto]);

  const scrollCarousel = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    stopAuto();
    if (pauseRef.current) clearTimeout(pauseRef.current);
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth;
    if (dir === "next") {
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + amount, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -amount, behavior: "smooth" });
    }
    pauseRef.current = setTimeout(startAuto, 8000);
  };

  useEffect(() => {
    startAuto();
    return () => { stopAuto(); if (pauseRef.current) clearTimeout(pauseRef.current); };
  }, [startAuto, stopAuto]);

  useLayoutEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, [filter, sort]);

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

        {/* Count + sort + arrows row */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            <span className="text-primary">{visible.length}</span>
            {" "}project{visible.length !== 1 ? "s" : ""}
          </span>
          <div className="flex items-center gap-3">
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
            <div className="flex gap-1.5">
              <button
                onClick={() => scrollCarousel("prev")}
                aria-label="Previous"
                className="w-8 h-8 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200 text-sm"
              >
                ←
              </button>
              <button
                onClick={() => scrollCarousel("next")}
                aria-label="Next"
                className="w-8 h-8 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200 text-sm"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Cards carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {visible.map(({ label, role, title, period, description, tech, demo, repo, image, tulsi, app }, i) => (
              <Card
                key={title}
                data-card
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
                className="flex-none w-[min(calc(100vw-3.5rem),22rem)] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.833rem)] snap-start group relative flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_4px_22px_rgba(166,124,82,0.14)] border-border"
              >
                {/* Screenshot: scrolls down the page on hover, opens full size on click */}
                {image ? (
                  <button
                    type="button"
                    onClick={() => openPreview(title, image)}
                    aria-label={`View ${title} screenshot`}
                    className="group/shot relative block aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted cursor-zoom-in"
                  >
                    <Image
                      src={image}
                      alt={`${title} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-[object-position] duration-[4000ms] ease-in-out group-hover/shot:object-bottom"
                    />
                  </button>
                ) : (
                  <div
                    className="relative flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 border-b border-border bg-muted px-6"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(166, 124, 82, 0.18) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  >
                    {tulsi && <TulsiLogo className="size-14 shadow-md rounded-[14px]" />}
                    <span className="font-heading italic text-2xl text-primary/70 text-center leading-snug">
                      {title}
                    </span>
                  </div>
                )}

                <div className="relative flex flex-col flex-1">
                {/* Label-coloured left accent bar */}
                <div
                  className="absolute left-0 top-5 bottom-5 w-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: labelAccent[label] ?? labelAccent["Industry"] }}
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
                      {app && (
                        <a href={app} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-blue-700 font-medium hover:text-blue-800 transition-colors duration-200">
                          App ↗
                        </a>
                      )}
                    </div>
                  )}
                </CardContent>
                </div>
              </Card>
            ))}
        </div>{/* end carousel */}

        {/* Full-size screenshot viewer */}
        <dialog
          ref={dialogRef}
          onClose={() => setPreview(null)}
          onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
          className="m-auto w-[min(100vw-2rem,64rem)] max-h-[90vh] rounded-lg border border-border bg-card p-0 shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
        >
          {preview && (
            <div className="flex max-h-[90vh] flex-col">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="font-heading text-lg font-semibold">{preview.title}</span>
                <button
                  type="button"
                  onClick={() => dialogRef.current?.close()}
                  aria-label="Close"
                  className="w-8 h-8 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200"
                >
                  ✕
                </button>
              </div>
              <div className="overflow-y-auto">
                <Image
                  src={preview.image}
                  alt={`${preview.title} full screenshot`}
                  width={1200}
                  height={3600}
                  sizes="(min-width: 1024px) 64rem, 100vw"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          )}
        </dialog>

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
