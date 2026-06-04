"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import SectionHeader from "./SectionHeader";

const cards = [
  {
    symbol: "◈",
    title: "Bharatanatyam",
    subtitle: "Natya Visharad · Multiple Credentials",
    items: [
      "Training since 2017 in classical Bharatanatyam",
      "Natya Visharad and several other academic titles",
      "Arangetram on 3rd March 2024 — performing at cultural, institutional, and festival stages",
      "Teaching Bharatanatyam alongside active performing",
    ],
  },
  {
    symbol: "◉",
    title: "Karate & Sports",
    subtitle: "Okinawan Style · Multi-Sport Athlete",
    items: [
      "Training since 2012 in Okinawan-style Karate",
      "Black Dan achieved in 2018",
      "State and national competition participant",
      "Competed in kabaddi and sprints at institutional level",
    ],
  },
  {
    symbol: "▽",
    title: "Adventure",
    subtitle: "Heights · Speed · Outdoors",
    items: [
      "90-degree swing in Bekal and zip-lining in Udaipur — among the highlights so far",
      "Always drawn to the next thrill — heights, speed, and outdoor challenges",
    ],
  },
  {
    symbol: "◎",
    title: "Music",
    subtitle: "Guitar · Flute · Listening",
    items: [
      "Plays guitar and flute — instrumental music as a meditative outlet",
      "Listens across genres, classical to contemporary",
      "A constant companion through work, travel, and creative sessions",
    ],
  },
  {
    symbol: "◇",
    title: "Crochet",
    subtitle: "Handcraft · Patience · Making",
    items: [
      "Calm found in the rhythm of crochet — a break from screens",
      "Makes handmade pieces for personal use and gifts",
    ],
  },
  {
    symbol: "△",
    title: "Sketching & Painting",
    subtitle: "Oil Pastels · Watercolours",
    items: [
      "Sketches and paints with oil pastels and watercolours",
      "Drawn to the texture and layering of pastels and the fluidity of watercolour",
    ],
  },
  {
    symbol: "◐",
    title: "Reading",
    subtitle: "Books & Ideas",
    items: [
      "Reads across fiction, non-fiction, and technical writing",
      "A way to slow down, think deeper, and stay curious",
    ],
  },
  {
    symbol: "◑",
    title: "Yoga",
    subtitle: "Mind · Body · Balance",
    items: [
      "Daily practice for flexibility, focus, and calm",
      "Practises yoga for discipline and balance",
      "Complements Karate training — intensity balanced with stillness",
    ],
  },
  {
    symbol: "◬",
    title: "Korean & Culture",
    subtitle: "한국어 · Language · Culture",
    items: [
      "Learning Korean — TOPIK II preparation in progress",
      "Drawn to Korean culture, music, and the language's rhythm",
      "Preparing for MS Computer Science in South Korea",
    ],
  },
];

const TOTAL = cards.length;
const AUTO_MS = 3_500;
const PAUSE_MS = 90_000;

function circularOffset(i: number, current: number) {
  let offset = ((i - current) % TOTAL + TOTAL) % TOTAL;
  if (offset > Math.floor(TOTAL / 2)) offset -= TOTAL;
  return offset;
}

export default function BeyondTech() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % TOTAL);
  }, []);

  const startAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, AUTO_MS);
  }, [advance]);

  const stopAuto = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAuto();
    return () => {
      stopAuto();
      if (pauseRef.current) clearTimeout(pauseRef.current);
    };
  }, [startAuto, stopAuto]);

  const handleManual = (next: number) => {
    stopAuto();
    if (pauseRef.current) clearTimeout(pauseRef.current);
    setCurrent(next);
    pauseRef.current = setTimeout(startAuto, PAUSE_MS);
  };

  return (
    <section id="beyond" className="py-28 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="05"
          title="Beyond Technology"
          subtitle="Discipline, artistic depth, and genuine curiosity — these shape how I work, not just what I do outside it."
        />

        {/* 3D Coverflow */}
        <div
          className="relative h-105 flex items-center justify-center overflow-hidden"
          style={{ perspective: "1100px" }}
        >
          {/* Left arrow — fixed to container edges, always same position */}
          <button
            onClick={() => handleManual((current - 1 + TOTAL) % TOTAL)}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full border border-border bg-card shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-200 text-sm"
          >
            ←
          </button>

          {cards.map((card, i) => {
            const offset = circularOffset(i, current);
            if (Math.abs(offset) > 2) return null;

            const tx = offset * 230;
            const ry = -offset * 38;
            const sc = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.78 : 0.62;
            const op = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.5 : 0.22;
            const zi = offset === 0 ? 20 : Math.abs(offset) === 1 ? 10 : 2;

            return (
              <div
                key={card.title}
                onClick={() => offset !== 0 && handleManual(i)}
                style={{
                  transform: `translateX(${tx}px) rotateY(${ry}deg) scale(${sc})`,
                  opacity: op,
                  zIndex: zi,
                  transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.55s ease",
                }}
                className={`absolute w-72 rounded-2xl border bg-card overflow-hidden p-7 flex flex-col h-96 ${
                  offset === 0
                    ? "border-primary/30 shadow-lg"
                    : "border-border cursor-pointer"
                }`}
              >
                {/* Watermark symbol */}
                <span
                  className="absolute bottom-3 right-4 font-heading font-light leading-none select-none pointer-events-none"
                  style={{ fontSize: "7rem", color: "rgba(166,124,82,0.08)" }}
                >
                  {card.symbol}
                </span>

                <p className="font-body text-[10px] text-primary tracking-[0.3em] uppercase mb-2">
                  {card.subtitle}
                </p>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  {card.title}
                </h3>

                <ul className="space-y-2 flex-1">
                  {card.items.map((item, j) => (
                    <li
                      key={j}
                      className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2.5"
                    >
                      <span className="text-primary/50 shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Right arrow */}
          <button
            onClick={() => handleManual((current + 1) % TOTAL)}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full border border-border bg-card shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-200 text-sm"
          >
            →
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManual(i)}
              aria-label={`Card ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 h-1.5 bg-primary"
                  : "w-1.5 h-1.5 bg-border hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
