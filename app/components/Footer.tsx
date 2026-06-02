import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted/40 py-10 px-6">
      <Separator className="mb-10 bg-border" />
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading text-xl text-primary tracking-widest">TK</span>
        <p className="font-body text-xs text-muted-foreground tracking-wide text-center">
          Designed &amp; built by{" "}
          <span className="text-foreground">Tulsimani Kumar</span> · 2026
        </p>
        <a
          href="#"
          className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wider uppercase"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
