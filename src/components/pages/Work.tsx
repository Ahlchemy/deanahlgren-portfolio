import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Filter, Code2, BookOpen, FileText, ArrowRight } from 'lucide-react'
import { useFilter } from '@/store'
import { projects } from '@/data/projects'
import { courses } from '@/data/courses'
import { articles } from '@/data/articles'
import { categoryLabels } from '@/data'
import { SEO } from '@/components/SEO'

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'applications', label: 'Applications' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'interactive-courses', label: 'Interactive Courses' },
  { id: 'research', label: 'Research & Writing' },
]

// Combine all portfolio items
const getAllWork = () => {
  const projectItems = projects.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    description: p.shortDescription,
    category: p.category,
    technologies: p.technologies,
    type: 'project' as const,
    featured: p.featured,
    icon: Code2,
    thumbnail: p.images?.thumbnail,
  }))

  const courseItems = courses.map((c) => ({
    id: c.id,
    title: c.title,
    slug: c.slug,
    description: c.shortDescription,
    category: 'interactive-courses',
    technologies: c.technologies,
    type: 'course' as const,
    featured: c.featured,
    icon: BookOpen,
    thumbnail: c.images?.thumbnail,
  }))

  const articleItems = articles.slice(0, 6).map((a) => ({
    id: a.id,
    title: a.title,
    slug: a.slug,
    description: a.excerpt,
    category: 'research',
    technologies: a.tags.slice(0, 3),
    type: 'article' as const,
    featured: a.featured,
    icon: FileText,
    thumbnail: undefined,
  }))

  return [...projectItems, ...courseItems, ...articleItems]
}

export function Work() {
  const { category, searchQuery, setCategory, setSearchQuery } = useFilter()
  const [showFilters, setShowFilters] = useState(false)

  const allWork = useMemo(() => getAllWork(), [])

  const filteredWork = useMemo(() => {
    return allWork.filter((item) => {
      const matchesCategory =
        !category ||
        category === 'all' ||
        item.category === category ||
        (category === 'research' && item.type === 'article')

      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        )

      return matchesCategory && matchesSearch
    })
  }, [allWork, category, searchQuery])

  const getItemHref = (item: typeof allWork[0]) => {
    if (item.type === 'article') return `/insights/${item.slug}`
    return `/work/${item.slug}`
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="Work & Portfolio"
        description="Explore Dean Ahlgren's portfolio of instructional design projects, AI applications, interactive courses, and data science work. 25+ years of learning experience design."
        keywords="portfolio, instructional design projects, e-learning courses, AI applications, data science, interactive learning"
        url="/#/work"
      />

      {/* Header */}
      <section className="bg-hero-gradient text-white">
        <div className="container-wide py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Work
            </h1>
            <p className="mt-4 text-xl text-neutral-300 max-w-2xl">
              {allWork.length}+ portfolio items showcasing instructional design and technical expertise.
              Interactive courses, AI applications, data science projects, and research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-600">
        <div className="container-wide py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-ocean-500"
              />
            </div>

            {/* Category Filter - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id === 'all' ? null : cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    (category === cat.id) || (cat.id === 'all' && !category)
                      ? 'bg-ocean-500 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mt-4 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setCategory(cat.id === 'all' ? null : cat.id)
                    setShowFilters(false)
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                    (category === cat.id) || (cat.id === 'all' && !category)
                      ? 'bg-ocean-500 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Results Count */}
      <section className="container-wide pt-8">
        <p className="text-sm text-neutral-500">
          Showing {filteredWork.length} of {allWork.length} items
          {category && category !== 'all' && (
            <span> in <span className="font-medium text-ocean-600">{categoryLabels[category] || category}</span></span>
          )}
          {searchQuery && (
            <span> matching "<span className="font-medium">{searchQuery}</span>"</span>
          )}
        </p>
      </section>

      {/* Projects Grid */}
      <section className="section pt-8">
        <div className="container-wide">
          {filteredWork.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-600 dark:text-neutral-400">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setCategory(null)
                  setSearchQuery('')
                }}
                className="mt-4 btn-outline btn-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWork.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.05, 0.3) }}
                    className="card card-hover overflow-hidden group"
                  >
                    {/* Thumbnail - Clickable */}
                    <Link
                      to={getItemHref(item)}
                      className={`block aspect-video flex items-center justify-center overflow-hidden ${
                        item.type === 'project'
                          ? 'bg-gradient-to-br from-ocean-100 to-ocean-200 dark:from-ocean-900 dark:to-ocean-800'
                          : item.type === 'course'
                          ? 'bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50'
                          : 'bg-gradient-to-br from-dawn-100 to-dawn-200 dark:from-dawn-900/50 dark:to-dawn-800/50'
                      }`}
                    >
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-2">
                          <Icon className={`w-12 h-12 ${
                            item.type === 'project'
                              ? 'text-ocean-400'
                              : item.type === 'course'
                              ? 'text-amber-400'
                              : 'text-dawn-500'
                          }`} />
                          <span className={`text-xs font-medium uppercase tracking-wider ${
                            item.type === 'project'
                              ? 'text-ocean-400/60'
                              : item.type === 'course'
                              ? 'text-amber-400/60'
                              : 'text-dawn-500/60'
                          }`}>Under Construction</span>
                        </div>
                      )}
                    </Link>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-ocean-600 transition-colors">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-neutral-600 dark:text-neutral-400 line-clamp-2">
                        {item.description}
                      </p>
                      <Link
                        to={getItemHref(item)}
                        className="inline-flex items-center gap-2 mt-4 text-ocean-600 dark:text-ocean-400 font-medium"
                      >
                        {item.type === 'article' ? 'Read More' : 'View Project'}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
