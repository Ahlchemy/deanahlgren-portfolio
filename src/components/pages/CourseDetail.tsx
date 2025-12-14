import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Target,
  Layers,
  Tag,
  ArrowRight,
  Play,
  CheckCircle,
} from 'lucide-react'
import { getCourseBySlug, courses } from '@/data/courses'

export function CourseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const course = slug ? getCourseBySlug(slug) : null

  // Get related courses (excluding current)
  const relatedCourses = course
    ? courses.filter((c) => c.id !== course.id && c.featured).slice(0, 3)
    : []

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Course Not Found
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            The course you're looking for doesn't exist.
          </p>
          <Link to="/work" className="btn-primary btn-md">
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coral-500 to-coral-600 dark:from-coral-600 dark:to-coral-700 text-white">
        <div className="container-wide py-12 md:py-20">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-coral-100 hover:text-white mb-8 transition-colors"
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
                Interactive Course
              </span>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {course.title}
              </h1>

              <p className="text-xl text-coral-100 mb-8">
                {course.shortDescription}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {course.demoUrl && (
                  <a
                    href={course.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-coral-600 hover:bg-neutral-100 btn-md"
                  >
                    <Play className="w-4 h-4" />
                    Try Demo
                  </a>
                )}
                <Link
                  to="/contact"
                  className="btn border-2 border-white text-white hover:bg-white/10 btn-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  Inquire About This Course
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-video bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm"
            >
              <BookOpen className="w-20 h-20 text-white/50" />
              {/* ASSET NEEDED: course.images.hero */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meta Info Bar */}
      <section className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-wide py-6">
          <div className="flex flex-wrap gap-8">
            {/* Modules Count */}
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-coral-500" />
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wide">Modules</p>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white mt-1">
                  {course.modules.length} Modules
                </p>
              </div>
            </div>

            {/* Objectives Count */}
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-coral-500" />
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wide">Learning Objectives</p>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white mt-1">
                  {course.objectives.length} Objectives
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-coral-500" />
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wide">Built With</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {course.technologies.map((tech) => (
                    <span key={tech} className="tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Available */}
            {course.hasInteractiveDemo && (
              <div className="flex items-center gap-3">
                <Play className="w-5 h-5 text-coral-500" />
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wide">Demo</p>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mt-1">
                    Interactive Demo Available
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description & Modules */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                About This Course
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {course.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Modules */}
              <div className="mt-12">
                <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-6">
                  Course Modules
                </h3>
                <div className="space-y-4">
                  {course.modules.map((module, i) => (
                    <motion.div
                      key={module.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coral-100 dark:bg-coral-900/30 flex items-center justify-center">
                        <span className="text-sm font-semibold text-coral-600 dark:text-coral-400">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white">
                          {module.title}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {module.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Learning Objectives */}
              <div className="mt-12">
                <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-6">
                  Learning Objectives
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.objectives.map((objective, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 dark:text-neutral-300">{objective}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Actions Card */}
              <div className="card p-6 sticky top-24">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  {course.demoUrl && (
                    <a
                      href={course.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-coral-50 dark:bg-coral-900/20 hover:bg-coral-100 dark:hover:bg-coral-900/30 transition-colors"
                    >
                      <Play className="w-5 h-5 text-coral-500" />
                      <span className="text-sm font-medium text-coral-700 dark:text-coral-300">
                        Launch Interactive Demo
                      </span>
                    </a>
                  )}
                  <Link
                    to="/contact"
                    className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-ocean-500" />
                    <span className="text-sm font-medium">Request Custom Version</span>
                  </Link>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {course.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course Stats */}
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                    Course Details
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-center justify-between">
                      <span>Status</span>
                      <span className="font-medium text-green-600 dark:text-green-400">
                        {course.status === 'published' ? 'Published' : course.status}
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Modules</span>
                      <span className="font-medium">{course.modules.length}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Interactive Demo</span>
                      <span className="font-medium">
                        {course.hasInteractiveDemo ? 'Yes' : 'No'}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    Want a similar course for your organization?
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

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="section bg-neutral-50 dark:bg-neutral-900">
          <div className="container-wide">
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                More Interactive Courses
              </h2>
              <Link
                to="/work"
                className="text-coral-600 dark:text-coral-400 hover:text-coral-700 font-medium flex items-center gap-2"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedCourses.map((related, index) => (
                <motion.article
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card card-hover overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-coral-100 to-coral-200 dark:from-coral-900/50 dark:to-coral-800/50 flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-coral-400" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-coral-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                      {related.shortDescription}
                    </p>
                    <Link
                      to={`/work/${related.slug}`}
                      className="inline-flex items-center gap-1 mt-3 text-sm text-coral-600 dark:text-coral-400 font-medium"
                    >
                      View Course
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
      <section className="section bg-coral-500 dark:bg-coral-600">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Need Custom Training Content?
          </h2>
          <p className="text-xl text-coral-100 mb-8">
            Let's discuss how I can create engaging learning experiences for your team.
          </p>
          <Link to="/contact" className="btn bg-white text-coral-600 hover:bg-neutral-100 btn-lg">
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
