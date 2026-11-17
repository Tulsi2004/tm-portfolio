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
          "Shipping features across the company's production SaaS — FreeSERP (rank tracker, competitor analysis, Google Maps tracker, AEO audit, mobile app), a sales CRM with follow-up management, a PMS, an employee portal with payroll and attendance logic, and a local SEO reporting platform.",
          "Built new products end to end: Tenon, a freelance marketplace with Stripe payments; a 100+ site local citation network; a careers portal; and Dev Config Manager for project credentials and setup docs.",
          "Delivered client work — six real estate lead-gen landing pages with admin panels, session replay, Telegram alerts, and a Claude assistant, plus marketing sites for agency clients.",
          "Built and published a Chrome extension that lets admins control and audit what employees see in a shared Fiverr workspace, and an internal linking microservice visualised as a real-time D3.js graph.",
          "Working across Next.js 15, Prisma with Supabase/PostgreSQL, Clerk, and Redis — deployed on Vercel and VPS via Coolify.",
        ],
        tech: ["Next.js 15", "TypeScript", "Prisma", "Supabase", "PostgreSQL", "Clerk", "Redis", "Stripe", "D3.js", "Coolify", "Vercel", "Chrome Extensions"],
      },
    ],
  },
  {
    org: "Talent Corner HR Services Pvt Ltd",
    location: "Mumbai, Maharashtra, India",
    type: "Internship",
    duration: "May 2025 – Jan 2026",
    roles: [
      {
        role: "Software Developer",
        period: "Sep 2025 – Jan 2026",
        bullets: [
          "Built Talent Corner JobPortal end-to-end as a solo developer — a full-stack job portal serving recruiters, job seekers, and admins with role-based access control.",
          "Shipped the hiring flow — applications with status tracking, interview scheduling, recruiter–candidate messaging, CV search, and resume storage on Google Cloud Storage.",
          "Designed an admin panel in Express.js and MySQL to manage users, job listings, and applications, including bulk email campaigns over the Gmail API that reached ~2,000 candidates with throttled sending.",
          "Presented the platform to employers and iterated on their feedback through production rollout.",
        ],
        tech: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Google Cloud Storage"],
      },
      {
        role: "Web Developer",
        period: "May 2025 – Aug 2025",
        bullets: [
          "Built the reports section and Goal Setter module for Saarthi360, a business operations platform, handling logic implementation and data integration end-to-end.",
          "Built Capital Need Analysis, a financial planning tool with dynamic forms, projections, comparison studies, and PDF reports.",
          "Led a team of four on Growbit, an investment portfolio management system — banks, stocks, mutual funds, PPF, insurance, property, and taxation modules with reports, deployed on Render and Vercel.",
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

// Header colour per company card, cycling.
const accents = ["#7ec8f2", "#f6b3c6", "#f5cf5c", "#c9b8f0"];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-28 px-6 bg-background"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(31, 26, 23, 0.1) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="04" title="Experience" />

        <div className="relative">
          {/* Timeline track */}
          <div className="absolute left-0 top-8 bottom-8 w-0.5 hidden md:block bg-[#1f1a17]" />

          <div className="space-y-12">
            {companies.map(({ org, location, type, duration, roles }, ci) => (
              <div key={ci} className="md:ml-10 relative group reveal">
                {/* Timeline dot */}
                <div
                  className="absolute -left-10 top-7 size-4 rounded-full -translate-x-1/2 hidden md:block border-2 border-[#1f1a17]"
                  style={{ background: accents[ci % accents.length] }}
                />

                <div className="rounded-3xl border-2 border-[#1f1a17] bg-[#fffcf5] shadow-[6px_6px_0_0_#1f1a17] overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                {/* Company meta — coloured header */}
                <div className="px-6 md:px-8 pt-6 pb-5 border-b-2 border-[#1f1a17] text-[#1f1a17]" style={{ background: accents[ci % accents.length] }}>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="font-body text-[10px] tracking-[0.25em] uppercase">
                    {duration}
                  </span>
                  <Badge variant="outline" className="font-body text-[10px] text-[#1f1a17] border-[#1f1a17] bg-[#fffcf5] rounded-full px-2.5 py-0">
                    {type}
                  </Badge>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-0.5">
                  {org}
                </h3>
                <p className="font-body text-sm opacity-75">{location}</p>
                </div>

                {/* Roles */}
                <div className={`p-6 md:p-8 space-y-8 ${roles.length > 1 ? "[&>div+div]:border-t-2 [&>div+div]:border-dashed [&>div+div]:border-[#1f1a17]/20 [&>div+div]:pt-8" : ""}`}>
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
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <p className="font-body text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-8">
            Education
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {education.map(({ institution, degree, period, grade, activities }, ei) => (
              <div
                key={institution}
                className="flex flex-col overflow-hidden rounded-3xl border-2 border-[#1f1a17] bg-[#fffcf5] text-[#1f1a17] shadow-[5px_5px_0_0_#1f1a17] transition-transform duration-200 hover:-translate-y-1 hover:rotate-1"
              >
                <div className="h-3 shrink-0 border-b-2 border-[#1f1a17]" style={{ background: accents[(ei + 2) % accents.length] }} />
                <div className="flex flex-1 flex-col gap-6 p-6">
                  <div>
                  <h4 className="font-heading text-lg font-semibold leading-snug">
                    {institution}
                  </h4>
                  <p className="mt-1 font-body text-sm text-[#1f1a17]/70">{degree}</p>
                  {activities && (
                    <p className="mt-1 font-body text-[11px] text-[#1f1a17]/55">
                      {activities}
                    </p>
                  )}
                  </div>
                  {/* Grade + dates pinned to the bottom so every card lines up */}
                  {/* One row on mobile; stacked on desktop, with a blank line when there's no period so grades stay level */}
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-x-3 gap-y-1.5 border-t-2 border-dashed border-[#1f1a17]/20 pt-4 md:flex-col md:items-start">
                    <p className="font-heading text-2xl font-semibold leading-none">{grade}</p>
                    <p className={`font-body text-[10px] text-[#1f1a17]/60 tracking-[0.2em] uppercase ${period ? "" : "invisible max-md:hidden"}`}>
                      {period ?? "—"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
