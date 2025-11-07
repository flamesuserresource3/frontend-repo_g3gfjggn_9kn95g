import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Layers, Cube, Star } from 'lucide-react';

const navItems = [
  { label: 'Beranda', href: '#home', icon: <Layers size={18} /> },
  { label: 'Showcase', href: '#showcase', icon: <Cube size={18} /> },
  { label: 'Fitur', href: '#features', icon: <Star size={18} /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="size-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400" />
              <span className="font-semibold tracking-tight text-slate-800">GeoMotion</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative overflow-hidden rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 opacity-0 transition group-hover:opacity-100" />
                  <span className="relative z-10 flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </span>
                </a>
              ))}
              <a
                href="#cta"
                className="ml-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:scale-[1.02]"
              >
                Mulai
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu with dynamic transitions */}
          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                className="md:hidden overflow-hidden px-4 pb-4"
              >
                <div className="grid gap-2">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur hover:bg-white"
                    >
                      {item.icon}
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
