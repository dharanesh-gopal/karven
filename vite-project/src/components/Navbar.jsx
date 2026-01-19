import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"></div>
              <div className="relative h-8 w-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">Karvensen</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/training', label: 'Training' },
            { href: '/blog', label: 'Blog' },
            { href: '/careers', label: 'Careers' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:bg-gray-100 dark:focus:bg-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col gap-2 p-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/training', label: 'Training' },
              { href: '/blog', label: 'Blog' },
              { href: '/careers', label: 'Careers' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-indigo-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
