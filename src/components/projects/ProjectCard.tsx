import { motion } from 'framer-motion';
import { logoFor } from '../../data/logos';

interface Props {
  title: string;
  description: string;
  tags: string[];
  href: string;
  viewProject: string;
  index: number;
  meta?: string;
  role?: string;
}

// Karte aus der ersten Version der Seite, ohne Nummerierung, mit Zeitraum und Rolle.
export default function ProjectCard({ title, description, tags, href, viewProject, index, meta, role }: Props) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group has-logo block p-7 sm:p-8 bg-surface rounded-2xl border border-border hover:border-accent/40 hover:bg-surface-hover transition-colors duration-300"
    >
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h3 className="text-xl font-semibold tracking-tight group-hover:text-accent transition-colors">{title}</h3>
        {meta && <span className="text-sm text-text-muted whitespace-nowrap tabular-nums">{meta}</span>}
      </div>
      {role && <p className="text-accent-light text-sm mb-3">{role}</p>}
      <p className="text-text-muted text-base leading-relaxed mb-6">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[13px] text-text-primary bg-background rounded-md border border-border">
            {logoFor(tag) && <img src={logoFor(tag)} alt="" className="tag-logo logo-img" loading="lazy" />}
            {tag}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-[gap]">
        {viewProject}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </motion.a>
  );
}
