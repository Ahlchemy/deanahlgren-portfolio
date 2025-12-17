# CLAUDE.md - Portfolio Website Design Agent

This file provides guidance to Claude Code when working on the Dean Ahlgren portfolio website. It captures established design patterns, settings, and conventions.

## Project Overview

- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion
- **Routing**: React Router DOM
- **Deployment**: Hostinger via SSH (rsync to public_html)

## Article/Insights Pages (`/insights/:slug`)

### File: `src/components/pages/ArticleDetail.tsx`

#### PDF Embedding
When `article.embedPdf` is true, embed the PDF with these settings:
```tsx
<iframe
  src={`${article.downloadUrl}#pagemode=none&view=FitH&scrollbar=1`}
  title={article.title}
  className="w-full border-0"
  style={{ height: '800px' }}
/>
```
- `pagemode=none` - Hides sidebar/navigation pane
- `view=FitH` - Fits horizontally for single page view
- `scrollbar=1` - Keeps scrollbar visible

#### Download PDF Buttons
All PDF download links must open in new window:
```tsx
<a
  href={article.downloadUrl}
  target="_blank"
  rel="noopener noreferrer"
>
```

#### Hero Image
Display thumbnail if available, fallback to FileText icon:
```tsx
{article.images?.thumbnail || article.images?.featured ? (
  <img src={article.images.thumbnail || article.images.featured} ... />
) : (
  <FileText className="w-20 h-20 text-white/50" />
)}
```

#### Summary Content
Render markdown-style content with bold support:
```tsx
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
```

#### Article Data Structure
```typescript
{
  id: string,
  title: string,
  slug: string,
  excerpt: string,           // Short description
  content: string,           // Full markdown content for Summary section
  tags: string[],            // Key topics displayed as list
  category: 'research' | 'whitepaper' | 'analysis' | 'thought-leadership',
  readingTime: number,
  publishedAt: string,
  images: {
    featured?: string,
    thumbnail?: string,      // Used in hero and cards
  },
  downloadUrl?: string,      // PDF download path
  embedPdf?: boolean,        // Enable PDF embedding on page
  featured: boolean,
}
```

## Work/Project Pages (`/work/:slug`)

### Files:
- `src/components/pages/ProjectDetail.tsx`
- `src/components/pages/CourseDetail.tsx`

#### Navigation (Back/Next)
Use unified navigation across all work items (projects + courses):
```tsx
import { getWorkItemNavigation } from '@/data'

const { prev, next } = slug ? getWorkItemNavigation(slug) : { prev: null, next: null }

// Navigation UI
<Link to={prev ? `/work/${prev.slug}` : '/work'}>
  <ArrowLeft /> Back
</Link>
{next && (
  <Link to={`/work/${next.slug}`}>
    Next <ArrowRight />
  </Link>
)}
```

#### Related Projects Thumbnails
Display actual thumbnails when available:
```tsx
<div className="aspect-video ... overflow-hidden">
  {related.images?.thumbnail ? (
    <img
      src={related.images.thumbnail}
      alt={related.title}
      className="w-full h-full object-cover object-top"
    />
  ) : (
    <Code2 className="w-10 h-10 text-ocean-400" />
  )}
</div>
```

#### Screenshots Section
Only show if valid screenshots exist (not placeholders):
```tsx
{project.images.screenshots && project.images.screenshots.length > 0 &&
 project.images.screenshots.some(src => !src.includes('-thumb') && !src.includes('placeholder')) && (
  // Render screenshots with onError handler to hide broken images
)}
```

#### Demo Modal
For projects with demos, open in fullscreen modal:
```tsx
const [demoModalOpen, setDemoModalOpen] = useState(false)

// Modal with iframe
<AnimatePresence>
  {demoModalOpen && (
    <motion.div className="fixed inset-0 z-50 ...">
      <iframe src={project.links.demo} className="w-full h-full" />
    </motion.div>
  )}
</AnimatePresence>
```

#### Project Data Structure
```typescript
{
  id: string,
  title: string,
  slug: string,
  shortDescription: string,
  fullDescription: string[],  // Array of paragraphs
  category: string,
  technologies: string[],
  links: {
    demo?: string,            // Demo URL (modal or external)
    live?: string,            // Live site URL
    github?: string,
  },
  images: {
    thumbnail?: string,       // Card and related projects
    hero?: string,
    screenshots?: string[],   // Only include if actual files exist
  },
  metrics?: { label: string, value: string }[],
  featured: boolean,
}
```

## Global Patterns

### Scroll to Top
All route changes scroll to top via `ScrollToTop` component in `main.tsx`:
```tsx
<BrowserRouter>
  <ScrollToTop />
  <App />
</BrowserRouter>
```

### Share Modal
Use the custom `ShareModal` component instead of native OS share (which opens Mac's personal sharing).

**File:** `src/components/ShareModal.tsx`

```tsx
import { ShareModal } from '@/components/ShareModal'

const [shareModalOpen, setShareModalOpen] = useState(false)

// Button to open
<button onClick={() => setShareModalOpen(true)}>
  <Share2 /> Share
</button>

// Modal component
<ShareModal
  isOpen={shareModalOpen}
  onClose={() => setShareModalOpen(false)}
  title={article.title}
  url={window.location.href}
  description={article.excerpt}
/>
```

**Features:**
- **Copy Link** - Copies URL to clipboard with "Copied!" confirmation
- **LinkedIn** - Opens LinkedIn share dialog in popup
- **Twitter/X** - Opens tweet composer with title and link
- **Email** - Opens mailto: with pre-filled subject and body

### Image Paths
- Project thumbnails: `/images/projects/{name}-thumb.png`
- Article thumbnails: `/images/articles/{name}-thumb.png`
- Course thumbnails: `/images/courses/{name}-thumb.png`
- Demos: `/demos/{demo-name}/index.html`
- Downloads: `/downloads/{filename}.pdf`

### Deployment Commands
```bash
# Build
rm -rf dist && npm run build

# Copy demos
cp -r public/demos dist/

# Deploy to Hostinger
rsync -avz --delete --exclude='node_modules' \
  -e "ssh -p 65002 -o StrictHostKeyChecking=no" \
  dist/ u197354438@156.67.75.188:/home/u197354438/public_html/
```

### Git Commit Format
```
Brief description of change

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

## Color System

### Category Colors (Articles)
- Research: `ocean` (blue)
- Whitepaper: `amber` (gold)
- Analysis: `dawn` (coral/pink)
- Thought Leadership: `green`

### UI Colors
- Primary actions: `ocean-500/600`
- Neutral backgrounds: `neutral-50/800/900/950`
- Text: `neutral-900` (light) / `white` (dark)

## File Organization

```
src/
├── components/
│   ├── pages/
│   │   ├── ArticleDetail.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── CourseDetail.tsx
│   │   └── ...
│   └── ScrollToTop.tsx
├── data/
│   ├── index.ts          # Unified navigation helpers
│   ├── articles.ts
│   ├── projects.ts
│   └── courses.ts
└── types/
    └── index.ts          # TypeScript interfaces

public/
├── demos/                # Interactive demo files
├── downloads/            # PDF downloads
└── images/
    ├── articles/
    ├── projects/
    └── courses/
```
