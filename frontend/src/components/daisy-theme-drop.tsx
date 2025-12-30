import React, { useEffect, useState } from 'react'

const DEFAULT_THEME: Theme = 'dark'
const STORAGE_KEY = 'daisy-theme'

type ThemeMeta = { name: Theme; type: string; display: string }

type Theme =
  | 'light'
  | 'acid'
  | 'emerald'
  | 'fantasy'
  | 'silk'
  | 'winter'
  | 'dark'
  | 'abyss'
  | 'forest'
  | 'halloween'
  | 'luxury'
  | 'sunset'

const ThemeMetadata: ThemeMeta[] = [
  // light themes
  { name: 'light', type: 'light', display: 'Light (Default)' },
  { name: 'acid', type: 'light', display: 'Light Acid' },
  { name: 'emerald', type: 'light', display: 'Light Emerald' },
  { name: 'fantasy', type: 'light', display: 'Light Vivid' },
  { name: 'silk', type: 'light', display: 'Light Lux' },
  { name: 'winter', type: 'light', display: 'Light Winter' },
  // dark themes
  { name: 'dark', type: 'dark', display: 'Dark (Default)' },
  { name: 'abyss', type: 'dark', display: 'Dark Abyss' },
  { name: 'forest', type: 'dark', display: 'Dark Forest' },
  { name: 'halloween', type: 'dark', display: 'Dark Halloween' },
  { name: 'luxury', type: 'dark', display: 'Dark Lux' },
  { name: 'sunset', type: 'dark', display: 'Dark Sunset' }
]

export default function ThemeDropdown() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      // Storage check
      let themeFound
      if ((themeFound = localStorage.getItem(STORAGE_KEY))) {
        return themeFound as Theme
      }
      // HTML Top level check
      if ((themeFound = document.documentElement.getAttribute('data-theme'))) {
        return themeFound as Theme
      }
    }
    return DEFAULT_THEME
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
      document.documentElement.setAttribute('data-theme', theme)
    } catch (err) {
      console.info(err)
    }
  }, [theme])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme)
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="theme-select" className="text-sm">
        Theme
      </label>
      <select
        id="theme-select"
        className="select select-bordered select-sm"
        value={theme}
        onChange={handleChange}
        aria-label="Select color theme"
      >
        {ThemeMetadata.map((theme) => (
          <option key={theme.name} value={theme.name}>
            {theme.display}
          </option>
        ))}
      </select>
    </div>
  )
}
