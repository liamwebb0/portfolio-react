import { useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import { email, socials } from '@/data/content';
import { cn } from '@/lib/utils';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  const orderedSocials = [...socials].sort((a, b) => {
    if (a.label === 'LinkedIn') return -1;
    if (b.label === 'LinkedIn') return 1;
    return 0;
  });

  return (
    <section id='contact' className='mt-14 scroll-mt-20 sm:mt-[72px]'>
      <SectionHeading>Contact</SectionHeading>
      <div className='flex flex-col items-start gap-2'>
        <div className='flex items-center gap-3'>
          <Button
            type='button'
            variant='default'
            size='default'
            onClick={copyEmail}
          >
            {copied ? (
              <Check className='mr-2 h-4 w-4' aria-hidden />
            ) : (
              <Copy className='mr-2 h-4 w-4' aria-hidden />
            )}
            {email}
          </Button>
          <span
            aria-live='polite'
            className={cn(
              'text-sm text-muted-foreground transition-all duration-300 ease-out',
              copied
                ? 'translate-x-0 opacity-100'
                : 'pointer-events-none -translate-x-2 opacity-0',
            )}
          >
            Copied
          </span>
        </div>
        <div className='flex flex-col items-start gap-2'>
          {orderedSocials.map((social) => (
            <Button key={social.label} asChild variant='default' size='default'>
              <a href={social.href} target='_blank' rel='noopener noreferrer'>
                {social.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
