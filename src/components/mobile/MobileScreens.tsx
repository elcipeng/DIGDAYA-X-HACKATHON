'use client'
import { useState } from 'react'
import ReceiptScreen from './ReceiptScreen'
import WhatsAppScreen from './WhatsAppScreen'
import ChecklistScreen from './ChecklistScreen'
import FundScreen from './FundScreen'

const tabs = [
  { id: 'receipt', label: 'Transaksi', icon: '🧾' },
  { id: 'whatsapp', label: 'Supplier', icon: '💬' },
  { id: 'checklist', label: 'Checklist', icon: '✅' },
  { id: 'fund', label: 'Dana', icon: '💰' },
]

export default function MobileScreens() {
  const [active, setActive] = useState('receipt')

  return (
    <div className="flex flex-col h-full">
      {/* Status bar (fake iPhone) */}
      <div className="bg-[#0f172a] px-5 py-1.5 flex justify-between items-center flex-shrink-0">
        <span className="text-white text-[10px] font-semibold">09:41</span>
        <div className="flex items-center gap-1 text-white text-[10px]">
          <span>▊▊▊</span>
          <span>WiFi</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Screen content */}
      <div className="flex-1 overflow-hidden">
        {active === 'receipt' && <ReceiptScreen onNext={() => setActive('whatsapp')} />}
        {active === 'whatsapp' && <WhatsAppScreen />}
        {active === 'checklist' && <ChecklistScreen />}
        {active === 'fund' && <FundScreen />}
      </div>

      {/* Bottom tab bar */}
      <div className="bg-white border-t border-gray-200 flex flex-shrink-0 pb-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex-1 flex flex-col items-center py-2 gap-0.5 transition-all
              ${active === tab.id ? 'text-[#1a5faa]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <span className="text-base">{tab.icon}</span>
            <span className={`text-[9px] font-semibold uppercase tracking-wide
              ${active === tab.id ? 'text-[#1a5faa]' : 'text-gray-400'}`}>
              {tab.label}
            </span>
            {active === tab.id && (
              <span className="w-4 h-0.5 bg-[#1a5faa] rounded-full mt-0.5" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
