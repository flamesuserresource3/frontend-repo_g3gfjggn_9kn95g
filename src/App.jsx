import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Scene3D from './components/Scene3D'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-indigo-200/60">
      <Navigation />

      <main className="pt-24">
        <Hero />
        <FeatureGrid />
        <Scene3D />

        <footer className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-neutral-500">© {new Date().getFullYear()} GeoModern. Semua hak dilindungi.</p>
              <div className="inline-flex items-center gap-2 text-sm text-neutral-500">
                <span>Karya bertema geometri, gaya modern, transisi dinamis, dan 3D.</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
