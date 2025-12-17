// ============================================
// Portfolio Content Types
// ============================================

export type ProjectCategory =
  | 'ai-learning'
  | 'interactive-courses'
  | 'applications'
  | 'data-science'
  | 'specialized'
  | 'presentations';

export type ProjectStatus = 'featured' | 'published' | 'draft';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  shortDescription: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    live?: string;
    download?: string;
    video?: string;
  };
  images: {
    thumbnail: string;
    hero?: string;
    screenshots?: string[];
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  status: ProjectStatus;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  modules: {
    id: string;
    title: string;
    description: string;
    duration?: string;
  }[];
  objectives: string[];
  technologies: string[];
  images: {
    thumbnail: string;
    hero?: string;
    screenshots?: string[];
  };
  demoUrl?: string;
  hasInteractiveDemo: boolean;
  status: ProjectStatus;
  featured: boolean;
  order: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: 'research' | 'whitepaper' | 'analysis' | 'thought-leadership';
  readingTime: number;
  publishedAt: string;
  updatedAt?: string;
  images: {
    featured?: string;
    thumbnail?: string;
  };
  externalUrl?: string;
  downloadUrl?: string;
  embedPdf?: boolean;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  idealFor: string[];
  deliverables: string[];
  order: number;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  type: 'role' | 'education' | 'certification' | 'milestone';
}

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  badgeUrl?: string;
  verifyUrl?: string;
}

// ============================================
// UI Component Types
// ============================================

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: string;
  unlocked: boolean;
  unlockedAt?: string;
}

// ============================================
// Store Types
// ============================================

export interface ThemeState {
  mode: 'light' | 'dark' | 'system';
  setMode: (mode: 'light' | 'dark' | 'system') => void;
}

export interface FilterState {
  category: string | null;
  technologies: string[];
  searchQuery: string;
  setCategory: (category: string | null) => void;
  setTechnologies: (technologies: string[]) => void;
  setSearchQuery: (query: string) => void;
  clearFilters: () => void;
}

export interface AchievementState {
  achievements: Achievement[];
  unlockAchievement: (id: string) => void;
  checkAchievement: (condition: string) => void;
}

// ============================================
// Utility Types
// ============================================

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export interface PageProps {
  children?: React.ReactNode;
}
