"use client";

import { useEffect } from "react";

// Marks each `.reveal` element with `data-shown` the first time it scrolls into
// view, which plays its blur-in (styles in globals.css). Plays once, never reverses.
export default function RevealObserver() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-shown", "");
          obs.unobserve(entry.target);
        }
      },
      // Trigger a little before the element is fully on screen.
      { rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
