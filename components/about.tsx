import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const stats = [
  { value: '3+', label: 'Years experience' },
  { value: '320+', label: 'Hours React training' },
  { value: '2', label: 'Companies shipped for' },
  { value: '10+', label: 'Enterprise apps built' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="01" title="About" />

      <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a Front-End Developer with{' '}
            <span className="text-foreground">3+ years of experience</span>{' '}
            building and maintaining production web applications using React,
            Next.js, and TypeScript.
          </p>
          <p>
            I focus on{' '}
            <span className="text-foreground">advanced state management</span>,{' '}
            <span className="text-foreground">performance optimization</span>,
            and reliable{' '}
            <span className="text-foreground">component testing</span> with Jest
            and React Testing Library. I&apos;m comfortable shipping through
            CI/CD pipelines on Azure DevOps.
          </p>
          <p>
            I hold a Bachelor&apos;s degree in Computer Engineering from Semnan
            University, complemented by 320+ hours of dedicated React
            specialization training at Maktab Sharif.
          </p>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card p-6">
              <div className="font-mono text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
