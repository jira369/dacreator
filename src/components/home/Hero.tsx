import { motion } from 'framer-motion';
import GradientOrb from '../shared/GradientOrb';

interface Props {
  greeting: string;
  name: string;
  title: string;
  subtitle: string;
  cta: string;
  scrollText: string;
  lang: string;
}

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.04,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero({ greeting, name, title, subtitle, cta, scrollText, lang }: Props) {
  const nameChars = name.split('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background orbs */}
      <GradientOrb color="#6366f1" size={600} top="-10%" left="60%" delay={0.5} />
      <GradientOrb color="#22d3ee" size={400} top="60%" left="-10%" delay={1} />
      <GradientOrb color="#6366f1" size={300} top="70%" left="70%" delay={1.5} />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-accent-light font-medium mb-4 text-sm tracking-widest uppercase"
          >
            {greeting}
          </motion.p>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={char === ' ' ? { width: '0.3em' } : undefined}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            custom={1.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl text-text-muted font-light mb-4"
          >
            {title}
          </motion.p>

          <motion.p
            custom={1.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-text-muted/70 max-w-md mb-8 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            custom={1.6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              {cta}
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

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/jira369"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/dacvu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-cyan/20 rounded-3xl blur-3xl scale-110" />

            <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-border/50">
              <img
                src="/images/dac-portrait.jpg"
                alt="Dac Vu"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted/50 tracking-widest uppercase">
          {scrollText}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-text-muted/30 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
