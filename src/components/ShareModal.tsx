import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Link2, Linkedin, Mail, Check } from 'lucide-react'

// Twitter/X icon component (not in lucide)
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  url: string
  description?: string
}

export function ShareModal({ isOpen, onClose, title, url, description }: ShareModalProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedInUrl, '_blank', 'width=600,height=600')
  }

  const handleTwitter = () => {
    const text = `${title}${description ? ` - ${description.substring(0, 100)}...` : ''}`
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, '_blank', 'width=600,height=400')
  }

  const handleEmail = () => {
    const subject = encodeURIComponent(title)
    const body = encodeURIComponent(`I thought you might find this interesting:\n\n${title}\n\n${description || ''}\n\nRead more: ${url}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white dark:bg-neutral-700 rounded-xl shadow-2xl overflow-hidden mx-4">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-600">
                <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-white">
                  Share
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Title Preview */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                  {title}
                </p>

                {/* Share Options */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Copy Link */}
                  <button
                    onClick={handleCopyLink}
                    className={`flex items-center justify-center gap-2 p-3 rounded-lg transition-all ${
                      copied
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span className="font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Link2 className="w-5 h-5" />
                        <span className="font-medium">Copy Link</span>
                      </>
                    )}
                  </button>

                  {/* LinkedIn */}
                  <button
                    onClick={handleLinkedIn}
                    className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">LinkedIn</span>
                  </button>

                  {/* Twitter/X */}
                  <button
                    onClick={handleTwitter}
                    className="flex items-center justify-center gap-2 p-3 rounded-lg bg-neutral-900 dark:bg-white hover:bg-black dark:hover:bg-neutral-200 text-white dark:text-neutral-900 transition-colors"
                  >
                    <TwitterIcon className="w-5 h-5" />
                    <span className="font-medium">X / Twitter</span>
                  </button>

                  {/* Email */}
                  <button
                    onClick={handleEmail}
                    className="flex items-center justify-center gap-2 p-3 rounded-lg bg-ocean-500 hover:bg-ocean-600 text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Email</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
