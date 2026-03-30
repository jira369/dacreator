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
      color: '#c8a96e',
    },
    {
      title: 'rightmart',
      description:
        'Social media marketing leadership at one of Germany\'s leading legal tech companies. From performance marketing manager to team lead — managing paid social, native ads, CRO, and a team of 7.',
      tags: ['Paid Social', 'Native Ads', 'CRO', 'Team Leadership', 'Legal Tech'],
      href: '/en/projects/rightmart',
      color: '#7dd3c0',
    },
    {
      title: 'InstaPy',
      description:
        'Open-source Instagram automation tool built with Python. Automated interactions including likes, follows, and comments with smart targeting algorithms.',
      tags: ['Python', 'Automation', 'Open Source', 'APIs'],
      href: '/en/projects/instapy',
      color: '#dfc28e',
    },
  ],
  de: [
    {
      title: 'Leben in Deutschland',
      description:
        'Eine umfassende App zur Vorbereitung auf den Einbürgerungstest. Full-Stack Web- & Mobile-Anwendung mit 300+ Übungsfragen, Fortschrittsverfolgung und Push-Benachrichtigungen.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Express', 'PostgreSQL', 'Capacitor'],
      href: '/de/projects/leben-in-deutschland',
      color: '#c8a96e',
    },
    {
      title: 'rightmart',
      description:
        'Social-Media-Marketing-Leitung bei einem der führenden deutschen Legal-Tech-Unternehmen. Vom Performance Marketing Manager zum Teamleiter — Paid Social, Native Ads, CRO und ein 7-köpfiges Team.',
      tags: ['Paid Social', 'Native Ads', 'CRO', 'Teamleitung', 'Legal Tech'],
      href: '/de/projects/rightmart',
      color: '#7dd3c0',
    },
    {
      title: 'InstaPy',
      description:
        'Open-Source Instagram-Automatisierungstool in Python. Automatisierte Interaktionen wie Likes, Follows und Kommentare mit smarten Targeting-Algorithmen.',
      tags: ['Python', 'Automatisierung', 'Open Source', 'APIs'],
      href: '/de/projects/instapy',
      color: '#dfc28e',
    },
  ],
  vi: [
    {
      title: 'Leben in Deutschland',
      description:
        'Ứng dụng ôn thi nhập quốc tịch Đức toàn diện. Ứng dụng web & di động full-stack với 300+ câu hỏi luyện tập, theo dõi tiến độ và thông báo đẩy.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Express', 'PostgreSQL', 'Capacitor'],
      href: '/vi/projects/leben-in-deutschland',
      color: '#c8a96e',
    },
    {
      title: 'rightmart',
      description:
        'Lãnh đạo social media marketing tại một trong những công ty công nghệ pháp lý hàng đầu Đức. Từ Performance Marketing Manager đến Trưởng nhóm — quản lý paid social, native ads, CRO và đội ngũ 7 người.',
      tags: ['Paid Social', 'Native Ads', 'CRO', 'Lãnh đạo nhóm', 'Legal Tech'],
      href: '/vi/projects/rightmart',
      color: '#7dd3c0',
    },
    {
      title: 'InstaPy',
      description:
        'Công cụ tự động hóa Instagram mã nguồn mở được xây dựng bằng Python. Tự động hóa tương tác bao gồm like, follow và comment với thuật toán nhắm mục tiêu thông minh.',
      tags: ['Python', 'Tự động hóa', 'Mã nguồn mở', 'APIs'],
      href: '/vi/projects/instapy',
      color: '#dfc28e',
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
            <span className="text-accent font-medium text-xs tracking-[0.25em] uppercase mb-4 block">
              {heading}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em]">
              {{ en: 'Selected ', de: 'Ausgewählte ', vi: 'Các ' }[lang] || 'Selected '}
              <span className="text-text-muted">{{ en: 'work.', de: 'Arbeiten.', vi: 'dự án.' }[lang] || 'work.'}</span>
            </h2>
          </div>
          <a
            href={viewAllHref}
            className="hidden sm:inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors group"
          >
            {viewAll}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
          className="grid gap-4"
        >
          {projectList.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              variants={item}
              className="group relative p-8 bg-surface rounded-xl border border-border hover:border-accent/20 transition-all duration-500 overflow-hidden"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
              }}
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
                  className="text-5xl font-black leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ color: project.color }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-light transition-colors duration-300">
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

                <div className="self-center text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 shrink-0">
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
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
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
