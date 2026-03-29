# dacreator.dev — Personal Portfolio

## Project Overview
Personal portfolio website for Dac Vu — Head of Creative & Brand at rightmart Group. Built with Astro 6, React 19, Tailwind CSS 4, Framer Motion, and GSAP. Bilingual (EN/DE) with i18n.

## Tech Stack
- **Framework:** Astro 6.1.1 (Static Site Generation)
- **UI:** React 19 + Framer Motion 12 + GSAP 3.14
- **Styling:** Tailwind CSS 4.2 with custom dark theme
- **Content:** MDX collections for projects and blog posts
- **i18n:** Custom implementation with EN/DE support

## Claudify Skills Library — PROACTIVE ACTIVATION

**CRITICAL: All 1727+ skills in `.claude/skills/` MUST be proactively detected and invoked.**

Before ANY task, Claude must:
1. Analyze the full project context by reading `memory.md` and `knowledge-base.md`
2. Identify which Claudify skills are relevant to the task
3. Read and follow the skill's structured process (4-step: Context, Analysis, Build, Validate)
4. Apply quality validation checklists from the skill before delivering
5. Update `memory.md` and nominate learnings to `knowledge-nominations.md`

### Priority Skill Categories for This Project

| Category | Path | Key Skills |
|----------|------|------------|
| **Design & Creative** | `.claude/skills/design/` | `responsive-design-spec`, `landing-page-design-brief`, `mobile-design-guide`, `color-palette-guide`, `typography-system`, `animation-brief`, `design-system`, `design-tokens`, `accessibility-design-guide`, `wcag-audit`, `interaction-design-spec`, `user-flow`, `brand-identity-system`, `persona-ux`, `usability-test` |
| **Content & Copywriting** | `.claude/skills/content/` | `homepage-copy`, `landing-page-copy`, `about-page-copy`, `cta-optimizer`, `microcopy-audit`, `headline-generator`, `value-proposition-copy`, `blog-post`, `brand-story` |
| **Marketing** | `.claude/skills/marketing/` | `brand-positioning`, `brand-messaging-framework`, `brand-voice-guide`, `audience-persona`, `value-proposition-canvas`, `competitor-analysis`, `personal-brand-audit` (in productivity) |
| **Development** | `.claude/skills/development/` | `responsive-design-checklist`, `accessibility-audit`, `optimization-checklist`, `performance-profiling`, `code-review-checklist`, `security-checklist` |
| **SEO & Search** | `.claude/skills/seo/` | All skills — meta tags, structured data, technical SEO, content optimization |
| **Social Media** | `.claude/skills/social-media/` | Platform-specific content, scheduling, engagement strategies |

### Skill Invocation Rules
- **UI/UX changes:** ALWAYS invoke `design/responsive-design-spec`, `design/accessibility-design-guide`, and `development/responsive-design-checklist`
- **Copy changes:** ALWAYS invoke `content/homepage-copy` or relevant content skill + `content/cta-optimizer`
- **Brand changes:** ALWAYS invoke `marketing/brand-positioning` and `marketing/brand-voice-guide`
- **New features:** ALWAYS invoke relevant design + development skills
- **Before delivery:** ALWAYS run quality validation from the skill's Step 4

### Anthropic Built-in Skills — Also Proactively Use
- `anthropic-skills:frontend-ux` — For production-grade frontend development
- `anthropic-skills:frontend-design` — For distinctive, polished UI design
- `anthropic-skills:browser-use` — For testing and visual verification

## Conventions
- All content strings live in `src/i18n/ui.ts` — never hardcode text in components
- Components use `data-animate` attributes for GSAP scroll animations
- React components are used for interactive elements (Hero, FeaturedProjects, GradientOrb)
- Astro components for static sections (About, Experience, Skills, Contact, Education)
- Dark theme with indigo (#6366f1) accent, cyan (#22d3ee) secondary
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints

## File Structure
```
src/
├── pages/{en,de}/     — Route pages with i18n
├── components/home/   — Home page section components
├── components/shared/ — Reusable animated components
├── layouts/           — BaseLayout with GSAP ScrollTrigger
├── i18n/              — Translations and locale utils
├── content/           — MDX content collections
└── styles/            — Global CSS with Tailwind
```
