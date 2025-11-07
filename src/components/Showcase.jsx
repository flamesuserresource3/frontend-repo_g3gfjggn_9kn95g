import { motion } from 'framer-motion';
import { Cube, Shapes, Diamonds } from 'lucide-react';

const cards = [
  {
    title: 'Poligon Interaktif',
    icon: Cube,
    desc: 'Koleksi elemen geometri dengan animasi hover dan kedalaman.',
  },
  {
    title: 'Transisi Dinamis',
    icon: Shapes,
    desc: 'Perpindahan menu dan konten yang halus dan responsif.',
  },
  {
    title: 'Ruang 3D',
    icon: Diamonds,
    desc: 'Komposisi latar 3D yang menyatu dengan UI modern.',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Showcase Geometri
          </h2>
          <p className="mt-3 text-slate-600">
            Bentuk, pola, dan grid yang berpadu dengan micro-interactions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, icon: Icon, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="absolute -right-8 -top-8 size-24 rotate-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-3 text-white shadow-md">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
                <div className="mt-6 grid grid-cols-6 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 transition group-hover:scale-105"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
