import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    title: 'HR Management Suite',
    description:
      'Internal platform for managing employee records, leave, and reporting — built end-to-end with reusable components and automated Excel exports.',
    image: '/projects/project-hr.png',
    tags: ['Next.js', 'TypeScript', 'Redux', 'ExcelJS'],
    href: '#',
  },
  {
    title: 'CRM & Payments Platform',
    description:
      'Customer relationship platform for tracking transactions, invoices, and payment records, with SMS notifications and phone-based payments.',
    image: '/projects/project-crm.png',
    tags: ['React', 'REST', 'React Query'],
    href: '#',
  },
  {
    title: 'Announcements Intranet',
    description:
      'Company-wide intranet for internal announcements and vendor–purchasing communication, focused on fast, accessible content delivery.',
    image: '/projects/project-intranet.png',
    tags: ['React', 'Next.js', 'Sass'],
    href: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="04" title="Projects" />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            as="article"
            key={project.title}
            delay={i * 90}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/40"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} interface preview`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.href}
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-primary transition-colors hover:text-foreground"
              >
                View Project
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
