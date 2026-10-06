import { SectionHeading } from '@/components/section-heading';

export function About() {
  return (
    <section id='about' className='mt-14 scroll-mt-20 sm:mt-[72px]'>
      <SectionHeading>About</SectionHeading>
      <p className='max-w-[480px] leading-7'>
        I’m an engineering student at Polytech Nice-Sophia, interested in
        coding, networking, software, and cybersecurity. I enjoy learning by
        building and experimenting, and when I don’t know something, I like to
        dive into it and understand it in detail.
      </p>
    </section>
  );
}
