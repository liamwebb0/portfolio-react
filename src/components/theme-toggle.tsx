import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function getInitialTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  // Keep in sync if OS theme changes and user hasn't picked manually.
  // (Only applies before first manual toggle — after that localStorage wins.)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      if (window.localStorage.getItem('theme')) return;
      setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const isDark = theme === 'dark';

  return (
    <Button
      type='button'
      variant='outline'
      size='sm'
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        // 44px touch target for mobile, rounded icon button
        'h-11 w-11 shrink-0 rounded-md p-0 sm:h-9 sm:w-9',
        className,
      )}
    >
      <span className='relative block h-5 w-5'>
        <Sun
          aria-hidden
          className={cn(
            'absolute inset-0 h-5 w-5 transition-all',
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100',
          )}
        />
        <Moon
          aria-hidden
          className={cn(
            'absolute inset-0 h-5 w-5 transition-all',
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0',
          )}
        />
      </span>
    </Button>
  );
}
