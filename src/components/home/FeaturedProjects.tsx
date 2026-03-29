import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  color: string;
}

interface Props {
  heading: string;
  viewAll: string;
  viewProject: string;
  lang: string;
  viewAllHref: string;
}

const projects: Record<string, Project[]> = {
  en: [
    {
      title: 'Leben in Deutschland',
      description:
        'A comprehensive German citizenship test preparation app. Full-stack web & mobile application with 300+ practice questions, progress tracking, and push notifications.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Express', 'PostgreSQL', 'Capacitor'],
      href: '/en/projects/leben-in-deutschland',
      color: '#6366f1',
    },
    {
      title: 'rightmart',
      description:
        'Digital marketing and growth strategy for a leading legal tech company. Driving user acquisition, brand positioning, and conversion optimization.',
      tags: ['Marketing Strategy', 'SEO', 'Growth', 'Legal Tech'],
      href: '/en/projects/rightmart',
      color: '#22d3ee',
    },
    {
      title: 'InstaPy',
      description:
        'Open-source Instagram automation tool built with Python. Automated interactions including likes, follows, and comments with smart targeting algorithms.',
      tags: ['Python', 'Automation', 'Open Source', 'APIs'],
      href: '/en/projects/instapy',
      color: '#818cf8',
    },
  ],
  de: [
    {
      title: 'Leben in Deutschland',
      description:
        'Eine umfassende App zur Vorbereitung auf den Einbürgerungstest. Full-Stack Web- & Mobile-Anwendung mit 300+ Übungsfragen, Fortschrittsverfolgung und Push-Benachrichtigungen.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Express', 'PostgreSQL', 'Capacitor'],
      href: '/de/projects/leben-in-deutschland',
      color: '#6366f1',
    },
    {
      title: 'rightmart',
      description:
        'Digitales Marketing und Wachstumsstrategie für ein führendes Legal-Tech-Unternehmen. Steuerung der Nutzerakquise, Markenpositionierung und Conversion-Optimierung.',
      tags: ['Marketing Strategie', 'SEO', 'Growth', 'Legal Tech'],
      href: '/de/projects/rightmart',
      color: '#22d3ee',
    },
    {
      title: 'InstaPy',
      description:
        'Open-Source Instagram-Automatisierungstool in Python. Automatisierte Interaktionen wie Likes, Follows und Kommentare mit smarten Targeting-Algorithmen.',
      tags: ['Python', 'Automatisierung', 'Open Source', 'APIs'],
      href: '/de/projects/instapy',
      color: '#818cf8',
    },
  ],
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FeaturedProjects({ heading, viewAll, viewProject, lang, viewAllHref }: Props) {
  const projectList = projects[lang] || projects.en;

  return (
    <section className="py-32 px-6" id="projects">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
              {heading}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              {lang === 'en' ? 'Selected ' : 'Ausgewählte '}
              <span className="text-text-muted">{lang === 'en' ? 'work.' : 'Arbeiten.'}</span>
            </h2>
          </div>
          <a
            href={viewAllHref}
            className="hidden sm:inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-light transition-colors group"
          >
            {viewAll}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6"
        >
          {projectList.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              variants={item}
              className="group relative p-8 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}08, transparent 40%)`,
                }}
              />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Project number */}
                <span
                  className="text-5xl font-black leading-none"
                  style={{ color: `${project.color}30` }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs text-text-muted bg-background rounded-md border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="self-center text-text-muted group-hover:text-accent-light group-hover:translate-x-1 transition-all shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-8 sm:hidden text-center">
          <a
            href={viewAllHref}
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-light transition-colors"
          >
            {viewAll}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
