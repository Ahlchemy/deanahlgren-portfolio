import { create } from 'zustand'

interface FilterState {
  category: string | null
  technologies: string[]
  searchQuery: string
  setCategory: (category: string | null) => void
  setTechnologies: (technologies: string[]) => void
  toggleTechnology: (tech: string) => void
  setSearchQuery: (query: string) => void
  clearFilters: () => void
}

export const useFilter = create<FilterState>((set) => ({
  category: null,
  technologies: [],
  searchQuery: '',

  setCategory: (category) => set({ category }),

  setTechnologies: (technologies) => set({ technologies }),

  toggleTechnology: (tech) =>
    set((state) => ({
      technologies: state.technologies.includes(tech)
        ? state.technologies.filter((t) => t !== tech)
        : [...state.technologies, tech],
    })),

  setSearchQuery: (searchQuery) => set({ searchQuery }),

  clearFilters: () =>
    set({
      category: null,
      technologies: [],
      searchQuery: '',
    }),
}))
