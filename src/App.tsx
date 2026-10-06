import { SiteHeader } from '@/components/site-header';
import { Experience } from '@/components/experience';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { SiteFooter } from '@/components/site-footer';

export default function App() {
  return (
    <main className='mx-auto max-w-[620px] px-5 py-12 sm:px-6 sm:py-20'>
      <SiteHeader />
      <Experience />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  );
}
