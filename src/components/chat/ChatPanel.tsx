import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, X, RotateCcw } from 'lucide-react'
import { useChat } from '@/store/useChat'
import { ChatMessage } from './ChatMessage'
import { TypingIndicator } from './TypingIndicator'

const SUGGESTED_PROMPTS = [
  'Background?',
  'AI experience?',
  'Services?',
]

interface ChatPanelProps {
  variant: 'desktop' | 'mobile'
}

export function ChatPanel({ variant }: ChatPanelProps) {
  const {
    isOpen,
    messages,
    isLoading,
    error,
    messageCount,
    toggleChat,
    sendMessage,
    clearChat,
  } = useChat()

  const [input, setInput] = useState('')
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const isDesktop = variant === 'desktop'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isLoading) return
    setInput('')
    await sendMessage(trimmed)
    inputRef.current?.focus()
  }

  const handlePromptClick = (prompt: string) => {
    sendMessage(prompt)
  }

  // Mobile collapsed state
  if (!isDesktop && !isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="flex items-center gap-2.5 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl text-white hover:bg-white/15 transition-colors"
      >
        <MessageCircle className="w-5 h-5 text-amber-400" />
        <span className="font-medium text-sm">Chat with my AI assistant</span>
      </button>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col bg-white/10 dark:bg-neutral-800/80 backdrop-blur-sm border border-white/15 rounded-2xl shadow-lg overflow-hidden ${
        isDesktop ? 'w-full max-h-[400px]' : 'w-full max-h-[378px]'
      }`}
    >
      {/* Header with integrated headshot */}
      <div className="relative px-5 pt-5 pb-3 bg-gradient-to-b from-amber-500/15 to-transparent">
        <div className="flex items-start gap-3.5">
          <img
            src="/images/dean_headshot.jpg"
            alt="Dean Ahlgren"
            className="w-[67px] h-[67px] rounded-xl object-cover object-top ring-2 ring-amber-400/30 shadow-lg flex-shrink-0"
          />
          <div className="pt-0.5 flex-1">
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold text-white leading-tight">Dean Ahlgren</p>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    className="p-1.5 text-white/50 hover:text-white/80 transition-colors"
                    title="Clear chat"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
                {!isDesktop && (
                  <button
                    onClick={toggleChat}
                    className="p-1.5 text-white/50 hover:text-white/80 transition-colors"
                    title="Close chat"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                )}
              </div>
            </div>
            <p className="text-sm text-amber-400/90 mt-0.5">Instructional Designer</p>
          </div>
        </div>
        <p className="text-xs font-semibold text-white/70 mt-3">
          Meet AI Dean — Ask the Questions You'd Ask Me
        </p>
      </div>

      {/* Messages area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-4 pt-1 pb-3 space-y-3 min-h-0 chat-scrollbar"
      >
        {messages.length === 0 && !isLoading ? (
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handlePromptClick(prompt)}
                className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-full border border-white/10 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        ) : (
          <>
            <AnimatePresence>
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
            </AnimatePresence>
            {isLoading && <TypingIndicator />}
            {error && (
              <p className="text-xs text-red-300 px-1">{error}</p>
            )}
          </>
        )}
      </div>

      {/* Input area */}
      <form onSubmit={handleSubmit} className="px-4 pb-3 pt-1.5">
        <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3.5 py-2 border border-white/10 focus-within:border-white/25 transition-colors">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={messageCount >= 20 ? 'Message limit reached' : 'Ask about Dean...'}
            disabled={messageCount >= 20}
            className="flex-1 bg-transparent text-xs text-white placeholder-white/40 outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading || messageCount >= 20}
            className="p-1.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-40 disabled:hover:bg-amber-500 rounded-lg transition-colors"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
        <p className="text-[10px] text-white/30 mt-2 text-center">
          AI-powered &middot; Curated and trained by Dean
        </p>
      </form>
    </motion.div>
  )
}
