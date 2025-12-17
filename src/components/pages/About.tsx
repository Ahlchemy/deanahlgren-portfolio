import { motion } from 'framer-motion'
import { MapPin, Calendar, Award, GraduationCap, ExternalLink } from 'lucide-react'
import { timeline, credentials, stats, getEducation } from '@/data/timeline'

export function About() {
  const education = getEducation()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-100 via-amber-50 to-white dark:from-amber-900/30 dark:via-amber-800/10 dark:to-neutral-900 border-b border-amber-200/50 dark:border-amber-800/20">
        <div className="container-wide py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                About Dean
              </h1>
              <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-6">
                The key to learning wasn't handed to me. So I built my own — and
                spent {stats.yearsExperience} years learning how to help others build theirs.
              </p>
              <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-ocean-500" />
                  <span>Honolulu, Hawaii</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-ocean-500" />
                  <span>{stats.yearsRemote} years remote</span>
                </div>
              </div>
            </motion.div>

            {/* Professional Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src="/images/dean_headshot.jpg"
                alt="Dean Ahlgren"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose-content"
          >
            <p className="text-lg">
              Not just designing courses, but building them — LMS architecture,
              analytics systems, video production, hundreds of pages of interactive
              content. At Academy of Art University, I created {stats.coursesDesigned}+ online courses
              across undergraduate and graduate programs during a period of {stats.enrollmentGrowth}
              enrollment growth, contributing to a {stats.dropoutReduction} reduction in first-term
              dropouts.
            </p>
            <p className="text-lg">
              For {stats.yearsRemote} of those years, I did this work remotely — from San Francisco
              to Seoul to Hawaiʻi. Collaborating across cultures shaped how I think
              about learning itself. It also taught me the rhythm of distributed work.
            </p>
            <p className="text-lg">
              Today, I'm an Instructional Design Advisor at Manati.ai, helping
              integrate large language models into higher education systems. The
              tools are changing fast. The goal hasn't:{' '}
              <span className="text-ocean-600 dark:text-ocean-400 font-medium">
                learning that builds people, not just skills.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-8">
            Credentials & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((cred, index) => (
              <motion.div
                key={cred.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-ocean-100 dark:bg-ocean-900/30">
                    <Award className="w-6 h-6 text-ocean-600 dark:text-ocean-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {cred.title}
                    </h3>
                    <p className="text-ocean-600 dark:text-ocean-400 text-sm">
                      {cred.issuer}
                    </p>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm">
                      {cred.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-12">
            Professional Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 top-2 w-4 h-4 rounded-full border-4 border-white dark:border-neutral-950 hidden md:block ${
                    item.type === 'certification'
                      ? 'bg-amber-500'
                      : item.type === 'education'
                      ? 'bg-dawn-500'
                      : 'bg-ocean-500'
                  }`} />

                  <div className="card p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-ocean-600 dark:text-ocean-400">
                        {item.year}
                      </span>
                      {item.type === 'certification' && (
                        <span className="tag bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                          Certification
                        </span>
                      )}
                      {item.type === 'education' && (
                        <span className="tag bg-dawn-100 text-dawn-800 dark:bg-dawn-900/30 dark:text-dawn-700">
                          Education
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-ocean-600 dark:text-ocean-400 text-sm">
                      {item.organization}
                    </p>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                    {item.achievements && item.achievements.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {item.achievements.slice(0, 3).map((achievement, i) => (
                          <li key={i} className="text-sm text-neutral-500 dark:text-neutral-500 flex items-start gap-2">
                            <span className="text-ocean-500 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {item.technologies.map((tech) => (
                          <span key={tech} className="tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-8">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="card p-6 max-w-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-ocean-100 dark:bg-ocean-900/30">
                  <GraduationCap className="w-6 h-6 text-ocean-600 dark:text-ocean-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">
                    {edu.title}
                  </h3>
                  <p className="text-ocean-600 dark:text-ocean-400">
                    {edu.organization}
                  </p>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    {edu.description}
                  </p>
                  {edu.achievements && (
                    <ul className="mt-2 space-y-1">
                      {edu.achievements.map((item, i) => (
                        <li key={i} className="text-sm text-neutral-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect CTA */}
      <section className="section">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Available for consulting, advisory roles, and full-time opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/dean-ahlgren"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-md"
            >
              LinkedIn Profile
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="mailto:dean@deanahlgren.com" className="btn-outline btn-md">
              Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
