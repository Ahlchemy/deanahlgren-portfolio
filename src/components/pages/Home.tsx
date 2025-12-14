import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Code2, Lightbulb, GraduationCap, TrendingUp } from 'lucide-react'
import { getFeaturedProjects } from '@/data/projects'
import { getFeaturedCourses } from '@/data/courses'
import { stats } from '@/data/timeline'

const statsDisplay = [
  { label: 'Years Experience', value: `${stats.yearsExperience}+` },
  { label: 'Courses Designed', value: `${stats.coursesDesigned}+` },
  { label: 'Enrollment Growth', value: stats.enrollmentGrowth },
  { label: 'Dropout Reduction', value: stats.dropoutReduction },
]

// Combine featured projects and courses for display
const getFeaturedWork = () => {
  const projects = getFeaturedProjects().slice(0, 3)
  const courses = getFeaturedCourses().slice(0, 2)

  const combined = [
    ...projects.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.shortDescription,
      category: p.category === 'applications' ? 'Application' :
               p.category === 'data-science' ? 'Data Science' : 'Project',
      href: `/work/${p.slug}`,
      type: 'project' as const,
    })),
    ...courses.map((c) => ({
      id: c.id,
      title: c.title,
      description: c.shortDescription,
      category: 'Interactive Course',
      href: `/work/${c.slug}`,
      type: 'course' as const,
    })),
  ]

  return combined.slice(0, 5)
}

export function Home() {
  const featuredWork = getFeaturedWork()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-start bg-hero-gradient overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]" />
        </div>

        <div className="container-wide relative z-10 pt-[8vh] md:pt-[10vh] pb-20">
          <div className="grid lg:grid-cols-[1fr,32%] gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[620px]"
            >
              {/* Tagline - Fixed contrast with lighter coral + text shadow */}
              <p className="text-coral-300 font-semibold tracking-widest text-sm mb-4 uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                Learning Design + AI
              </p>

              {/* Main Headline - All white, no accent */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Instructional Design Mastery
                <br />
                Meets AI Innovation
              </h1>

              {/* Subheadline - Updated copy */}
              <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
                {stats.yearsExperience} years building learning that works—now enhanced with AI expertise
                from MIT and Berkeley Haas. Experiences that engage, perform, and scale.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link to="/work" className="btn-secondary btn-lg">
                  Explore Portfolio
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn btn-lg border-2 border-white text-white hover:bg-white/10">
                  Let's Talk
                </Link>
              </div>

              {/* Trust Badges - Strengthened: larger, lighter color, consistent icons */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <GraduationCap className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                  <span className="text-sm text-gray-200 font-medium">MIT AI & Machine Learning</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <TrendingUp className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                  <span className="text-sm text-gray-200 font-medium">UC Berkeley Haas</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <Lightbulb className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                  <span className="text-sm text-gray-200 font-medium">Manati.ai Advisor</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Headshot Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center pr-4 xl:pr-8"
            >
              <div className="relative">
                {/* Offset grounding shape - muted teal behind photo */}
                <div
                  className="absolute top-5 left-5 w-full h-full rounded-3xl bg-ocean-700/40"
                  aria-hidden="true"
                />

                {/* Photo container - square aspect ratio with rounded corners */}
                <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
                  <img
                    src="/images/dean_headshot.jpg"
                    alt="Dean Ahlgren - Instructional Designer & AI Specialist"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle inner border for definition */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Larger with pulse animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 animate-scroll-pulse flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/60 font-medium tracking-wide uppercase">See my work</span>
          <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center pt-3">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsDisplay.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-ocean-500">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                Featured Work
              </h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Interactive learning experiences, AI applications, and research
              </p>
            </div>
            <Link
              to="/work"
              className="hidden md:flex items-center gap-2 text-ocean-600 dark:text-ocean-400 hover:text-ocean-700 font-medium"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.slice(0, 3).map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-hover overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-ocean-100 to-ocean-200 dark:from-ocean-900 dark:to-ocean-800 flex items-center justify-center">
                  <Code2 className="w-12 h-12 text-ocean-400" />
                  {/* ASSET NEEDED: Replace with actual project screenshot */}
                </div>

                <div className="p-6">
                  <span className="tag">{item.category}</span>
                  <h3 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-ocean-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {item.description}
                  </p>
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 mt-4 text-ocean-600 dark:text-ocean-400 font-medium"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/work" className="btn-outline btn-md">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Areas of Expertise
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              {stats.yearsExperience} years of learning design evolution, from traditional instructional design
              to AI-powered adaptive experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Instructional Design',
                description:
                  `${stats.coursesDesigned}+ courses designed across undergraduate and graduate programs. ADDIE, SAM, and agile methodologies.`,
              },
              {
                icon: Lightbulb,
                title: 'AI/ML Integration',
                description:
                  'MIT-certified expertise in applying artificial intelligence to enhance learning outcomes and personalization.',
              },
              {
                icon: Code2,
                title: 'Full-Stack Development',
                description:
                  'React, Python, and modern web technologies. Building the tools that power next-generation learning.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-ocean-100 dark:bg-ocean-900/30 text-ocean-600 dark:text-ocean-400 mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-ocean-500 dark:bg-ocean-600">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-ocean-100 mb-8 max-w-xl mx-auto">
            Whether you're hiring or need consulting, let's discuss how I can help
            bring AI-powered learning to your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/consulting" className="btn bg-white text-ocean-600 hover:bg-neutral-100 btn-lg">
              Consulting Services
            </Link>
            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white/10 btn-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
