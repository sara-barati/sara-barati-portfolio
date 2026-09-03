'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Send, Check, Loader2, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mppzrbpq'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

const socials = [
  {
    label: 'Email',
    value: 'sarabarati045@gmail.com',
    href: 'mailto:sarabarati045@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: '/in/sara-barati-30064323b',
    href: 'https://www.linkedin.com/in/sara-barati-30064323b/',
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: '@sara-barati',
    href: 'https://github.com/sara-barati',
    icon: GithubIcon,
  },
]

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('sent')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="05" title="Contact" />

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1fr]">
        <Reveal className="space-y-8">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Have a project in mind or just want to say hello? Send a message or
            reach me directly through any of the channels below.
          </p>

          <ul className="space-y-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {social.label}
                      </span>
                      <span className="text-sm text-foreground transition-colors group-hover:text-primary">
                        {social.value}
                      </span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                placeholder="Your name"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="resize-none rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === 'sending' && (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending...
                </>
              )}
              {status === 'sent' && (
                <>
                  <Check className="size-4" />
                  Message sent
                </>
              )}
              {status === 'error' && (
                <>
                  <AlertCircle className="size-4" />
                  Try again
                </>
              )}
              {status === 'idle' && (
                <>
                  <Send className="size-4" />
                  Send message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
