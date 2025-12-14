// Main data exports
export * from './projects'
export * from './courses'
export * from './articles'
export * from './services'
export * from './timeline'

// Combined portfolio items for search/filtering
import { projects } from './projects'
import { courses } from './courses'
import { articles } from './articles'

export type PortfolioItemType = 'project' | 'course' | 'article'

export interface PortfolioItem {
  id: string
  title: string
  slug: string
  description: string
  type: PortfolioItemType
  category: string
  technologies?: string[]
  tags?: string[]
  featured: boolean
  thumbnail?: string
}

// Create unified portfolio items for search
export const getAllPortfolioItems = (): PortfolioItem[] => {
  const projectItems: PortfolioItem[] = projects.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    description: p.shortDescription,
    type: 'project' as const,
    category: p.category,
    technologies: p.technologies,
    featured: p.featured,
    thumbnail: p.images.thumbnail,
  }))

  const courseItems: PortfolioItem[] = courses.map((c) => ({
    id: c.id,
    title: c.title,
    slug: c.slug,
    description: c.shortDescription,
    type: 'course' as const,
    category: 'interactive-courses',
    technologies: c.technologies,
    featured: c.featured,
    thumbnail: c.images.thumbnail,
  }))

  const articleItems: PortfolioItem[] = articles.map((a) => ({
    id: a.id,
    title: a.title,
    slug: a.slug,
    description: a.excerpt,
    type: 'article' as const,
    category: a.category,
    tags: a.tags,
    featured: a.featured,
    thumbnail: a.images.thumbnail,
  }))

  return [...projectItems, ...courseItems, ...articleItems]
}

// Get all unique categories
export const getAllCategories = () => {
  const categories = new Set<string>()
  projects.forEach((p) => categories.add(p.category))
  courses.forEach(() => categories.add('interactive-courses'))
  articles.forEach((a) => categories.add(a.category))
  return Array.from(categories)
}

// Get all unique technologies
export const getAllTechnologies = () => {
  const technologies = new Set<string>()
  projects.forEach((p) => p.technologies.forEach((t) => technologies.add(t)))
  courses.forEach((c) => c.technologies.forEach((t) => technologies.add(t)))
  return Array.from(technologies).sort()
}

// Category display names
export const categoryLabels: Record<string, string> = {
  'ai-learning': 'AI-Powered Learning',
  'interactive-courses': 'Interactive Courses',
  'applications': 'Applications',
  'data-science': 'Data Science',
  'specialized': 'Specialized',
  'presentations': 'Presentations',
  'research': 'Research',
  'whitepaper': 'Whitepaper',
  'analysis': 'Analysis',
  'thought-leadership': 'Thought Leadership',
}

// Stats for display
export { stats } from './timeline'
