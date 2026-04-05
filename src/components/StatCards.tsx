'use client'
import { statsData } from '@/data/mockData'

const cards = [
  { label: 'Total SPPG Aktif', value: '50', delta: '▲ 8 dari bulan lalu', deltaUp: true, accent: 'bg-blue-500', valueColor: 'text-blue-700' },
  { label: 'VTS Zona Hijau', value: '31', delta: '62% dari total', deltaUp: true, accent: 'bg-green-500', valueColor: 'text-green-700' },
  { label: 'Dalam Pemantauan', value: '13', delta: '▲ 3 naik dari hijau', deltaUp: false, accent: 'bg-yellow-500', valueColor: 'text-yellow-700' },
  { label: 'Rekomendasi Putus', value: '6', delta: 'Perlu tindakan BGN', deltaUp: false, accent: 'bg-red-500', valueColor: 'text-red-700' },
]

export default function StatCards() {
  return (
    <div className="grid grid-cols-4 gap-3.5 mb-5">
      {cards.map((c, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-200 p-4 relative overflow-hidden hover:shadow-md transition-shadow duration-200 group cursor-pointer"
        >
          <div className="text-[11px] text-gray-500 uppercase tracking-wide mb-2 font-medium">{c.label}</div>
          <div className={`text-[26px] font-bold leading-none mb-1 ${c.valueColor}`}>{c.value}</div>
          <div className={`text-[11px] flex items-center gap-1 ${c.deltaUp ? 'text-green-600' : 'text-red-500'}`}>
            {c.delta}
          </div>
          <div className={`absolute bottom-0 left-0 right-0 h-[3px] ${c.accent}`} />
        </div>
      ))}
    </div>
  )
}
