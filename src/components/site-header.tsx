import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  return (
    <header>
      <div className='flex items-start justify-between gap-4'>
        <div className='min-w-0'>
          <h1 className='text-2xl font-medium tracking-tight sm:text-[28px]'>
            Liam Webb
          </h1>
          <p className='mt-1 text-muted-foreground'>Developer</p>
        </div>
        <ThemeToggle />
      </div>
      <nav className='mt-6 flex flex-wrap items-center gap-2'>
        {nav.map((item) => (
          <Button key={item.href} asChild variant='ghost' size='sm'>
            <a href={item.href}>{item.label}</a>
          </Button>
        ))}
      </nav>
    </header>
  );
}
