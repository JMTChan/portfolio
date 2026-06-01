import type { Mode } from '@/context/ThemeProvider';

/** Prefix for files in /public when the site is served under a basePath. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface ModeContent {
  role: string;
  headline: string;
  /** short punchy phrase that types out under the headline */
  heroType: string;
  tagline: string;
  kicker: string;
  lede: string;
  skills: string[];
  about: string[];
  emphasisGroup: string;
  projectsTitle: string;
  projectsSub: string;
  contactHeadline: string;
  contactLede: string;
}

export interface Project {
  slug: string;
  title: string;
  year: number;
  track: Mode;
  featured: boolean;
  category: string;
  blurb: string;
  tags: string[];
  url: string | null;
  image: string | null;
}

export interface ExperienceItem {
  company: string;
  role: string;
  periods: string[];
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Identity {
  name: string;
  shortName: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
}

export interface PortfolioData {
  identity: Identity;
  content: Record<Mode, ModeContent>;
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  projects: Project[];
  /** dev-side personal/hobby builds — separate from client/professional work */
  hobbies: Project[];
  marquee: string[];
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

export const portfolio: PortfolioData = {
  identity: {
    name: 'Jasper Marc Chan',
    shortName: 'JMC',
    location: 'Davao City, Philippines',
    email: 'jaspermarc911@yahoo.com',
    phone: '+63 977 218 7379',
    resumeUrl:
      'https://drive.google.com/file/d/18OPqP3MumwwVhrCqBS9LWZMJ_fU2TUqu/view?usp=sharing',
  },

  content: {
    business: {
      role: 'Wix Website Designer & Wix Studio Developer',
      headline: 'Websites that quietly do their job well.',
      heroType: 'Designed end to end.',
      tagline: 'Wix · Velo · Client work',
      kicker: 'Available for new projects',
      lede: 'I design and develop custom Wix and Wix Studio sites for businesses, legal practices, and political campaigns — responsive, CMS-driven, and built to convert.',
      skills: ['Wix Studio', 'Velo', 'CMS Collections', 'Jotform Automation', 'SEO Optimization'],
      about: [
        'I build the kind of websites that quietly do their job well — fast, responsive, and built with intention rather than decoration.',
        'For 3+ years I have designed and developed custom sites using Wix Classic, Wix Studio, and Velo — from business and CMS-driven platforms to legal practice sites and political campaign pages.',
        'Most of my work comes from returning clients, which I take as the best signal I am doing something right.',
      ],
      emphasisGroup: 'Wix Ecosystem',
      projectsTitle: 'Selected Work',
      projectsSub: 'Client builds across Wix, Studio & Velo',
      contactHeadline: 'Have a project in mind?',
      contactLede:
        'Whether you need a Wix site built from scratch or a Velo developer to add custom functionality, I would love to hear about it.',
    },
    dev: {
      role: 'AI-Assisted Full-Stack Engineer',
      headline: 'Building scalable React apps and edge-deployed systems.',
      heroType: 'Shipped end to end.',
      tagline: 'Next.js · TypeScript · Full-stack',
      kicker: 'Open to contract & full-time roles',
      lede: 'I ship full-stack apps with an AI-assisted workflow — typed React frontends, Postgres-backed APIs, payment rails, and edge storage, deployed without ceremony.',
      skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Neon Postgres', 'Stripe Connect', 'Cloudflare R2'],
      about: [
        'I build full-stack web applications with an AI-assisted workflow — typed end to end, deployed to the edge, and shipped fast without cutting corners on craft.',
        'My current focus is Next.js and TypeScript on the frontend, Prisma and Neon Postgres for data, Stripe Connect for payments, and Cloudflare R2 for storage. I lean on tools like Claude Code to move quickly through complex features.',
        'The foundation is 3+ years of production client work on Wix Studio and Velo. That product instinct — shipping for real users and returning clients — carries directly into the systems I build now.',
      ],
      emphasisGroup: 'Modern Web',
      projectsTitle: 'Shipped Systems',
      projectsSub: 'Full-stack apps & engineering work',
      contactHeadline: 'Got something to build?',
      contactLede:
        'Whether it is a Next.js app, a payments integration, or a system that needs to scale, let us talk through it.',
    },
  },

  skillGroups: [
    {
      label: 'Wix Ecosystem',
      items: ['Wix Studio', 'Wix Classic', 'Velo by Wix', 'Dynamic Pages', 'CMS Collections', 'Custom Functionality'],
    },
    {
      label: 'Modern Web',
      items: ['Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL', 'Neon'],
    },
    {
      label: 'Integrations',
      items: ['Stripe Connect', 'Cloudflare R2', 'Vercel', 'Jotform', 'REST APIs'],
    },
    {
      label: 'Design & Workflow',
      items: ['AI-Assisted Dev', 'UI / UX Design', 'Responsive Design', 'SEO Optimization', 'Performance'],
    },
  ],

  experience: [
    {
      company: 'Simply Fast Websites',
      role: 'Wix Website Designer & Full-Stack Web Developer',
      periods: ['Apr 2023 – Nov 2023', 'May 2025 – Present'],
      bullets: [
        'Designed and developed custom Wix websites using Wix Classic and Velo.',
        'Built ilovefdl.com as an AI-assisted full-stack Next.js app using Claude Code, TypeScript, Tailwind, Prisma, Neon Postgres, Stripe Connect, Cloudflare R2, and Vercel.',
        'Contributed to a multi-vendor marketplace, community newspaper, and business directory platform for Fond du Lac, Wisconsin.',
        'Maintained and updated existing client websites for performance, responsiveness, and scalability.',
      ],
    },
    {
      company: 'Attorney Sholdon Daniels, PLLC',
      role: 'Wix Website Designer & Wix Studio Developer',
      periods: ['Jan 2024 – Dec 2024', 'Jun 2025 – Present'],
      bullets: [
        'Designed and developed custom Wix and Wix Studio sites for legal and political campaign projects.',
        'Built and maintained DanielsForUS.com and sholdondaniels.com using Wix Studio with responsive layouts and modern UI/UX.',
        'Implemented custom functionality and optimized performance for client engagement and accessibility.',
        'Provided ongoing maintenance, updates, and technical support.',
      ],
    },
    {
      company: 'Achieve Greatness, LLC',
      role: 'Wix Website Designer & Velo Developer',
      periods: ['Jul 2021 – Mar 2023'],
      bullets: [
        'Designed and developed responsive business websites using Wix and Velo, including achievegreatness.co.',
        'Created custom layouts, CMS-driven pages, and interactive features tailored to client requirements.',
        'Maintained and optimized websites for performance, security, and UX.',
        'Collaborated directly with clients to deliver scalable, visually engaging web solutions.',
      ],
    },
  ],

  projects: [
    {
      slug: 'i-love-fdl',
      title: 'I Love FDL',
      year: 2026,
      track: 'dev',
      featured: true,
      category: 'Full-stack · AI-assisted · 2026',
      blurb:
        'A multi-vendor marketplace, community newspaper, and business directory for Fond du Lac, Wisconsin. Built as an AI-assisted Next.js application with Stripe Connect, Cloudflare R2, and Neon Postgres.',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe Connect', 'Tailwind'],
      url: 'https://ilovefdl.com',
      image: '/assets/ilovefdl.png',
    },
    {
      slug: 'daniels-for-us',
      title: 'Daniels For US',
      year: 2024,
      track: 'business',
      featured: true,
      category: 'Wix Studio · Political · 2024',
      blurb:
        'Political campaign website for Attorney Sholdon Daniels, built on Wix Studio with responsive layouts, modern UI/UX, and custom functionality for engagement and accessibility.',
      tags: ['Wix Studio', 'Velo', 'Responsive', 'UI/UX'],
      url: 'https://danielsforus.com',
      image: '/assets/danielsforus.png',
    },
    {
      slug: 'sholdon-daniels-pllc',
      title: 'Sholdon Daniels, PLLC',
      year: 2024,
      track: 'business',
      featured: true,
      category: 'Wix Studio · Legal · 2024',
      blurb:
        'Professional legal practice website with modern UI/UX, responsive design, and a clear client-facing communication structure. Built and maintained on Wix Studio.',
      tags: ['Wix Studio', 'Velo', 'SEO', 'UI/UX'],
      url: 'https://sholdondaniels.com',
      image: '/assets/sholdondaniels.png',
    },
    {
      slug: 'humanitas-staffing',
      title: 'Humanitas Staffing',
      year: 2025,
      track: 'business',
      featured: true,
      category: 'Wix · Jotform · 2025',
      blurb:
        'Replaced PDF-based application workflows with a custom Jotform solution integrated into a Wix website — streamlining the application process and improving accessibility.',
      tags: ['Wix', 'Jotform', 'Automation'],
      url: 'https://humanitasholdings.com',
      image: '/assets/humanitasholding.png',
    },
    {
      slug: 'ancilla-corporation',
      title: 'Ancilla Corporation',
      year: 2025,
      track: 'business',
      featured: false,
      category: 'Wix Studio · Business · 2025',
      blurb:
        'Responsive business website built on Wix Studio with modern layouts, responsive sections, and an SEO-focused structure.',
      tags: ['Wix Studio', 'Responsive', 'SEO'],
      url: 'https://ancillaco.com',
      image: '/assets/ancillaco.png',
    },
    {
      slug: 'achieve-greatness',
      title: 'Achieve Greatness',
      year: 2021,
      track: 'business',
      featured: false,
      category: 'Wix · Velo · Business · 2021',
      blurb:
        'Responsive business website built with Wix and Velo — custom layouts, CMS-driven pages, and interactive features tailored to client requirements.',
      tags: ['Wix', 'Velo', 'CMS'],
      url: 'https://achievegreatness.co',
      image: '/assets/achievegreatness.png',
    },
  ],

  // Personal builds I make for fun — not client/professional work.
  // Add new experiments here over time.
  hobbies: [
    {
      slug: 'red-team-rl-simulator',
      title: 'Red Team RL Simulator',
      year: 2026,
      track: 'dev',
      featured: false,
      category: 'Reinforcement Learning · Security',
      blurb:
        'An interactive penetration-testing environment with reinforcement-learning agents trained via automated GitHub Actions pipelines, visualized through a Next.js frontend. A personal experiment in security tooling and RL.',
      tags: ['Next.js', 'GitHub Actions', 'RL', 'Visualization'],
      url: 'https://jmtchan.github.io/red-team-sim/',
      image: '/assets/redteamsim.png',
    },
  ],

  marquee: [
    'Wix Studio', 'Velo', 'Next.js', 'TypeScript', 'Tailwind', 'Prisma',
    'PostgreSQL', 'Stripe Connect', 'Cloudflare R2', 'Vercel', 'AI-Assisted', 'SEO',
  ],
};

/* ------------------------------------------------------------------ */
/*  Selectors                                                          */
/* ------------------------------------------------------------------ */

export const getContent = (mode: Mode): ModeContent => portfolio.content[mode];

export const getProjects = (mode: Mode, featuredOnly = false): Project[] =>
  portfolio.projects.filter(
    (p) => p.track === mode && (!featuredOnly || p.featured),
  );
