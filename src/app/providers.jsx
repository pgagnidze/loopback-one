'use client'

import { createContext, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const AppContext = createContext({})

export const TerminalContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
})

export function Providers({ children }) {
  let pathname = usePathname()
  let previousPathname = usePrevious(pathname)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <TerminalContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </TerminalContext.Provider>
    </AppContext.Provider>
  )
}
