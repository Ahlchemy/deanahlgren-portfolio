import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  Calendar,
  Tag,
  BarChart3,
  ArrowRight,
  Play,
  X,
} from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  const project = slug ? getProjectBySlug(slug) : null

  // Get related projects (same category, excluding current)
  const relatedProjects = project
    ? projects
        .filter((p) => p.category === project.category && p.id !== project.id)
        .slice(0, 3)
    : []

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/work" className="btn-primary btn-md">
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
        </div>
      </div>
    )
  }

  const categoryLabels: Record<string, string> = {
    applications: 'Application',
    'data-science': 'Data Science',
    'ai-learning': 'AI-Powered Learning',
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white">
        <div className="container-wide py-12 md:py-20">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="tag bg-white/20 text-white mb-4">
                {categoryLabels[project.category] || project.category}
              </span>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>

              <p className="text-xl text-neutral-300 mb-8">
                {project.shortDescription}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.links.demo && (
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="btn bg-white text-ocean-600 hover:bg-neutral-100 btn-md"
                  >
                    <Play className="w-4 h-4" />
                    Live Demo
                  </button>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-ocean-600 hover:bg-neutral-100 btn-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn border-2 border-white text-white hover:bg-white/10 btn-md"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {project.links.video && (
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="btn bg-amber-500 text-white hover:bg-amber-600 btn-md"
                  >
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </button>
                )}
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-video bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm overflow-hidden"
            >
              {project.images?.thumbnail || project.images?.hero ? (
                <img
                  src={project.images.thumbnail || project.images.hero}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <Code2 className="w-20 h-20 text-white/50" />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meta Info Bar */}
      <section className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-wide py-6">
          <div className="flex flex-wrap gap-8">
            {/* Technologies */}
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-ocean-500" />
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wide">Tech Stack</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-ocean-500" />
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wide">Key Metrics</p>
                  <div className="flex flex-wrap gap-4 mt-1">
                    {project.metrics.map((metric) => (
                      <span key={metric.label} className="text-sm">
                        <span className="font-semibold text-ocean-600 dark:text-ocean-400">
                          {metric.value}
                        </span>{' '}
                        <span className="text-neutral-500">{metric.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Date */}
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-ocean-500" />
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wide">Updated</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                  {new Date(project.updatedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                About This Project
              </h2>
              <div className="prose-content">
                {project.description.split('\n\n').map((paragraph, i) => (
                  <p key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Screenshots */}
              {project.images.screenshots && project.images.screenshots.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Screenshots
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.screenshots.map((_, i) => (
                      <div
                        key={i}
                        className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center"
                      >
                        <Code2 className="w-10 h-10 text-neutral-400" />
                        {/* ASSET NEEDED: screenshot images */}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Links Card */}
              <div className="card p-6 sticky top-24">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {project.links.demo && (
                    <button
                      onClick={() => setDemoModalOpen(true)}
                      className="w-full flex items-center gap-3 p-3 rounded-lg bg-ocean-50 dark:bg-ocean-900/20 hover:bg-ocean-100 dark:hover:bg-ocean-900/30 transition-colors"
                    >
                      <Play className="w-5 h-5 text-ocean-500" />
                      <span className="text-sm font-medium text-ocean-700 dark:text-ocean-300">View Demo</span>
                    </button>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-ocean-500" />
                      <span className="text-sm font-medium">Live Site</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <Github className="w-5 h-5 text-ocean-500" />
                      <span className="text-sm font-medium">Source Code</span>
                    </a>
                  )}
                  {project.links.download && (
                    <a
                      href={project.links.download}
                      className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-ocean-500" />
                      <span className="text-sm font-medium">Download</span>
                    </a>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    Interested in a similar project?
                  </p>
                  <Link to="/contact" className="btn-primary btn-md w-full justify-center">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section bg-neutral-50 dark:bg-neutral-900">
          <div className="container-wide">
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                Related Projects
              </h2>
              <Link
                to="/work"
                className="text-ocean-600 dark:text-ocean-400 hover:text-ocean-700 font-medium flex items-center gap-2"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((related, index) => (
                <motion.article
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card card-hover overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-ocean-100 to-ocean-200 dark:from-ocean-900 dark:to-ocean-800 flex items-center justify-center">
                    <Code2 className="w-10 h-10 text-ocean-400" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-ocean-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                      {related.shortDescription}
                    </p>
                    <Link
                      to={`/work/${related.slug}`}
                      className="inline-flex items-center gap-1 mt-3 text-sm text-ocean-600 dark:text-ocean-400 font-medium"
                    >
                      View Project
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-ocean-500 dark:bg-ocean-600">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Want to Build Something Like This?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Let's discuss how I can help bring your learning project to life.
          </p>
          <Link to="/contact" className="btn bg-white text-ocean-600 hover:bg-neutral-100 btn-lg">
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && project.links.video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-neutral-900 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video */}
              <div className="aspect-[9/16] max-h-[80vh] mx-auto bg-black">
                <video
                  src={project.links.video}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Demo Modal */}
      <AnimatePresence>
        {demoModalOpen && project.links.demo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setDemoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Close Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-neutral-900/95 border-b border-neutral-700">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-ocean-400" />
                  <span className="text-white font-medium">{project.title} - Live Demo</span>
                </div>
                <button
                  onClick={() => setDemoModalOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                  Close Preview
                </button>
              </div>

              {/* Demo Content Iframe */}
              <div className="flex-1 bg-white">
                <iframe
                  src={project.links.demo}
                  title={`${project.title} Demo`}
                  className="w-full h-full border-0"
                  allow="fullscreen"
                />
              </div>

              {/* Bottom Close Bar */}
              <div className="flex items-center justify-center px-6 py-4 bg-neutral-900/95 border-t border-neutral-700">
                <button
                  onClick={() => setDemoModalOpen(false)}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-ocean-500 text-white hover:bg-ocean-600 transition-colors font-medium"
                >
                  <X className="w-4 h-4" />
                  Close and Return to Project
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
