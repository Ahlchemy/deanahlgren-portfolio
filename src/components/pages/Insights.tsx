import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, Download, Clock, ArrowRight } from 'lucide-react'
import { articles, presentations, getFeaturedArticles } from '@/data/articles'

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

export function Insights() {
  const featuredArticles = getFeaturedArticles()
  const featuredArticle = featuredArticles[0]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-100 via-amber-50 to-white dark:from-amber-900/30 dark:via-amber-800/10 dark:to-neutral-900 border-b border-amber-200/50 dark:border-amber-800/20">
        <div className="container-wide py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
              Insights
            </h1>
            <p className="mt-4 text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl">
              Research reports, whitepapers, and thought leadership on AI in learning,
              instructional design, and educational technology. {articles.length} articles and resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section border-b border-neutral-200 dark:border-neutral-800">
          <div className="container-wide">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-ocean-100 to-amber-100 dark:from-ocean-900 dark:to-amber-900 flex items-center justify-center min-h-[300px] overflow-hidden">
                  {featuredArticle.images?.thumbnail || featuredArticle.images?.featured ? (
                    <img
                      src={featuredArticle.images.thumbnail || featuredArticle.images.featured}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FileText className="w-16 h-16 text-ocean-400" />
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className={`tag w-fit ${categoryColors[featuredArticle.category]}`}>
                    Featured {categoryLabels[featuredArticle.category]}
                  </span>
                  <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-sm text-neutral-500">
                    <Clock className="w-4 h-4" />
                    <span>{featuredArticle.readingTime} min read</span>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <Link
                      to={`/insights/${featuredArticle.slug}`}
                      className="btn-primary btn-md"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    {featuredArticle.downloadUrl && (
                      <a
                        href={featuredArticle.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost btn-md"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="section">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-8">
            All Articles ({articles.length})
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.05, 0.3) }}
                className="card p-6 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`tag ${categoryColors[article.category] || 'tag'}`}>
                    {categoryLabels[article.category] || article.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-neutral-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readingTime} min</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-ocean-600 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-neutral-500">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Link
                    to={`/insights/${article.slug}`}
                    className="text-sm font-medium text-ocean-600 dark:text-ocean-400 hover:text-ocean-700 flex items-center gap-1"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {article.downloadUrl && (
                    <a
                      href={article.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      PDF
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-8">
            Presentations ({presentations.length})
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {presentations.map((pres, index) => (
              <motion.div
                key={pres.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <span className="tag bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                  {pres.type}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                  {pres.title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm">
                  {pres.description}
                </p>
                <a
                  href={pres.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-medium text-ocean-600 dark:text-ocean-400 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" />
                  Download Presentation
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
