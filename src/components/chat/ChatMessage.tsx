import { motion } from 'framer-motion'
import type { ChatMessage as ChatMessageType } from '@/types'

interface ChatMessageProps {
  message: ChatMessageType
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  // Split content into paragraphs after each sentence for better readability
  const paragraphs = message.content
    .split(/(?<=\.)\s+/)
    .filter(p => p.trim())

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[85%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
          isUser
            ? 'bg-ocean-500 text-white rounded-2xl rounded-br-md'
            : 'bg-white/10 text-white/90 rounded-2xl rounded-bl-md'
        }`}
      >
        {!isUser && paragraphs.length > 1 ? (
          <div className="space-y-3">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : (
          message.content
        )}
      </div>
    </motion.div>
  )
}
