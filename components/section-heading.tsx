import { Reveal } from '@/components/reveal'

interface SectionHeadingProps {
  index: string
  title: string
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <Reveal className="flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{index}</span>
      <h2 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </Reveal>
  )
}
