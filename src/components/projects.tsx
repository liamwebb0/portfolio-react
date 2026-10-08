import { ArrowUpRight, Server } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/section-heading';
import { projects, type Project } from '@/data/content';

function ProjectLogo({ project }: { project: Project }) {
  return (
    <span className='flex h-6 w-9 shrink-0 items-center justify-center'>
      {project.logo ? (
        <img
          src={project.logo}
          alt={`${project.title} logo`}
          className='h-full w-full rounded-sm object-contain'
        />
      ) : (
        <Server className='h-5 w-5 text-muted-foreground' aria-hidden />
      )}
    </span>
  );
}

function ProjectTitle({ project }: { project: Project }) {
  const content = (
    <>
      <ProjectLogo project={project} />
      <span className='truncate'>{project.title}</span>
      {project.href && (
        <ArrowUpRight className='h-4 w-4 shrink-0 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100' />
      )}
    </>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target='_blank'
        rel='noopener noreferrer'
        onClick={(e) => e.stopPropagation()}
        className='group flex min-w-0 items-center gap-2'
      >
        {content}
      </a>
    );
  }

  return <span className='flex min-w-0 items-center gap-2'>{content}</span>;
}

export function Projects() {
  return (
    <section id='projects' className='mt-12 scroll-mt-20 sm:mt-16'>
      <SectionHeading>Projects</SectionHeading>
      <Accordion type='single' collapsible className='flex flex-col gap-2'>
        {projects.map((project, i) => (
          <AccordionItem
            key={project.title}
            value={`item-${i}`}
            className='border-none'
          >
            <AccordionTrigger className='group gap-4 hover:no-underline'>
              <span className='flex min-w-0 flex-1 flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between'>
                <ProjectTitle project={project} />
                <Badge
                  variant='secondary'
                  className='w-fit sm:ml-4 sm:whitespace-nowrap'
                >
                  {project.meta}
                </Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className='max-w-[480px] text-[15px] leading-7 text-muted-foreground'>
                {project.description}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
