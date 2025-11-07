import Spline from '@splinetool/react-spline'

export default function Scene3D() {
  return (
    <section id="scene" className="relative h-[70vh] md:h-[80vh]">
      <div className="absolute inset-0 rounded-none overflow-hidden">
        <Spline scene="https://prod.spline.design/3b2uE1Q-PLACEHOLDER/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-10">
        <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-4 shadow-lg">
          <p className="text-sm text-neutral-700">
            Geser, klik, dan eksplorasi bentuk 3D langsung di kanvas.
          </p>
        </div>
      </div>
    </section>
  )
}
