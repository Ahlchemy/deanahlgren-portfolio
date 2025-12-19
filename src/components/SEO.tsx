import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  article?: {
    publishedTime?: string
    author?: string
    tags?: string[]
  }
}

const BASE_URL = 'https://deanahlgren.com'
const DEFAULT_IMAGE = '/og-image.png'
const SITE_NAME = 'Dean Ahlgren'

export function SEO({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  article,
}: SEOProps) {
  const fullTitle = title === 'Home'
    ? 'Dean Ahlgren | Instructional Design Mastery Meets AI Innovation'
    : `${title} | Dean Ahlgren`

  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Article specific */}
      {type === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.tags?.map((tag, i) => (
            <meta key={i} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  )
}
