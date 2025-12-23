import type { Project } from '@/types'

export const projects: Project[] = [
  // ============================================
  // DATA SCIENCE - FEATURED
  // ============================================
  {
    id: 'hotel-cancellation-dashboard',
    title: 'Hotel Cancellation Prediction Dashboard',
    slug: 'hotel-cancellation-dashboard',
    category: 'data-science',
    description: `Interactive data science dashboard presenting a complete machine learning analysis for predicting hotel booking cancellations. This comprehensive project demonstrates the full data science workflow from problem definition through actionable business insights.

The dashboard features exploratory data analysis visualizations, model comparison across 4 ML algorithms (Logistic Regression, Decision Tree, Random Forest, XGBoost), and key findings that enable proactive revenue management and optimized inventory control. Built with React, Recharts, and Framer Motion for smooth interactions.`,
    shortDescription: 'Interactive ML dashboard predicting hotel cancellations with 87.9% accuracy across 9,069 bookings',
    technologies: ['React', 'Vite', 'Recharts', 'Tailwind CSS', 'Framer Motion', 'Machine Learning'],
    links: {
      demo: '/demos/hotel-cancellation-dashboard/index.html',
    },
    images: {
      thumbnail: '/images/projects/hotel-dashboard-thumb.png',
      hero: '/images/projects/hotel-dashboard-thumb.png',
    },
    metrics: [
      { label: 'Bookings Analyzed', value: '9,069' },
      { label: 'Best Accuracy', value: '87.9%' },
      { label: 'ROC AUC', value: '0.92' },
      { label: 'Models Compared', value: '4' },
    ],
    status: 'published',
    featured: true,
    order: 0,
    createdAt: '2024-12-22',
    updatedAt: '2024-12-22',
  },

  // ============================================
  // APPLICATIONS
  // ============================================
  {
    id: 'beatloom-lyric-sync',
    title: 'BeatLoom Lyric Sync',
    slug: 'beatloom-lyric-sync',
    category: 'applications',
    description: `AI-powered lyric synchronization system using Demucs for vocal separation and SOFA (Singing-Oriented Forced Aligner) for accurate lyric timing alignment with audio. This music technology tool creates synchronized lyrics with audio tracks and outputs multiple formats including LRC, SRT, and custom JSON.

The system leverages machine learning models to isolate vocals from mixed audio, then applies forced alignment algorithms to match lyric text with precise timestamps. Built with Python 3.8+ and supports optional CUDA GPU acceleration for faster processing.`,
    shortDescription: 'AI-powered audio analysis tool synchronizing lyrics with music timestamps using machine learning',
    technologies: ['Python', 'Demucs', 'SOFA', 'Machine Learning', 'Audio Processing'],
    links: {
      github: 'https://github.com/Ahlchemy/beatloom-lyric-sync',
      video: '/videos/beatloom-demo.mp4',
    },
    images: {
      thumbnail: '/images/projects/beatloom-thumb.png',
      hero: '/images/projects/beatloom-thumb.png',
      screenshots: [],
    },
    metrics: [
      { label: 'Accuracy', value: '95%+' },
      { label: 'Formats', value: 'LRC, SRT, JSON' },
    ],
    status: 'published',
    featured: false,
    order: 1,
    createdAt: '2024-01-01',
    updatedAt: '2024-12-01',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Web App',
    slug: 'computer-vision',
    category: 'applications',
    description: `Interactive web application demonstrating computer vision concepts with a modern interface built using Tailwind CSS. This project showcases real-time visual processing and AI's ability to interpret visual information.

The application provides hands-on exploration of computer vision techniques including image classification, object detection, and visual feature extraction. Built as an educational tool to make complex CV concepts accessible.`,
    shortDescription: 'Real-time computer vision application demonstrating AI visual interpretation',
    technologies: ['Node.js', 'JavaScript', 'Tailwind CSS', 'Computer Vision', 'TensorFlow.js'],
    links: {
      demo: '/demos/computer-vision/index.html',
    },
    images: {
      thumbnail: '/images/projects/cv-thumb.png',
      hero: '/images/projects/cv-thumb.png',
    },
    status: 'published',
    featured: false,
    order: 2,
    createdAt: '2024-01-01',
    updatedAt: '2024-12-01',
  },
  {
    id: 'screenshot-llm-tool',
    title: 'Screenshot LLM Tool',
    slug: 'screenshot-llm-tool',
    category: 'applications',
    description: `Screenshot capture tool with Large Language Model integration via OpenAI API. Features global keyboard shortcuts and a GUI interface for seamless productivity workflows.

This desktop application captures screenshots and processes them with AI vision models for instant analysis. Perfect for quick documentation, code review assistance, and extracting information from visual content. Built for macOS with Accessibility and Screen Recording permissions.`,
    shortDescription: 'OpenAI-integrated utility transforming screenshots into actionable insights through LLMs',
    technologies: ['Python', 'OpenAI API', 'GPT-4 Vision', 'PyQt', 'macOS'],
    links: {
      github: 'https://github.com/deanahlgren/screenshot-llm-tool',
    },
    images: {},
    metrics: [
      { label: 'Response Time', value: '<3s' },
      { label: 'Vision Model', value: 'GPT-4V' },
    ],
    status: 'published',
    featured: false,
    order: 4,
    createdAt: '2024-01-01',
    updatedAt: '2024-12-01',
  },
  {
    id: 'tsunami-escape-pwa',
    title: 'Tsunami Escape PWA',
    slug: 'tsunami-escape-pwa',
    category: 'applications',
    description: `Life-saving emergency evacuation Progressive Web App for tsunami events in Hawaii and US West Coast. Designed to work offline during emergencies when cellular and WiFi connectivity is unavailable.

This public safety tool helps users identify tsunami risk zones and find evacuation routes using geolocation. Built as a static PWA with offline-first architecture, it requires no internet connection once installed. Deploy to HTTPS for full PWA features including install prompts and background sync.`,
    shortDescription: 'Life-saving public safety PWA combining geolocation and offline-first design for emergency response',
    technologies: ['PWA', 'JavaScript', 'Service Workers', 'Geolocation API', 'Offline-First'],
    links: {
      demo: '/demos/tsunami-escape/index.html',
      live: 'https://github.com/Ahlchemy/tsunami-escape-app',
    },
    images: {
      thumbnail: '/images/projects/tsunami-thumb.png',
    },
    metrics: [
      { label: 'Offline Ready', value: '100%' },
      { label: 'Load Time', value: '<1s' },
    ],
    status: 'published',
    featured: true,
    order: 5,
    createdAt: '2024-01-01',
    updatedAt: '2024-12-01',
  },
]

// Helper functions
export const getFeaturedProjects = () => projects.filter((p) => p.featured)

export const getProjectsByCategory = (category: string) =>
  projects.filter((p) => p.category === category)

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug)

export const getAllTechnologies = () => {
  const techSet = new Set<string>()
  projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)))
  return Array.from(techSet).sort()
}
