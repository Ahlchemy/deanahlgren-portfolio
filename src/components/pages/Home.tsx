import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Code2, Lightbulb, GraduationCap, TrendingUp } from 'lucide-react'
import { getFeaturedProjects } from '@/data/projects'
import { getFeaturedCourses } from '@/data/courses'
import { stats } from '@/data/timeline'
import { SEO } from '@/components/SEO'
import { ChatPanel } from '@/components/chat'

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
      thumbnail: p.images?.thumbnail,
    })),
    ...courses.map((c) => ({
      id: c.id,
      title: c.title,
      description: c.shortDescription,
      category: 'Interactive Course',
      href: `/work/${c.slug}`,
      type: 'course' as const,
      thumbnail: c.images?.thumbnail,
    })),
  ]

  return combined.slice(0, 5)
}

export function Home() {
  const featuredWork = getFeaturedWork()

  return (
    <>
      <SEO
        title="Home"
        description="25 years of instructional design excellence meets MIT-certified AI expertise. Building learning experiences that engage minds, drive results, and scale impact."
        keywords="instructional design, AI learning, machine learning, e-learning development, corporate training, MIT AI certification"
        url="/"
      />

      {/* Hero Section - Refined layout with integrated metrics */}
      <section className="relative min-h-[90vh] flex flex-col bg-hero-gradient overflow-hidden">
        {/* Low-poly geometric background - positioned on left */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/background_02.png)',
            backgroundPosition: 'left center',
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-600/60 via-ocean-700/80 to-ocean-800/95" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]" />
        </div>

        {/* Main Hero Content - Positioned higher */}
        <div className="container-wide relative z-10 flex-1 flex items-center pt-16 md:pt-20 pb-4">
          <div className="grid lg:grid-cols-[1fr,28%] gap-12 lg:gap-24 items-center w-full -mt-[10vh]">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[640px]"
            >
              {/* Tagline - Orange/gold accent with text shadow */}
              <p className="text-amber-400 font-medium tracking-widest text-sm mb-5 uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                Instructional Design · AI-Enhanced Learning
              </p>

              {/* Main Headline */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.15] tracking-tight">
                Learning Experiences
                <br />
                <span className="text-white/90">That Actually Work</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed max-w-[540px]">
                I've spent {stats.yearsExperience} years helping organizations create learning that sticks—courses
                that people actually complete, remember, and use. Now I'm bringing AI into the mix to make that even better.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link to="/work" className="btn-secondary btn-lg">
                  See My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn btn-lg border-2 border-white text-white hover:bg-white/10">
                  Start a Conversation
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-10">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <GraduationCap className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                  <span className="text-sm text-gray-200">MIT AI & Machine Learning</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <TrendingUp className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                  <span className="text-sm text-gray-200">UC Berkeley Haas</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <Lightbulb className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                  <span className="text-sm text-gray-200">Manati.ai Advisor</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Chat Panel with integrated headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex flex-col justify-center max-w-[315px]"
            >
              <ChatPanel variant="desktop" />
            </motion.div>
          </div>
        </div>

        {/* Mobile Chat - Below hero content, above metrics */}
        <div className="block lg:hidden relative z-10 px-4 sm:px-6 pb-4">
          <ChatPanel variant="mobile" />
        </div>

        {/* Metrics Band - Positioned at bottom of hero */}
        <div className="relative z-10 mt-auto bg-ocean-800/90 backdrop-blur-sm border-t border-white/5">
          <div className="container-wide py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {statsDisplay.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-neutral-400 text-sm mt-4">
              Across corporate, higher ed, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section - Warm off-white background */}
      <section className="section bg-warm-50 dark:bg-neutral-700">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                What I've Been Building
              </h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                From interactive courses to AI-powered learning tools—here's a look at recent projects.
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
                {/* Project Thumbnail - Clickable */}
                <Link to={item.href} className="block aspect-video bg-gradient-project-card flex items-center justify-center overflow-hidden">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Code2 className="w-12 h-12 text-ocean-400" />
                      <span className="text-xs font-medium uppercase tracking-wider text-ocean-400/60">Under Construction</span>
                    </div>
                  )}
                </Link>

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

      {/* Expertise Section - Dark background for visual rhythm */}
      <section className="section bg-ocean-700 dark:bg-ocean-900">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Areas of Expertise
            </h2>
            <p className="mt-4 text-neutral-300">
              I bring together deep instructional design foundations with emerging AI capabilities. Here's where I can help:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Instructional Design',
                description:
                  `Learner-centered course design that puts outcomes first. ${stats.coursesDesigned}+ courses across corporate training, higher ed, and professional development—using whatever methodology fits the context.`,
              },
              {
                icon: Lightbulb,
                title: 'AI/ML Integration',
                description:
                  'Practical AI applications for learning—from adaptive content delivery to intelligent feedback systems. MIT-trained, but more importantly: focused on what actually improves outcomes.',
              },
              {
                icon: Code2,
                title: 'Full-Stack Development',
                description:
                  'I can build what I design. React, Python, and modern web tools—which means faster iteration, fewer handoff headaches, and learning experiences that work exactly as intended.',
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-amber-400 mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Warm orange/gold accent */}
      <section className="section bg-gradient-to-br from-amber-500 to-amber-600 relative overflow-hidden">
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(255,255,255,0.2)_0%,_transparent_50%)]" />
        </div>
        <div className="container-narrow text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something That Works
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-xl mx-auto">
            Looking for an instructional designer who gets AI? Need help modernizing your learning programs?
            Or just want to talk shop? I'd love to hear what you're working on.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/consulting" className="btn bg-white text-amber-600 hover:bg-neutral-100 btn-lg">
              Explore Services
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
