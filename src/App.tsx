import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/theme-toggle';

const projects = [
  { title: 'Project One', meta: '2026 — Design, Code', href: '#' },
  { title: 'Project Two', meta: '2025 — Development', href: '#' },
  { title: 'Project Three', meta: '2024 — Branding', href: '#' },
  { title: 'Project Four', meta: '2024 — Web', href: '#' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/liamwebb0' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/liam-thomas-webb',
  },
];

export default function App() {
  return (
    <main className='mx-auto max-w-[620px] px-5 py-12 sm:px-6 sm:py-20'>
      {/* Header */}
      <header>
        <div className='flex items-start justify-between gap-4'>
          <div className='min-w-0'>
            <h1 className='text-2xl font-medium tracking-tight sm:text-[28px]'>
              {' '}
              Liam Webb
            </h1>
            <p className='mt-1 text-muted-foreground'>Developper</p>
          </div>
          <ThemeToggle />
        </div>
        <nav className='mt-6 flex flex-wrap items-center gap-x-5 gap-y-3'>
          <Button asChild className='min-h-[44px] sm:min-h-0'>
            <a href='#work'>Work</a>
          </Button>
          <Button asChild className='min-h-[44px] sm:min-h-0'>
            <a href='#about'>About</a>
          </Button>
          <Button asChild className='min-h-[44px] sm:min-h-0'>
            <a href='#contact'>Contact</a>
          </Button>
        </nav>
      </header>

      {/* Work */}
      <section id='work' className='mt-14 scroll-mt-20 sm:mt-[72px]'>
        <h2 className='mb-5 text-[13px] font-medium uppercase tracking-widest text-muted-foreground'>
          Selected Work
        </h2>
        <div>
          <Separator />
          {projects.map((p) => (
            <div key={p.title}>
              <a
                href={p.href}
                className='group flex flex-col gap-0.5 py-4 transition-all sm:flex-row sm:items-baseline sm:justify-between sm:hover:pl-2'
              >
                <span className='flex items-center gap-1'>
                  {p.title}
                  <ArrowUpRight className='h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100' />
                </span>
                <span className='text-sm text-muted-foreground sm:ml-4 sm:whitespace-nowrap'>
                  {p.meta}
                </span>
              </a>
              <Separator />
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id='about' className='mt-14 scroll-mt-20 sm:mt-[72px]'>
        <h2 className='mb-5 text-[13px] font-medium uppercase tracking-widest text-muted-foreground'>
          About
        </h2>
        <p className='max-w-[480px] leading-7'>
          I&apos;m a minimalist designer and developer focused on clarity,
          typography, and whitespace. I build quiet interfaces that let content
          speak.
        </p>
      </section>

      {/* Contact */}
      <section id='contact' className='mt-14 scroll-mt-20 sm:mt-[72px]'>
        <h2 className='mb-5 text-[13px] font-medium uppercase tracking-widest text-muted-foreground'>
          Contact
        </h2>
        <p className='leading-7'>
          <Button asChild>
            <a href='mailto:liam.wweebb@gmail.com'>liam.wweebb@gmail.com</a>
          </Button>
          <br />
          {socials.map((s, i) => (
            <span key={s.label}>
              <Button asChild>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </Button>
              {i < socials.length - 1 && (
                <span className='text-muted-foreground'> · </span>
              )}
            </span>
          ))}
        </p>
      </section>

      <footer className='mt-16 border-t pt-6 text-sm text-muted-foreground sm:mt-[88px]'>
        <p>© 2026 Liam Webb</p>
      </footer>
    </main>
  );
}
