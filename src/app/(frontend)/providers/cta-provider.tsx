'use client'

import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

interface CTAContextProps {
  state: ButtonState
  setState: (state: ButtonState) => void
}

type ButtonState = 'default' | 'course' | 'carousel'

const CTAContext = createContext<CTAContextProps | null>(null)

interface CTAProviderProps {
  children: ReactNode
}

export default function CTAProvider({ children }: CTAProviderProps) {
  const [state, setState] = useState<ButtonState>('default')

  const value = useMemo(() => ({ state, setState }), [state])

  return <CTAContext value={value}>{children}</CTAContext>
}

export function useCTA() {
  const context = useContext(CTAContext)
  if (context === null) {
    throw new Error('useCTA must be used within a CTAProvider')
  }
  return context
}
