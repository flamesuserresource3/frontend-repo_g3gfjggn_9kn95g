import { motion } from 'framer-motion'
import { Triangle, Hexagon, Cube, LayoutGrid } from 'lucide-react'

const features = [
  {
    title: 'Komposisi Geometri',
    desc: 'Pola segitiga, heksagon, dan kubus disusun ritmis untuk nuansa modern.',
    icon: Triangle,
    bg: 'from-indigo-500/15 to-blue-500/15',
  },
  {
    title: 'Transisi Dinamis',
    desc: 'Navigasi halus dengan animasi mikro yang responsif dan elegan.',
    icon: LayoutGrid,
    bg: 'from-fuchsia-500/15 to-pink-500/15',
  },
  {
    title: 'Kanvas 3D Interaktif',
    desc: 'Berinteraksi dengan objek 3D langsung di halaman.',
    icon: Cube,
    bg: 'from-violet-500/15 to-purple-500/15',
  },
  {
    title: 'Modular & Skalabel',
    desc: 'Komponen fokus dan terstruktur untuk pengembangan berkelanjutan.',
    icon: Hexagon,
    bg: 'from-teal-500/15 to-emerald-500/15',
  },
]

export default function FeatureGrid() {
  return (
    <section id="fitur" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" className="text-neutral-200" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Fitur Geometri Modern
          </h2>
          <p className="mt-3 text-neutral-600">
            Perpaduan tipografi bersih, gradasi lembut, dan bentuk tegas untuk identitas visual kontemporer.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon, bg }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className={`h-11 w-11 grid place-items-center rounded-xl bg-gradient-to-br ${bg} text-neutral-900`}> 
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
