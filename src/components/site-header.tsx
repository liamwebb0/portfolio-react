import { ThemeToggle } from '@/components/theme-toggle';

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
    </header>
  );
}
