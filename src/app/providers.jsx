'use client'

import { createContext, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider, useTheme } from 'next-themes'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
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
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <TerminalContext.Provider value={{ isOpen, setIsOpen }}>
          <ThemeWatcher />
          {children}
        </TerminalContext.Provider>
      </ThemeProvider>
    </AppContext.Provider>
  )
}
