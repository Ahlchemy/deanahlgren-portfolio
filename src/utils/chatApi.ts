const API_URL = import.meta.env.VITE_CHAT_API_URL || 'https://dean-portfolio-chat.deanahlgren.workers.dev'

interface ChatApiMessage {
  role: 'user' | 'assistant'
  content: string
}

export async function sendChatMessage(
  messages: ChatApiMessage[],
  sessionId: string
): Promise<string> {
  const response = await fetch(`${API_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, sessionId }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(
      (errorData as { error?: string }).error || `Request failed (${response.status})`
    )
  }

  const data = await response.json()
  // Anthropic response format: { content: [{ type: "text", text: "..." }] }
  const content = (data as { content?: { type: string; text: string }[] }).content
  if (content && content.length > 0 && content[0].text) {
    return content[0].text
  }

  throw new Error('Unexpected response format')
}
