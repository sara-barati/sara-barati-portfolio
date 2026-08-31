import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sara Barati — Front-End Developer
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:sarabarati045@gmail.com"
            aria-label="Email Sara Barati"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Sara Barati on LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Sara Barati on GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
