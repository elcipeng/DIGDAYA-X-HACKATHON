'use client'
import MobileScreens from './mobile/MobileScreens'

export default function MobileFrame() {
  return (
    <div className="w-[370px] flex-shrink-0 bg-[#e8eaf0] flex flex-col items-center pt-5 pb-4 px-4 overflow-hidden">
      {/* Label */}
      <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-medium">
        Mobile App Preview
      </div>

      {/* Phone shell */}
      <div className="w-[312px] bg-[#111827] rounded-[42px] p-2 phone-glow relative flex-shrink-0" style={{ height: '620px' }}>
        {/* Notch */}
        <div className="w-20 h-5 bg-[#111827] rounded-b-2xl mx-auto relative z-10 -mt-0 mb-0">
          <div className="absolute right-3 top-1.5 w-2 h-2 bg-[#1f2937] rounded-full border border-[#374151]" />
        </div>

        {/* Screen */}
        <div className="bg-[#f8f9ff] rounded-[34px] overflow-hidden flex flex-col"
          style={{ height: 'calc(100% - 20px)', marginTop: '-4px' }}>
          <MobileScreens />
        </div>

        {/* Home indicator */}
        <div className="flex justify-center mt-2">
          <div className="w-16 h-1 bg-white/30 rounded-full" />
        </div>
      </div>

      {/* Screen labels below phone */}
      <div className="mt-4 grid grid-cols-2 gap-2 w-full">
        {[
          { icon: '🧾', label: 'Smart OCR', sub: 'Fallback + Yellow Flag' },
          { icon: '💬', label: 'Validasi WA', sub: 'Konfirmasi 2 arah' },
          { icon: '✅', label: 'Checklist', sub: 'Triangulasi hilir' },
          { icon: '💰', label: 'Dana Termin', sub: 'Anti-penggelapan' },
        ].map(f => (
          <div key={f.label} className="bg-white rounded-xl border border-gray-200 px-3 py-2.5 flex items-start gap-2">
            <span className="text-base flex-shrink-0">{f.icon}</span>
            <div>
              <div className="text-[11px] font-semibold text-gray-800">{f.label}</div>
              <div className="text-[10px] text-gray-400">{f.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
