import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="beranda" className="relative h-[90vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/3b2uE1Q-PLACEHOLDER/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 text-indigo-600 ring-1 ring-indigo-500/20"
          >
            <Sparkles size={16} /> Modern Geometry
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900"
          >
            Bentuk Geometri, Estetika Modern, Interaksi 3D
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-neutral-600 text-lg"
          >
            Eksplorasi komposisi segitiga, heksagon, dan kubus dalam kanvas 3D interaktif.
            Desain ringan, bersih, dan dinamis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#fitur" className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-indigo-600/20">
              Jelajahi Fitur
            </a>
            <a href="#scene" className="px-5 py-3 rounded-xl bg-white text-neutral-900 font-semibold ring-1 ring-neutral-200 hover:bg-neutral-50">
              Lihat 3D
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
