import type { Article } from '@/types'

export const articles: Article[] = [
  // ============================================
  // RESEARCH REPORTS
  // ============================================
  {
    id: 'genai-sentiment-analysis',
    title: 'GenAI Sentiment Analysis Report',
    slug: 'genai-sentiment-analysis',
    excerpt: 'Comparative analysis of generative AI tools for sentiment analysis in educational feedback systems. Exploring how AI can transform learner feedback into actionable insights.',
    content: '', // Content loaded separately or from MDX
    tags: ['GenAI', 'Sentiment Analysis', 'NLP', 'Education', 'Research'],
    category: 'research',
    readingTime: 12,
    publishedAt: '2024-01-15',
    images: {
      featured: '/images/articles/genai-sentiment-featured.jpg',
      thumbnail: '/images/articles/genai-sentiment-thumb.jpg',
    },
    downloadUrl: '/downloads/genai-sentiment-analysis-report.pdf',
    featured: true,
  },
  {
    id: 'loan-default-neural-networks',
    title: 'Loan Default Prediction with Neural Networks',
    slug: 'loan-default-neural-networks',
    excerpt: 'Deep learning approach to credit risk assessment using neural network architecture. Research on predicting loan defaults using advanced machine learning models.',
    content: '',
    tags: ['Neural Networks', 'Deep Learning', 'Finance', 'Risk Assessment', 'Python'],
    category: 'research',
    readingTime: 15,
    publishedAt: '2024-02-20',
    images: {
      featured: '/images/articles/loan-default-featured.jpg',
      thumbnail: '/images/articles/loan-default-thumb.jpg',
    },
    downloadUrl: '/downloads/loan-default-prediction-neural-networks.pdf',
    featured: true,
  },
  {
    id: 'hotel-booking-analysis',
    title: 'Hotel Booking Cancellation Prediction',
    slug: 'hotel-booking-analysis',
    excerpt: 'Comprehensive analysis of hotel booking cancellation patterns using advanced statistical modeling and machine learning techniques. Companion research to the Hotel Cancellation Prediction app.',
    content: '',
    tags: ['Machine Learning', 'Hospitality', 'Predictive Analytics', 'Data Science'],
    category: 'research',
    readingTime: 10,
    publishedAt: '2024-03-10',
    images: {
      featured: '/images/articles/hotel-analysis-featured.jpg',
      thumbnail: '/images/articles/hotel-analysis-thumb.jpg',
    },
    downloadUrl: '/downloads/hotel-booking-cancellation-prediction.pdf',
    featured: false,
  },
  {
    id: 'philadelphia-crime-analysis',
    title: 'Philadelphia Crime Analysis',
    slug: 'philadelphia-crime-analysis',
    excerpt: 'Geographically-weighted statistical analysis comparing Philadelphia crime rates between 1980s and 2023, with rigorous validation methodology. A data journalism piece demonstrating statistical rigor.',
    content: '',
    tags: ['Data Analysis', 'Statistics', 'GIS', 'Urban Studies', 'Data Journalism'],
    category: 'analysis',
    readingTime: 18,
    publishedAt: '2024-04-05',
    images: {
      featured: '/images/articles/philly-crime-featured.jpg',
      thumbnail: '/images/articles/philly-crime-thumb.jpg',
    },
    featured: false,
  },

  // ============================================
  // WHITEPAPERS
  // ============================================
  {
    id: 'digital-island-stewardship',
    title: 'Digital Island Stewardship Education (DISE)',
    slug: 'digital-island-stewardship',
    excerpt: 'Educational framework proposal for digital stewardship in island communities. Combining place-based learning with digital engagement for environmental education in Hawaii\'s unique ecosystem.',
    content: '',
    tags: ['Environmental Education', 'Hawaii', 'Digital Learning', 'Sustainability'],
    category: 'whitepaper',
    readingTime: 8,
    publishedAt: '2024-05-12',
    images: {
      featured: '/images/articles/dise-featured.jpg',
      thumbnail: '/images/articles/dise-thumb.jpg',
    },
    downloadUrl: '/downloads/digital-island-stewardship-education.pdf',
    featured: false,
  },
  {
    id: 'harborai-fish-sorting',
    title: 'HarborAI Smart Fish Sorting',
    slug: 'harborai-fish-sorting',
    excerpt: 'AI-driven fish species identification and sorting system proposal for Hawaii\'s working docks. Leveraging computer vision for sustainable aquaculture operations.',
    content: '',
    tags: ['Computer Vision', 'AI', 'Sustainability', 'Hawaii', 'Aquaculture'],
    category: 'whitepaper',
    readingTime: 6,
    publishedAt: '2024-06-18',
    images: {
      featured: '/images/articles/harborai-featured.jpg',
      thumbnail: '/images/articles/harborai-thumb.jpg',
    },
    downloadUrl: '/downloads/harborai-fish-sorting.pdf',
    featured: false,
  },
  {
    id: 'xapi-cmi5-profiles',
    title: 'xAPI & cmi5 Profiles Overview',
    slug: 'xapi-cmi5-profiles',
    excerpt: 'Technical deep-dive into xAPI, cmi5, and xAPI Profiles for next-generation learning record standards in enterprise learning systems. Implementation guide for learning technologists.',
    content: '',
    tags: ['xAPI', 'cmi5', 'Learning Standards', 'LMS', 'Technical'],
    category: 'whitepaper',
    readingTime: 10,
    publishedAt: '2024-07-22',
    images: {
      featured: '/images/articles/xapi-featured.jpg',
      thumbnail: '/images/articles/xapi-thumb.jpg',
    },
    downloadUrl: '/downloads/xapi-cmi5-profiles-overview.pdf',
    featured: false,
  },
  {
    id: 'ai-personalization-learning',
    title: 'AI Personalization in Corporate Learning',
    slug: 'ai-personalization-learning',
    excerpt: 'Strategic framework for implementing AI-driven personalization in enterprise learning systems. How AI solves the scale vs. personalization paradox in corporate L&D.',
    content: '',
    tags: ['AI', 'Personalization', 'Corporate Learning', 'L&D Strategy'],
    category: 'whitepaper',
    readingTime: 12,
    publishedAt: '2024-08-15',
    images: {
      featured: '/images/articles/ai-personalization-featured.jpg',
      thumbnail: '/images/articles/ai-personalization-thumb.jpg',
    },
    downloadUrl: '/downloads/enterique-ai-personalization-learning.pdf',
    featured: true,
  },
  {
    id: 'ai-tools-instructional-design',
    title: 'AI Tools for Instructional Design',
    slug: 'ai-tools-instructional-design',
    excerpt: 'Real results from top learning designers using AI tools throughout the instructional design process. Practical guide and case studies on AI adoption in the ID field.',
    content: '',
    tags: ['AI', 'Instructional Design', 'Tools', 'Best Practices'],
    category: 'whitepaper',
    readingTime: 15,
    publishedAt: '2024-09-08',
    images: {
      featured: '/images/articles/ai-tools-id-featured.jpg',
      thumbnail: '/images/articles/ai-tools-id-thumb.jpg',
    },
    downloadUrl: '/downloads/ai-tools-instructional-design.pdf',
    featured: true,
  },

  // ============================================
  // TRAINING & GUIDES
  // ============================================
  {
    id: 'property-manager-mentor',
    title: 'Property Manager Mentor Guide',
    slug: 'property-manager-mentor',
    excerpt: 'Comprehensive mentor guide for property managers. Structured onboarding and professional development framework for property management excellence.',
    content: '',
    tags: ['Property Management', 'Training', 'Mentorship', 'Professional Development'],
    category: 'whitepaper',
    readingTime: 20,
    publishedAt: '2024-10-01',
    images: {
      featured: '/images/articles/property-mentor-featured.jpg',
      thumbnail: '/images/articles/property-mentor-thumb.jpg',
    },
    downloadUrl: '/downloads/property-manager-mentor-guide.pdf',
    featured: false,
  },
  {
    id: 'preventing-workplace-harassment',
    title: 'Preventing Workplace Harassment',
    slug: 'preventing-workplace-harassment',
    excerpt: 'Workplace harassment prevention training materials designed for meaningful behavior change, not just checkbox compliance.',
    content: '',
    tags: ['Compliance', 'HR', 'Training', 'Workplace Culture'],
    category: 'whitepaper',
    readingTime: 8,
    publishedAt: '2024-10-15',
    images: {
      featured: '/images/articles/harassment-prevention-featured.jpg',
      thumbnail: '/images/articles/harassment-prevention-thumb.jpg',
    },
    downloadUrl: '/downloads/preventing-workplace-harassment.pdf',
    featured: false,
  },

  // ============================================
  // THOUGHT LEADERSHIP
  // ============================================
  {
    id: 'steve-jobs-emotional-intelligence',
    title: 'Steve Jobs & Emotional Intelligence',
    slug: 'steve-jobs-emotional-intelligence',
    excerpt: 'Deep psychological analysis of Steve Jobs\' emotional intelligence and leadership style. Examining the gap between his public persona and management approach.',
    content: '',
    tags: ['Leadership', 'Emotional Intelligence', 'Psychology', 'Case Study'],
    category: 'thought-leadership',
    readingTime: 25,
    publishedAt: '2024-11-10',
    images: {
      featured: '/images/articles/jobs-ei-featured.jpg',
      thumbnail: '/images/articles/jobs-ei-thumb.jpg',
    },
    featured: false,
  },
]

// Presentations data (separate from articles)
export const presentations = [
  {
    id: 'internet-http-training',
    title: 'Internet & HTTP Training',
    slug: 'internet-http-training',
    description: 'Foundational web technology education demystifying HTTP protocols for non-technical audiences.',
    type: 'PowerPoint',
    downloadUrl: '/downloads/internet-http-training.pptx',
    thumbnail: '/images/presentations/http-thumb.jpg',
  },
  {
    id: 'structure-presentation',
    title: 'Structure Presentation',
    slug: 'structure-presentation',
    description: 'Visual communication of complex organizational or technical structures for stakeholder alignment.',
    type: 'PowerPoint',
    downloadUrl: '/downloads/structure-presentation.pptx',
    thumbnail: '/images/presentations/structure-thumb.jpg',
  },
]

// Helper functions
export const getFeaturedArticles = () => articles.filter((a) => a.featured)

export const getArticlesByCategory = (category: string) =>
  articles.filter((a) => a.category === category)

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug)

export const getAllTags = () => {
  const tagSet = new Set<string>()
  articles.forEach((a) => a.tags.forEach((t) => tagSet.add(t)))
  return Array.from(tagSet).sort()
}

export const getArticlesByTag = (tag: string) =>
  articles.filter((a) => a.tags.includes(tag))
