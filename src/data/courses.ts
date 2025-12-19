import type { Course } from '@/types'

export const courses: Course[] = [
  {
    id: 'ai-driven-robotics',
    title: 'AI-Driven Robotics & Reinforcement Learning',
    slug: 'ai-driven-robotics',
    description: `Comprehensive interactive course exploring AI-driven robotics and reinforcement learning. This 6-module course covers the foundations of RL, how robots learn through trial and error, real-world challenges in reward design, and practical applications in manipulation, locomotion, and navigation.

The course includes knowledge checks, interactive activities like designing reward functions and sim-to-real transfer exercises, plus coverage of advanced techniques including Deep RL, Multi-Agent RL, and Transfer Learning. Suitable for professionals, students, and executives seeking to understand practical AI robotics applications.`,
    shortDescription: 'Interactive exploration of how AI systems learn through trial, error, and reward optimization',
    modules: [
      { id: 'foundations', title: 'Module 1: Foundations', description: 'What is Reinforcement Learning, Core Components' },
      { id: 'how-robots-learn', title: 'Module 2: How Robots Learn', description: 'The RL Process and Core Algorithms' },
      { id: 'challenges-design', title: 'Module 3: Challenges & Design', description: 'Real-World Challenges and Reward Design' },
      { id: 'applications', title: 'Module 4: Applications', description: 'Robotic Manipulation, Locomotion, and Navigation' },
      { id: 'advanced', title: 'Module 5: Advanced Techniques', description: 'Deep RL, Multi-Agent RL, and Transfer Learning' },
      { id: 'future-industry', title: 'Module 6: Future & Industry', description: 'Future Trends and Industry Applications' },
    ],
    objectives: [
      'Understand reinforcement learning fundamentals and core components',
      'Explain how robots learn through the RL process and algorithms',
      'Design effective reward functions for real-world robotics challenges',
      'Apply RL concepts to manipulation, locomotion, and navigation tasks',
      'Evaluate advanced techniques like Deep RL and sim-to-real transfer',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    images: {
      thumbnail: '/images/courses/ai-driven-robotics-thumbnail.png',
      hero: '/images/courses/ai-driven-robotics-thumbnail.png',
    },
    demoUrl: '/demos/ai-driven-robotics-demo/index.html',
    hasInteractiveDemo: true,
    status: 'published',
    featured: false,
    order: 1,
  },
  {
    id: 'ai-learning-companion',
    title: 'AI Learning Companion',
    slug: 'ai-learning-companion',
    description: `A comprehensive, self-paced learning framework designed for professionals transitioning into AI and machine learning. Whether you're a learning designer, business analyst, or career changer, this course provides a structured path from foundational concepts to practical application.

The curriculum maps existing professional competencies to new AI skills, making abstract concepts accessible through real-world examples. You'll learn how machine learning algorithms work, understand the difference between supervised and unsupervised learning, and discover how to evaluate AI solutions for business problems.

Interactive visualizations bring complex topics to life—from understanding how neural networks process information to seeing gradient descent optimize a model in real-time. Each module builds progressively, with hands-on labs that let you experiment with data exploration, probability concepts, and linear algebra fundamentals without requiring prior programming experience.

By the end of this course, you'll be able to translate business problems into data science opportunities, critically evaluate AI tools and outputs, and communicate effectively with technical teams about machine learning solutions.`,
    shortDescription: 'A structured learning path for professionals entering AI—from foundational concepts to practical application',
    modules: [
      { id: 'foundations', title: 'ML Learning Companion Framework', description: 'Learning outcomes and competency mapping' },
      { id: 'data-science', title: 'Data Science Fundamentals', description: 'Core concepts and the data science lifecycle' },
      { id: 'math-modern', title: 'Mathematical Foundations (Modern)', description: 'Statistics, probability, and linear algebra essentials' },
      { id: 'math-practical', title: 'Mathematical Foundations (Practical)', description: 'Applied mathematics for ML' },
      { id: 'ml-algorithms', title: 'Machine Learning Algorithms', description: 'Supervised and unsupervised learning techniques' },
      { id: 'deep-learning', title: 'Deep Learning & Neural Networks', description: 'Neural network architectures and applications' },
      { id: 'ethics', title: 'Ethics & Responsible AI', description: 'Bias, fairness, and responsible development' },
      { id: 'generative-ai', title: 'Generative AI & Creative Frontier', description: 'Large language models and creative AI applications' },
    ],
    objectives: [
      'Understand core AI/ML concepts and terminology',
      'Translate business problems into data science opportunities',
      'Apply foundational mathematical principles to ML algorithms',
      'Build and evaluate machine learning models using no-code platforms',
      'Design ethical and responsible AI solutions',
    ],
    technologies: ['HTML', 'JavaScript', 'Interactive Visualizations', 'No-Code ML Platforms'],
    images: {
      thumbnail: '/images/courses/ai-learning-companion-thumb.png',
      hero: '/images/courses/ai-learning-companion-thumb.png',
    },
    demoUrl: '/demos/ai-learning-companion/index.html',
    hasInteractiveDemo: true,
    status: 'published',
    featured: true,
    order: 2,
  },
  {
    id: 'biz-ai-modules',
    title: 'Business AI Modules',
    slug: 'biz-ai-modules',
    description: `Comprehensive 8-module business AI training course covering various AI applications in business contexts. Designed for corporate audiences seeking to understand and leverage AI in their workflows.

Each module builds progressively from AI fundamentals to strategic implementation, with real-world case studies and practical frameworks for decision-making.`,
    shortDescription: 'Executive-ready AI education: 8 modules transforming business leaders into AI-informed decision makers',
    modules: [
      { id: 'mod-1', title: 'AI for Business Leaders', description: 'Strategic overview and opportunities' },
      { id: 'mod-2', title: 'Understanding AI Technologies', description: 'Technical foundations simplified' },
      { id: 'mod-3', title: 'AI in Operations', description: 'Automation and efficiency' },
      { id: 'mod-4', title: 'AI in Customer Experience', description: 'Personalization and engagement' },
      { id: 'mod-5', title: 'AI Ethics & Governance', description: 'Responsible AI implementation' },
      { id: 'mod-6', title: 'Building AI Teams', description: 'Talent and organization' },
      { id: 'mod-7', title: 'AI Strategy Development', description: 'Roadmap creation' },
      { id: 'mod-8', title: 'Measuring AI Success', description: 'ROI and metrics' },
    ],
    objectives: [
      'Develop AI strategy for your organization',
      'Evaluate AI solutions and vendors',
      'Lead AI transformation initiatives',
      'Measure and communicate AI ROI',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    images: {},
    demoUrl: '/demos/biz-ai-modules/module-1.html',
    hasInteractiveDemo: true,
    status: 'published',
    featured: true,
    order: 3,
  },
  {
    id: 'data-science-course',
    title: 'Data Science History & Evolution',
    slug: 'data-science-course',
    description: `Web-based interactive course on data science history and evolution, featuring progress tracking, quizzes, and note-taking capabilities. This self-paced learning platform covers the journey from ancient data practices to modern analytics.

Built as a fully functional e-learning experience demonstrating instructional design best practices including spaced repetition, immediate feedback, and learner engagement strategies.`,
    shortDescription: 'Hands-on data science curriculum with interactive visualizations and real-world datasets',
    modules: [
      { id: 'origins', title: 'Origins of Data', description: 'Ancient to early modern data practices' },
      { id: 'statistics', title: 'Rise of Statistics', description: 'Mathematical foundations' },
      { id: 'computing', title: 'Computing Era', description: 'Computers transform data analysis' },
      { id: 'big-data', title: 'Big Data Revolution', description: 'Scale and complexity' },
      { id: 'modern', title: 'Modern Data Science', description: 'Current practices and tools' },
    ],
    objectives: [
      'Trace the evolution of data science',
      'Understand key milestones and innovations',
      'Connect historical context to current practices',
      'Appreciate the interdisciplinary nature of data science',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    images: {},
    demoUrl: '/demos/data-science-course/index.html',
    hasInteractiveDemo: true,
    status: 'published',
    featured: false,
    order: 4,
  },
  {
    id: 'data-science-genai',
    title: 'Data Science & Generative AI',
    slug: 'data-science-genai',
    description: `Comprehensive course on data science evolution from ancient decision-making to modern generative AI. This visual, interactive learning journey is designed for technically savvy learners who want to understand the full arc of data science development.

Features modular JavaScript architecture, engaging visualizations, and progressive disclosure of complex concepts.`,
    shortDescription: 'Next-generation data science education powered by generative AI for personalized learning at scale',
    modules: [
      { id: 'ancient', title: 'Ancient Data Practices', description: 'Early human data collection' },
      { id: 'scientific', title: 'Scientific Revolution', description: 'Systematic observation and measurement' },
      { id: 'digital', title: 'Digital Transformation', description: 'Computerized data processing' },
      { id: 'ml-era', title: 'Machine Learning Era', description: 'Algorithms that learn' },
      { id: 'genai', title: 'Generative AI', description: 'Creative AI and large language models' },
    ],
    objectives: [
      'Understand the complete evolution of data science',
      'Grasp generative AI fundamentals',
      'Apply GenAI in data science workflows',
      'Evaluate AI-generated outputs critically',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Modular Architecture'],
    images: {},
    demoUrl: '/demos/data-science-genai/index.html',
    hasInteractiveDemo: true,
    status: 'published',
    featured: true,
    order: 5,
  },
  {
    id: 'design-components',
    title: 'E-Learning Component Library',
    slug: 'design-components',
    description: `Collection of reusable interactive e-learning components including accordions, flashcards, labeled graphics, process flows, scenarios, sorting activities, tabs, and timelines. This template library enables rapid development of engaging e-learning content.

Each component is standalone and customizable, following accessibility best practices and responsive design principles. Perfect for instructional designers building interactive content.`,
    shortDescription: 'Reusable React learning components: accordions, flashcards, quizzes, and interactive elements at scale',
    modules: [
      { id: 'accordion', title: 'Accordion Component', description: 'Expandable content sections' },
      { id: 'flashcards', title: 'Flashcard System', description: 'Spaced repetition learning' },
      { id: 'labeled-graphic', title: 'Labeled Graphics', description: 'Interactive image hotspots' },
      { id: 'process', title: 'Process Flows', description: 'Step-by-step visualizations' },
      { id: 'scenario', title: 'Branching Scenarios', description: 'Decision-based learning' },
      { id: 'sorting', title: 'Sorting Activities', description: 'Drag-and-drop categorization' },
      { id: 'tabs', title: 'Tab Navigation', description: 'Organized content panels' },
      { id: 'timeline', title: 'Interactive Timelines', description: 'Chronological exploration' },
    ],
    objectives: [
      'Implement reusable learning components',
      'Customize components for specific needs',
      'Ensure accessibility compliance',
      'Optimize for mobile learning',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    images: {},
    demoUrl: '/demos/design-components/index.html',
    hasInteractiveDemo: true,
    status: 'published',
    featured: false,
    order: 6,
  },
  {
    id: 'interactive-slides',
    title: 'Interactive Presentation System',
    slug: 'interactive-slides',
    description: `Dynamic slide presentation system with course data integration, parser for content generation, and transcript integration. This tool transforms static content into interactive presentations.

Features a Python parser for automated content generation from transcripts and reference materials, producing web-ready interactive slide experiences.`,
    shortDescription: 'Dynamic presentation framework transforming static content into engaging, interactive learning experiences',
    modules: [
      { id: 'parser', title: 'Content Parser', description: 'Automated slide generation' },
      { id: 'presenter', title: 'Presentation Mode', description: 'Interactive delivery' },
      { id: 'data', title: 'Course Data Integration', description: 'Dynamic content loading' },
    ],
    objectives: [
      'Transform transcripts into presentations',
      'Create interactive slide experiences',
      'Integrate dynamic course data',
      'Automate content production workflows',
    ],
    technologies: ['Python', 'JavaScript', 'HTML', 'CSS'],
    images: {},
    demoUrl: '/demos/interactive-slides/index.html',
    hasInteractiveDemo: true,
    status: 'published',
    featured: false,
    order: 7,
  },
  {
    id: 'malama-workplace',
    title: 'Malama Workplace Safety',
    slug: 'malama-workplace',
    description: `Professional workplace safety training module for Hawaii property management, covering HIOSH regulations with Hawaiian cultural integration. Built with React/JSX components featuring 8 interactive screens, quizzes, and progress tracking.

"Malama" means "to care for" in Hawaiian, reflecting the module's approach of integrating cultural values with compliance training. This corporate compliance training demonstrates how culturally-grounded design enhances engagement and retention.`,
    shortDescription: 'Interactive workplace safety training blending Hawaiian values with modern React-based learning design',
    modules: [
      { id: 'intro', title: 'Aloha & Introduction', description: 'Cultural context and overview' },
      { id: 'hiosh', title: 'HIOSH Regulations', description: 'Hawaii-specific compliance' },
      { id: 'hazards', title: 'Workplace Hazards', description: 'Identification and prevention' },
      { id: 'emergency', title: 'Emergency Procedures', description: 'Response protocols' },
      { id: 'reporting', title: 'Incident Reporting', description: 'Documentation and follow-up' },
      { id: 'quiz', title: 'Knowledge Check', description: 'Assessment and certification' },
    ],
    objectives: [
      'Understand HIOSH safety requirements',
      'Identify common workplace hazards',
      'Apply emergency response procedures',
      'Complete safety certification',
    ],
    technologies: ['React', 'JSX', 'CSS', 'Progress Tracking'],
    images: {},
    demoUrl: '/demos/malama-workplace/index.html',
    hasInteractiveDemo: true,
    status: 'published',
    featured: true,
    order: 8,
  },
  {
    id: 'thai-language',
    title: 'Thai Language Course',
    slug: 'thai-language',
    description: `Thai language learning course covering alphabet, travel phrases, and basic conversation. This self-study course combines audio, visual, and interactive practice for effective language acquisition.

Structured around practical travel scenarios, the course prioritizes high-frequency vocabulary and essential communication skills for visitors to Thailand.`,
    shortDescription: 'Culturally immersive language learning combining audio, visual, and interactive practice',
    modules: [
      { id: 'alphabet', title: 'Thai Alphabet', description: 'Script fundamentals' },
      { id: 'tones', title: 'Tones & Pronunciation', description: 'The five Thai tones' },
      { id: 'greetings', title: 'Greetings & Basics', description: 'Essential phrases' },
      { id: 'travel', title: 'Travel Phrases', description: 'Navigation and transport' },
      { id: 'food', title: 'Food & Dining', description: 'Restaurant vocabulary' },
      { id: 'numbers', title: 'Numbers & Money', description: 'Shopping and transactions' },
    ],
    objectives: [
      'Read basic Thai script',
      'Pronounce Thai tones correctly',
      'Use essential travel phrases',
      'Navigate common situations',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Audio'],
    images: {},
    demoUrl: '/demos/thai-language/index.html',
    hasInteractiveDemo: true,
    status: 'published',
    featured: false,
    order: 9,
  },
]

// Helper functions
export const getFeaturedCourses = () => courses.filter((c) => c.featured)

export const getCourseBySlug = (slug: string) =>
  courses.find((c) => c.slug === slug)

export const getCoursesWithDemos = () =>
  courses.filter((c) => c.hasInteractiveDemo)

export const getAllCourseTechnologies = () => {
  const techSet = new Set<string>()
  courses.forEach((c) => c.technologies.forEach((t) => techSet.add(t)))
  return Array.from(techSet).sort()
}
