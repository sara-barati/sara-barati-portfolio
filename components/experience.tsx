import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const roles = [
  {
    company: 'Nargan Company',
    title: 'Front-End Developer',
    period: '05/2023 – 06/2026',
    location: 'Tehran, Iran',
    points: [
      'Built and maintained multiple internal enterprise applications, including an employee announcements intranet, a vendor–purchasing communication system, and HR management tools.',
      'Developed features end-to-end using React, Next.js, TypeScript, Redux, and React Hook Form.',
      'Automated Excel-based reporting workflows using ExcelJS, reducing manual data-handling steps for internal teams.',
      'Collaborated within CI/CD pipelines on Azure DevOps to ship and deploy application updates.',
      'Wrote component and unit tests with Jest and React Testing Library to improve code reliability.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Redux', 'ExcelJS', 'Azure DevOps'],
  },
  {
    company: 'Visitel',
    title: 'Front-End Developer',
    period: '2022 – 2023',
    location: 'Tehran, Iran',
    points: [
      'Developed a customer relationship management (CRM) platform for viewing transactions, invoices, and payment records.',
      'Implemented SMS notification and phone-based payment features integrated into the platform.',
      'Built UI components and workflows supporting day-to-day financial transaction tracking for end users.',
    ],
    stack: ['React', 'JavaScript', 'REST', 'CRM'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="03" title="Experience" />

      <ol className="mt-12 space-y-4">
        {roles.map((role, i) => (
          <Reveal
            as="li"
            key={role.company}
            delay={i * 100}
            className="relative rounded-lg border border-border bg-card p-6 md:p-8"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {role.title}{' '}
                  <span className="text-primary">@ {role.company}</span>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {role.location}
                </p>
              </div>
              <span className="font-mono text-sm text-muted-foreground">
                {role.period}
              </span>
            </div>

            <ul className="mt-5 space-y-3">
              {role.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-pretty leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2.5 inline-block size-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {role.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
