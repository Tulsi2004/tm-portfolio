import SectionHeader from "./SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    symbol: "◈",
    title: "Bharatanatyam",
    subtitle: "Natya Visharad & Visharad Pratham",
    items: [
      "Natya Visharad & Visharad Pratham — formal academic credentials in classical dance",
      "9 years of training under a senior guru",
      "Performed at cultural, institutional, and festival stages",
      "Teaching Bharatanatyam alongside active performing",
    ],
  },
  {
    symbol: "◉",
    title: "Karate & Sports",
    subtitle: "Okinawan Style · Multi-Sport Athlete",
    items: [
      "Okinawan-style Karate — state and national competition participant",
      "Competed in kabaddi and sprint events at institutional level",
      "Practises yoga for discipline and physical balance",
      "Multi-sport background builds focus, resilience, and team instincts",
    ],
  },
  {
    symbol: "◇",
    title: "Languages & Korea",
    subtitle: "한국어 학습 중",
    items: [
      "English — Professional working proficiency",
      "Hindi — Native",
      "Korean — Intermediate; TOPIK II preparation in progress",
      "Pursuing MS admission in Computer Science in South Korea",
    ],
  },
];

export default function BeyondTech() {
  return (
    <section id="beyond" className="py-28 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="05"
          title="Beyond Technology"
          subtitle="Discipline, artistic depth, and cross-cultural drive — these shape how I work, not just what I do outside it."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map(({ symbol, title, subtitle, items }) => (
            <Card
              key={title}
              className="overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border flex flex-col cursor-default"
            >
              {/* Gradient header */}
              <div
                className="h-20 relative"
                style={{ background: "linear-gradient(135deg, rgba(166, 124, 82, 0.18), rgba(166, 124, 82, 0.05))" }}
              >
                <span
                  className="absolute top-3 right-5 font-heading font-light leading-none select-none"
                  style={{ fontSize: "3.5rem", color: "rgba(166, 124, 82, 0.30)" }}
                >
                  {symbol}
                </span>
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-1">
                  {title}
                </h3>
                <p className="font-body text-[11px] text-primary tracking-wider uppercase mb-5">
                  {subtitle}
                </p>
                <ul className="space-y-3 flex-1">
                  {items.map((item, i) => (
                    <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-3">
                      <span className="text-primary/50 shrink-0 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
