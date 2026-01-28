import { create } from 'zustand'
import type { ChatMessage } from '@/types'
import { sendChatMessage } from '@/utils/chatApi'

const MAX_MESSAGES = 20

interface ChatState {
  isOpen: boolean
  messages: ChatMessage[]
  isLoading: boolean
  sessionId: string
  error: string | null
  messageCount: number
  toggleChat: () => void
  sendMessage: (content: string) => Promise<void>
  clearChat: () => void
}

function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export const useChat = create<ChatState>((set, get) => ({
  isOpen: false,
  messages: [],
  isLoading: false,
  sessionId: generateSessionId(),
  error: null,
  messageCount: 0,

  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),

  sendMessage: async (content: string) => {
    const state = get()

    if (state.messageCount >= MAX_MESSAGES) {
      set({
        error: "You've reached the 20-message limit. Refresh the page to start over, or contact Dean directly.",
      })
      return
    }

    const userMessage: ChatMessage = {
      id: generateSessionId(),
      role: 'user',
      content,
      timestamp: Date.now(),
    }

    set((state) => ({
      messages: [...state.messages, userMessage],
      isLoading: true,
      error: null,
      messageCount: state.messageCount + 1,
    }))

    try {
      // Build messages array for the API (role + content only)
      const apiMessages = [...get().messages].map((m) => ({
        role: m.role,
        content: m.content,
      }))

      const responseText = await sendChatMessage(apiMessages, state.sessionId)

      const assistantMessage: ChatMessage = {
        id: generateSessionId(),
        role: 'assistant',
        content: responseText,
        timestamp: Date.now(),
      }

      set((state) => ({
        messages: [...state.messages, assistantMessage],
        isLoading: false,
      }))
    } catch (err) {
      set({
        isLoading: false,
        error: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      })
    }
  },

  clearChat: () =>
    set({
      messages: [],
      error: null,
      messageCount: 0,
      sessionId: generateSessionId(),
    }),
}))
