import { motion } from 'framer-motion';
import { Sparkles, SlidersHorizontal, Move3D } from 'lucide-react';

const features = [
  {
    title: 'Modern Aesthetic',
    icon: Sparkles,
    desc: 'Tipografi rapi, palet gradasi, dan komponen berlapis.',
  },
  {
    title: 'Dynamic Menu',
    icon: SlidersHorizontal,
    desc: 'Transisi navigasi lembut di desktop dan mobile.',
  },
  {
    title: 'Live 3D',
    icon: Move3D,
    desc: 'Integrasi adegan 3D interaktif yang responsif.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ title, icon: Icon, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-3 text-white shadow-md">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
