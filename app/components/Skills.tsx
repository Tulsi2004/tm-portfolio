import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript",
      "HTML5", "CSS3", "Tailwind CSS", "Shadcn UI", "Responsive Web Design",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database & ORM",
    skills: ["MySQL", "PostgreSQL", "Supabase", "MongoDB Atlas", "Prisma ORM", "Redis"],
  },
  {
    category: "Authentication",
    skills: ["Clerk", "Supabase Auth", "JWT"],
  },
  {
    category: "DevOps & Deployment",
    skills: [
      "Linux", "VPS Hosting", "Docker", "Coolify", "PM2",
      "Nginx", "Domain & DNS", "HTTPS / SSL", "Vercel", "Render",
      "Web Hosting", "Google Cloud",
    ],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    category: "Professional",
    skills: [
      "Problem Solving", "Software Troubleshooting", "Technical Issues Analysis",
      "Quick Learner", "Project Ownership", "Time Management",
      "Team Leadership", "Team Coordination", "Teamwork",
    ],
  },
  {
    category: "Languages",
    skills: ["English", "Hindi", "Marathi", "Tamil", "Korean (Intermediate)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="02" title="Skills" />

        <div className="border-t border-b border-border divide-y divide-border">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-10 gap-y-1 py-5"
            >
              <span className="font-heading text-sm font-semibold text-primary pt-0.5">
                {category}
              </span>
              <p className="font-body text-sm text-foreground leading-relaxed">
                {skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
