'use client'

const navItems = [
  { label: 'Overview', icon: '▦', active: true, section: '' },
  { label: 'Analitik', icon: '◈', active: false, section: '' },
  { label: 'Anomali', icon: '⚠', active: false, section: 'Pengawasan' },
  { label: 'Data SPPG', icon: '◉', active: false, section: '' },
  { label: 'Supplier', icon: '◎', active: false, section: '' },
  { label: 'Laporan', icon: '▤', active: false, section: '' },
  { label: 'Pengaturan', icon: '⊙', active: false, section: 'Sistem' },
]

export default function Sidebar() {
  return (
    <aside className="w-[220px] bg-[#0f172a] flex-shrink-0 flex flex-col select-none">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="text-white font-bold text-xl tracking-tight">⬡ SADAR</div>
        <div className="text-white/30 text-[10px] uppercase tracking-widest mt-0.5">Audit System v1.0</div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3">
        {navItems.map((item, i) => (
          <div key={i}>
            {item.section && (
              <div className="px-5 pt-4 pb-1.5 text-[10px] text-white/25 uppercase tracking-widest font-medium">
                {item.section}
              </div>
            )}
            <button
              className={`w-full flex items-center gap-2.5 px-5 py-2.5 text-sm transition-all duration-150 border-l-2 text-left
                ${item.active
                  ? 'text-white bg-white/10 border-[#378add]'
                  : 'text-white/50 border-transparent hover:text-white/90 hover:bg-white/5'
                }`}
            >
              <span className="text-base opacity-70">{item.icon}</span>
              {item.label}
            </button>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#378add] to-[#1a5faa] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
            BN
          </div>
          <div>
            <div className="text-white text-xs font-medium">Admin BGN</div>
            <div className="text-white/40 text-[10px]">Pusat Monitoring</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
