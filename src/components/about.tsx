import { SectionHeading } from '@/components/section-heading';

export function About() {
  return (
    <section id='about' className='mt-14 scroll-mt-20 sm:mt-[72px]'>
      <SectionHeading>About</SectionHeading>
      <p className='max-w-[480px] leading-7'>
        I’m an engineering student at Polytech Nice-Sophia, interested in
        coding, networking, software, and cybersecurity. I enjoy learning by
        building and experimenting. When I come across something I don’t
        understand, I like to dive into it, understand how it works, and put
        that knowledge into practice through hands-on projects. My goal is to
        build a career in network security, with a particular interest in
        Fortinet and cybersecurity infrastructure.
      </p>
    </section>
  );
}
