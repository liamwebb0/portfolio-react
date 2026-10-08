import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
  return (
    <header>
      <div className='flex items-start justify-between gap-4'>
        <div className='flex items-center gap-4 min-w-0'>
          <img
            src='/profil.jpeg'
            alt='Liam Webb'
            width={64}
            height={64}
            className='h-16 w-16 shrink-0 rounded-full object-cover'
          />
          <div className='min-w-0'>
            <h1 className='text-2xl font-medium tracking-tight sm:text-[28px]'>
              Liam Webb
            </h1>
            <p className='mt-1 text-muted-foreground'>Software Engineer</p>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
