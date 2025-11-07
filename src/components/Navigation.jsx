import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Triangle, Hexagon, Cube } from 'lucide-react'

const links = [
  { name: 'Beranda', href: '#beranda', icon: Triangle },
  { name: 'Fitur', href: '#fitur', icon: Hexagon },
  { name: '3D', href: '#scene', icon: Cube },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border border-white/40 dark:border-neutral-800 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#beranda" className="inline-flex items-center gap-2">
              <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-md">
                <Triangle size={18} />
              </div>
              <span className="font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
                GeoModern
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {links.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="relative px-3 py-2 rounded-xl text-sm font-medium text-neutral-700/90 dark:text-neutral-200/90 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon size={16} /> {name}
                  </span>
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  />
                </a>
              ))}
            </nav>

            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/70 dark:bg-neutral-800/70 border border-white/60 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 shadow"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-4 pb-4 grid gap-2">
                  {links.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-white/80 dark:bg-neutral-800/60 border border-white/60 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
                    >
                      <span className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
                        <Icon size={16} />
                      </span>
                      <span className="font-medium text-neutral-800 dark:text-neutral-100">
                        {name}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
