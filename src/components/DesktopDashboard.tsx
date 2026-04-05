'use client'
import StatCards from './StatCards'
import RecommendationPanel from './RecommendationPanel'
import SPPGTable from './SPPGTable'

export default function DesktopDashboard() {
  return (
    <main className="flex-1 overflow-auto p-6">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Dashboard Monitoring MBG</h1>
          <p className="text-xs text-gray-500 mt-0.5">Kab. Bogor · Pilot 2 Kecamatan · 50 SPPG Aktif</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-red-50 text-red-600 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse-dot" />
            LIVE
          </div>
          <select className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 bg-white outline-none">
            <option>April 2026</option>
            <option>Maret 2026</option>
          </select>
        </div>
      </div>

      <StatCards />
      <RecommendationPanel />
      <div className="mb-2">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Data SPPG — Vendor Trust Score</h2>
            <p className="text-xs text-gray-500 mt-0.5">Multi-layer anomaly detection: harga · kuantitas · cross-layer</p>
          </div>
        </div>
        <SPPGTable />
      </div>
    </main>
  )
}
