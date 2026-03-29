import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  tags: string[];
  href: string;
  viewProject: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, href, viewProject, index }: Props) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group block p-8 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-300"
    >
      <span className="text-4xl font-black text-accent/10 block mb-4">
        {String(index + 1).padStart(2, '0')}
      </span>

      <h3 className="text-xl font-bold mb-3 group-hover:text-accent-light transition-colors">
        {title}
      </h3>

      <p className="text-text-muted text-sm leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 text-xs text-text-muted bg-background rounded-md border border-border"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="inline-flex items-center gap-2 text-sm text-accent-light group-hover:gap-3 transition-all">
        {viewProject}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </motion.a>
  );
}
