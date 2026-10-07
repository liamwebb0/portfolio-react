export type Project = {
  title: string;
  meta: string;
  href?: string;
  logo?: string;
  description: string;
};

export const experience: Project[] = [
  {
    title: 'Schneider Electric',
    meta: 'July - August 2026',
    description:
      'Industrial automation and software development within the EcoStruxure Automation Expert environment. Developed automated tests for SAFE blocks to detect and handle errors in Soft dPAC devices.',
    logo: '/schneiderlogo.svg',
  },
  {
    title: 'NXP Semiconductors',
    meta: 'December 2022',
    description:
      'Observation internship within the HW and SW R&D teams at NXP Semiconductors. Discovered semiconductor R&D activities, observed engineers working on electronic components, and gained insight into the technological development cycle and teamwork in an international engineering environment.',
    logo: '/NXP-Logo.svg',
  },
];

export const projects: Project[] = [
  {
    title: 'Homelab',
    meta: 'August 2026 - Present',
    description:
      'Self-hosted homelab focused on networking, virtualization, and cybersecurity. Set up and maintain servers, VMs, containers, and network infrastructure using Proxmox and OPNsense, experimenting with firewalls, routing, VLANs, VPNs, network segmentation, and access control.',
  },
  {
    title: 'Whytoff Game',
    meta: '2025 - PeiP1',
    href: 'https://github.com/liamwebb0/Whytoff_game',
    logo: '/python-logo.svg',
    description:
      'Implementation of the Whytoff game in Python (Turtle) done in PeiP1 class. Three variants: (1) classic rules version, (2) version with no limit on the number of objects you can take, (3) version where the computer applies the winning strategy and systematically wins.',
  },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/liamwebb0' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/liam-thomas-webb',
  },
];

export const email = 'liam.wweebb@gmail.com';
