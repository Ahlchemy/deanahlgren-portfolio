import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Lightbulb,
  BookOpen,
  Users,
  Brain,
  CheckCircle,
  ArrowRight,
  MessageSquare,
} from 'lucide-react'
import { services, engagementModels } from '@/data/services'
import { SEO } from '@/components/SEO'

const iconMap: Record<string, typeof Brain> = {
  Brain,
  BookOpen,
  Users,
  Lightbulb,
}

export function Consulting() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Consulting Services"
        description="Expert instructional design consulting and AI-powered learning solutions. 25 years of experience helping organizations build effective, scalable training programs."
        keywords="instructional design consulting, e-learning consulting, AI learning solutions, corporate training, learning strategy"
        url="/#/consulting"
      />

      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="container-wide py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Consulting Services
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              25 years of learning design expertise combined with cutting-edge AI/ML
              knowledge. I help organizations build learning experiences that are
              both technologically sophisticated and deeply human.
            </p>
            <Link to="/contact" className="btn bg-white text-ocean-600 hover:bg-neutral-100 btn-lg">
              Book a Consultation
              <MessageSquare className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              How I Can Help
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Strategic guidance, hands-on development, and training to transform
              your learning initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Lightbulb
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-ocean-100 dark:bg-ocean-900/30 text-ocean-600 dark:text-ocean-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                        {service.description}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {service.features.slice(0, 4).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                          >
                            <CheckCircle className="w-4 h-4 text-ocean-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                        <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-2">
                          Ideal for:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.idealFor.slice(0, 3).map((client) => (
                            <span key={client} className="tag text-xs">
                              {client}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white">
              Engagement Models
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Flexible arrangements to match your needs and timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {model.title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm">
                  {model.description}
                </p>
                <p className="mt-4 text-xs text-ocean-600 dark:text-ocean-400 font-medium">
                  {model.duration}
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  {model.bestFor}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white">
              Working Together
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              A collaborative approach focused on understanding your needs and
              delivering measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your goals, challenges, and current state' },
              { step: '02', title: 'Strategy', desc: 'Develop a tailored approach and roadmap' },
              { step: '03', title: 'Execution', desc: 'Implement solutions with regular checkpoints' },
              { step: '04', title: 'Measurement', desc: 'Track outcomes and optimize continuously' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold text-ocean-200 dark:text-ocean-800 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ocean-500 dark:bg-ocean-600">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-ocean-100 mb-8 max-w-xl mx-auto">
            Let's discuss how I can help transform your learning initiatives.
            Book a free 30-minute consultation.
          </p>
          <Link to="/contact" className="btn bg-white text-ocean-600 hover:bg-neutral-100 btn-lg">
            Schedule a Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
