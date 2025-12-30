import React, { useEffect, useState } from 'react'

type Theme = 'system' | 'light' | 'dark'
const STORAGE_KEY = 'theme-mode'

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return

  const html = document.documentElement
  const effective = theme === 'system' ? getSystemTheme() : theme

  html.dataset.theme = effective
  html.classList.toggle('dark', effective === 'dark')
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system'
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
    return stored ?? 'system'
  })

  useEffect(() => {
    applyTheme(theme)
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // ignore storage errors
    }
  }, [theme])

  const cycleTheme = () => {
    setTheme((prev) =>
      prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system'
    )
  }

  const label = `Theme: ${theme}`

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="px-3 py-1 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={label}
    >
      {label}
    </button>
  )
}
