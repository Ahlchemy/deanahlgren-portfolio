import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  Download,
  FileText,
  ArrowRight,
  Share2,
} from 'lucide-react'
import { getArticleBySlug, getArticlesByCategory } from '@/data/articles'
import { ShareModal } from '@/components/ShareModal'

const categoryColors: Record<string, string> = {
  research: 'bg-ocean-100 text-ocean-800 dark:bg-ocean-900/30 dark:text-ocean-300',
  whitepaper: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  analysis: 'bg-dawn-100 text-dawn-800 dark:bg-dawn-900/30 dark:text-dawn-700',
  'thought-leadership': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
}

const categoryLabels: Record<string, string> = {
  research: 'Research',
  whitepaper: 'Whitepaper',
  analysis: 'Analysis',
  'thought-leadership': 'Thought Leadership',
}

const categoryGradients: Record<string, string> = {
  research: 'from-ocean-500 to-ocean-600 dark:from-ocean-600 dark:to-ocean-700',
  whitepaper: 'from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700',
  analysis: 'from-dawn-500 to-dawn-600 dark:from-dawn-600 dark:to-dawn-700',
  'thought-leadership': 'from-green-500 to-green-600 dark:from-green-600 dark:to-green-700',
}

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [shareModalOpen, setShareModalOpen] = useState(false)

  const article = slug ? getArticleBySlug(slug) : null

  // Get related articles (same category, excluding current)
  const relatedArticles = article
    ? getArticlesByCategory(article.category)
        .filter((a) => a.id !== article.id)
        .slice(0, 3)
    : []

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link to="/insights" className="btn-primary btn-md">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>
      </div>
    )
  }

  const publishedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${categoryGradients[article.category] || categoryGradients.research} text-white`}>
        <div className="container-wide py-12 md:py-20">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
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
              <span className={`tag ${categoryColors[article.category]} mb-4`}>
                {categoryLabels[article.category] || article.category}
              </span>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {article.title}
              </h1>

              <p className="text-xl text-white/80 mb-6">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{publishedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readingTime} min read</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mt-8">
                {article.downloadUrl && (
                  <a
                    href={article.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-neutral-900 hover:bg-neutral-100 btn-md"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                )}
                <button
                  onClick={() => setShareModalOpen(true)}
                  className="btn border-2 border-white text-white hover:bg-white/10 btn-md"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-video bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm overflow-hidden"
            >
              {article.images?.thumbnail || article.images?.featured ? (
                <img
                  src={article.images.thumbnail || article.images.featured}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FileText className="w-20 h-20 text-white/50" />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tags Bar */}
      <section className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-wide py-4">
          <div className="flex items-center gap-3">
            <Tag className="w-5 h-5 text-neutral-400" />
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="tag text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <article className="prose-content">
                {/* Embedded PDF or placeholder */}
                {article.embedPdf && article.downloadUrl ? (
                  <div className="mb-8">
                    <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={`${article.downloadUrl}#pagemode=none&view=FitH&scrollbar=1`}
                        title={article.title}
                        className="w-full border-0"
                        style={{ height: '800px' }}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <a
                        href={article.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary btn-md inline-flex"
                      >
                        <Download className="w-4 h-4" />
                        Open PDF in New Tab
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-8 text-center mb-8">
                    <FileText className="w-16 h-16 mx-auto text-neutral-300 dark:text-neutral-600 mb-4" />
                    <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Full Article Content
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 mb-6 max-w-md mx-auto">
                      The full article content would be rendered here from MDX or a CMS.
                    </p>
                    {article.downloadUrl && (
                      <a
                        href={article.downloadUrl}
                        className="btn-primary btn-md inline-flex"
                      >
                        <Download className="w-4 h-4" />
                        Download Full PDF
                      </a>
                    )}
                  </div>
                )}

                {/* Abstract/Summary section */}
                <div className="mt-8">
                  <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                    Summary
                  </h2>
                  {article.content ? (
                    <div className="space-y-4">
                      {article.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} dangerouslySetInnerHTML={{
                          __html: paragraph
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/\n/g, '<br />')
                        }} />
                      ))}
                    </div>
                  ) : (
                    <p>{article.excerpt}</p>
                  )}
                </div>

                {/* Key Topics */}
                <div className="mt-8">
                  <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                    Key Topics
                  </h2>
                  <ul className="space-y-3">
                    {article.tags.map((tag) => (
                      <li key={tag} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-ocean-500 flex-shrink-0" />
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Actions Card */}
              <div className="card p-6 sticky top-24">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  {article.downloadUrl && (
                    <a
                      href={article.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-ocean-50 dark:bg-ocean-900/20 hover:bg-ocean-100 dark:hover:bg-ocean-900/30 transition-colors"
                    >
                      <Download className="w-5 h-5 text-ocean-500" />
                      <span className="text-sm font-medium text-ocean-700 dark:text-ocean-300">
                        Download PDF
                      </span>
                    </a>
                  )}
                  <button
                    onClick={() => setShareModalOpen(true)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <Share2 className="w-5 h-5 text-neutral-500" />
                    <span className="text-sm font-medium">Share Article</span>
                  </button>
                </div>

                {/* Article Details */}
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                    Article Details
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center justify-between text-neutral-600 dark:text-neutral-400">
                      <span>Category</span>
                      <span className={`tag text-xs ${categoryColors[article.category]}`}>
                        {categoryLabels[article.category]}
                      </span>
                    </li>
                    <li className="flex items-center justify-between text-neutral-600 dark:text-neutral-400">
                      <span>Reading Time</span>
                      <span className="font-medium">{article.readingTime} min</span>
                    </li>
                    <li className="flex items-center justify-between text-neutral-600 dark:text-neutral-400">
                      <span>Published</span>
                      <span className="font-medium">{publishedDate}</span>
                    </li>
                    <li className="flex items-center justify-between text-neutral-600 dark:text-neutral-400">
                      <span>PDF Available</span>
                      <span className="font-medium">
                        {article.downloadUrl ? 'Yes' : 'No'}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Tags */}
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                    Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    Want to discuss this topic?
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

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section bg-neutral-50 dark:bg-neutral-900">
          <div className="container-wide">
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                Related {categoryLabels[article.category]}
              </h2>
              <Link
                to="/insights"
                className="text-ocean-600 dark:text-ocean-400 hover:text-ocean-700 font-medium flex items-center gap-2"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related, index) => (
                <motion.article
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card card-hover overflow-hidden group p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`tag text-xs ${categoryColors[related.category]}`}>
                      {categoryLabels[related.category]}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-neutral-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{related.readingTime} min</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-ocean-600 transition-colors">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {related.excerpt}
                  </p>
                  <Link
                    to={`/insights/${related.slug}`}
                    className="inline-flex items-center gap-1 mt-4 text-sm text-ocean-600 dark:text-ocean-400 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={`section bg-gradient-to-br ${categoryGradients[article.category] || categoryGradients.research}`}>
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Interested in Learning More?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how these insights can apply to your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100 btn-lg">
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/insights" className="btn border-2 border-white text-white hover:bg-white/10 btn-lg">
              Browse More Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        title={article.title}
        url={currentUrl}
        description={article.excerpt}
      />
    </div>
  )
}
