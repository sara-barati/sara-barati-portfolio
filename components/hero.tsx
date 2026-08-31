import { ArrowUpRight, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* animated grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'grid-drift 8s linear infinite',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, oklch(0.78 0.13 185) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-32">
        <div className="reveal in-view flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          <span className="inline-block size-2 animate-pulse rounded-full bg-primary" />
          Available for new opportunities
        </div>

        <h1 className="reveal in-view mt-6 text-balance font-mono text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl" style={{ animationDelay: '80ms' }}>
          Sara Barati
        </h1>

        <p className="reveal in-view mt-4 font-mono text-lg text-primary sm:text-xl" style={{ animationDelay: '160ms' }}>
          Front-End Developer
        </p>

        <p className="reveal in-view mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: '240ms' }}>
          Building enterprise web apps — from HR &amp; CRM platforms to internal
          dashboards. Three years shipping production interfaces with React,
          Next.js, and TypeScript.
        </p>

        <div className="reveal in-view mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '320ms' }}>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-mono text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Contact me
          </a>
          <span className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground">
            <MapPin className="size-4" />
            Tehran, Iran
          </span>
        </div>
      </div>
    </section>
  )
}
