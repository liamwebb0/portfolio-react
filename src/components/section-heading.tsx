import type { ReactNode } from 'react';

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className='mb-5 text-[13px] font-medium uppercase tracking-widest text-muted-foreground'>
      {children}
    </h2>
  );
}
