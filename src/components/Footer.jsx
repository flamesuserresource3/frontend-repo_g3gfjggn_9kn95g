export default function Footer() {
  return (
    <footer id="cta" className="relative border-t border-slate-200 bg-white/80">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600">© 2025 GeoMotion — Antarmuka geometri modern.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#home" className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-sm hover:bg-slate-50">Ke Atas</a>
            <a href="#features" className="rounded-lg bg-slate-900 px-3 py-1.5 font-semibold text-white shadow-sm">Mulai</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
