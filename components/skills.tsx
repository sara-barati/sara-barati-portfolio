import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const groups = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Redux Toolkit', 'React Hook Form', 'Formik'],
  },
  {
    title: 'Styling',
    items: ['Sass', 'Styled Components', 'Material UI', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Azure DevOps (CI/CD)', 'Webpack'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'React Testing Library'],
  },
  {
    title: 'API & Data',
    items: ['REST', 'React Query'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="02" title="Skills" />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 70}
            className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
