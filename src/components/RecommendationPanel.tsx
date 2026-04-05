'use client'

const recs = [
  {
    type: 'safe',
    icon: '✅',
    iconBg: 'bg-green-50',
    border: 'border-l-green-400',
    title: 'Perpanjang Kontrak',
    badge: 'VTS > 75',
    badgeColor: 'bg-green-100 text-green-700',
    count: 31,
    countColor: 'text-green-700',
    desc: 'Performa konsisten. Tidak ada anomali signifikan terdeteksi dalam 30 hari terakhir.',
  },
  {
    type: 'warning',
    icon: '⚠️',
    iconBg: 'bg-yellow-50',
    border: 'border-l-yellow-400',
    title: 'Monitor Ketat',
    badge: 'VTS 50–75',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    count: 13,
    countColor: 'text-yellow-700',
    desc: 'Terdapat anomali terisolasi. Diperlukan verifikasi lapangan dalam 7 hari kerja.',
  },
  {
    type: 'danger',
    icon: '🚨',
    iconBg: 'bg-red-50',
    border: 'border-l-red-400',
    title: 'Putus Kontrak',
    badge: 'VTS < 50',
    badgeColor: 'bg-red-100 text-red-700',
    count: 6,
    countColor: 'text-red-700',
    desc: 'Anomali lintas-layer konsisten. Rekomendasi pemutusan kontrak segera kepada BGN.',
  },
]

export default function RecommendationPanel() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Panel Rekomendasi Kontrak</h2>
          <p className="text-xs text-gray-500 mt-0.5">Berbasis kalkulasi VTS real-time</p>
        </div>
        <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">Lihat semua →</button>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-5">
        {recs.map((r, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl border border-gray-200 border-l-4 ${r.border} p-4 hover:shadow-md transition-shadow cursor-pointer`}
          >
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className={`w-8 h-8 rounded-lg ${r.iconBg} flex items-center justify-center text-sm flex-shrink-0`}>
                {r.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-900">{r.title}</div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase mt-0.5 inline-block ${r.badgeColor}`}>
                  {r.badge}
                </span>
              </div>
            </div>
            <div className={`text-2xl font-bold mb-1 ${r.countColor}`}>{r.count} SPPG</div>
            <p className="text-[11px] text-gray-500 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
