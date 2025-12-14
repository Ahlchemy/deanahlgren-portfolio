import type { TimelineItem, Credential } from '@/types'

export const timeline: TimelineItem[] = [
  {
    id: 'manati-2025',
    year: '2025',
    title: 'Instructional Design Advisor & LMS Subject Matter Expert',
    organization: 'Manati.ai',
    description: 'Advising AI startup on integrating higher education workflows into agentic course delivery platform—translating academic requirements into technical specs for development team. Bridging LMS architecture with pedagogical best practices to design scalable solutions for academic adoption.',
    achievements: [
      'Translating academic requirements into technical specifications',
      'Bridging LMS architecture with pedagogical best practices',
      'Designing scalable solutions for academic adoption',
    ],
    technologies: ['AI/ML', 'LMS Architecture', 'Higher Education'],
    type: 'role',
  },
  {
    id: 'mit-2024',
    year: '2024',
    title: 'No Code AI and Machine Learning Certificate',
    organization: 'MIT Professional Education',
    description: 'Building Data Science Solutions. Advanced certification in artificial intelligence and machine learning applications for business and education contexts.',
    achievements: [
      'Completed MIT professional certification',
      'Applied AI/ML to learning solutions',
    ],
    type: 'certification',
  },
  {
    id: 'berkeley-2024',
    year: '2024',
    title: 'AI: Business Strategies and Applications',
    organization: 'UC Berkeley Haas School of Business',
    description: 'Strategic applications of artificial intelligence in business contexts. Certificate program focused on AI implementation and business transformation.',
    achievements: [
      'Completed Berkeley Haas certification',
      'Developed AI business strategy frameworks',
    ],
    type: 'certification',
  },
  {
    id: 'aau-senior-2007',
    year: '2007 - 2025',
    title: 'Senior Instructional Designer & E-Learning Developer',
    organization: 'Academy of Art University',
    description: 'Architected and produced 200+ online university courses—LMS backend, video production, interactive elements, hundreds of pages of content per course—during 260% enrollment growth, serving 18,000 students at peak.',
    achievements: [
      'Created 200+ online courses across undergraduate and graduate programs',
      'Achieved 260% enrollment growth over tenure',
      'Contributed to 25% reduction in first-term dropout rates',
      'Built production workflows achieving 10% efficiency gains',
      'Collaborated with SMEs across departments',
    ],
    technologies: ['LMS', 'Video Production', 'Interactive Media', 'HTML/CSS/JS'],
    type: 'role',
  },
  {
    id: 'aau-supervisor-2006',
    year: '2006 - 2007',
    title: 'Instructional Design Supervisor',
    organization: 'Academy of Art University',
    description: 'Built foundational remote workflow systems still in use nearly 20 years later. Managed and mentored five instructional designers—several went on to leadership roles.',
    achievements: [
      'Built foundational remote workflow systems (still in use)',
      'Managed team of 5 instructional designers',
      'Mentored designers who advanced to leadership roles',
    ],
    type: 'role',
  },
  {
    id: 'aau-designer-2004',
    year: '2004 - 2006',
    title: 'Instructional Designer',
    organization: 'Academy of Art University',
    description: "Designed interactive multimedia courses and faculty training during the university's early shift to online delivery.",
    achievements: [
      'Designed interactive multimedia courses',
      'Developed faculty training programs',
      'Supported early online delivery transition',
    ],
    type: 'role',
  },
  {
    id: 'vitesse-2002',
    year: '2002 - 2003',
    title: 'E-learning Developer',
    organization: 'Vitesse Learning',
    description: 'Built SCORM-compliant pharmaceutical training modules—translating complex FDA compliance content into scenario-based interactive learning.',
    achievements: [
      'Created SCORM-compliant training modules',
      'Translated complex FDA compliance content',
      'Developed scenario-based interactive learning',
    ],
    technologies: ['SCORM', 'Pharmaceutical Training', 'Compliance'],
    type: 'role',
  },
  {
    id: 'bechtel-2000',
    year: '2000 - 2001',
    title: 'E-learning Developer',
    organization: 'Bechtel Corporation',
    description: 'Built global safety and emergency response training for multicultural workforces across multiple continents.',
    achievements: [
      'Created global safety training programs',
      'Developed emergency response training',
      'Designed for multicultural audiences',
    ],
    technologies: ['Safety Training', 'Global Deployment', 'Multicultural Design'],
    type: 'role',
  },
  {
    id: 'education',
    year: '1990s',
    title: 'Bachelor of Arts',
    organization: 'New College of California',
    description: 'Concentrations in Writing and Consciousness, Poetics, and Media Studies. Foundation in humanistic thinking that informs a learner-centered approach to instructional design.',
    achievements: [
      'Concentration: Writing and Consciousness',
      'Concentration: Poetics',
      'Concentration: Media Studies',
    ],
    type: 'education',
  },
]

export const credentials: Credential[] = [
  {
    id: 'mit-ai-ml',
    title: 'No Code AI and Machine Learning: Building Data Science Solutions',
    issuer: 'MIT Professional Education',
    date: '2024',
    description: 'Advanced certification in AI/ML applications for building data science solutions without extensive coding.',
  },
  {
    id: 'berkeley-ai',
    title: 'Artificial Intelligence: Business Strategies and Applications',
    issuer: 'UC Berkeley Haas School of Business',
    date: '2024',
    description: 'Strategic framework for implementing AI in business contexts.',
  },
]

export const stats = {
  yearsExperience: 25,
  coursesDesigned: 200,
  enrollmentGrowth: '260%',
  dropoutReduction: '25%',
  yearsRemote: 18,
}

export const getTimelineByType = (type: TimelineItem['type']) =>
  timeline.filter((item) => item.type === type)

export const getRoles = () => getTimelineByType('role')
export const getCertifications = () => getTimelineByType('certification')
export const getEducation = () => getTimelineByType('education')
