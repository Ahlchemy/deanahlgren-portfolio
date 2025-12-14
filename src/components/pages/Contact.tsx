import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    type: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formState)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-wide py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
              Whether you're interested in consulting, have a job opportunity, or
              just want to connect — I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-ocean-100 dark:bg-ocean-900/30">
                    <Mail className="w-5 h-5 text-ocean-600 dark:text-ocean-400" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      Email
                    </p>
                    <a
                      href="mailto:dean@deanahlgren.com"
                      className="text-ocean-600 dark:text-ocean-400 hover:underline"
                    >
                      dean@deanahlgren.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-ocean-100 dark:bg-ocean-900/30">
                    <MapPin className="w-5 h-5 text-ocean-600 dark:text-ocean-400" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      Location
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Honolulu, Hawaii
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Available for remote work globally
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-ocean-100 dark:bg-ocean-900/30">
                    <Linkedin className="w-5 h-5 text-ocean-600 dark:text-ocean-400" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/dean-ahlgren"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ocean-600 dark:text-ocean-400 hover:underline"
                    >
                      linkedin.com/in/dean-ahlgren
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 p-6 rounded-xl bg-ocean-50 dark:bg-ocean-900/20 border border-ocean-200 dark:border-ocean-800">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                  Current Availability
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Open to consulting engagements and full-time opportunities.
                  Typically respond within 24-48 hours.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="card p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Thank you for reaching out. I'll get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setFormState({ name: '', email: '', type: 'general', message: '' })
                      }}
                      className="mt-6 btn-outline btn-md"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        What are you reaching out about?
                      </label>
                      <select
                        id="type"
                        value={formState.type}
                        onChange={(e) =>
                          setFormState({ ...formState, type: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="consulting">Consulting Services</option>
                        <option value="opportunity">Job Opportunity</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="speaking">Speaking Engagement</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-ocean-500 resize-none"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    <button type="submit" className="btn-primary btn-lg w-full md:w-auto">
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
