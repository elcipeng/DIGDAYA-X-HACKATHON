'use client'
import { useState } from 'react'

const history = [
  { label: 'Termin Maret', amount: 'Rp 44.200.000', date: 'Dikonfirmasi 3 Mar', status: 'ok' },
  { label: 'Termin Februari', amount: 'Rp 43.800.000', date: 'Dikonfirmasi 2 Feb', status: 'ok' },
  { label: 'Termin Januari', amount: 'Rp 43.500.000', date: 'Terlambat 5 hari → Eskalasi BGN', status: 'late' },
]

export default function FundScreen() {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="flex flex-col h-full">
      <div className="bg-[#0f172a] px-4 py-3.5 flex-shrink-0">
        <div className="text-white text-sm font-semibold">Konfirmasi Dana</div>
        <div className="text-white/50 text-[10px] mt-0.5">Termin April 2026</div>
      </div>

      <div className="flex-1 overflow-y-auto p-3.5 bg-[#f8f9ff] space-y-3">
        {/* Fund card */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-[11px] text-gray-400 text-center mb-1">Dana Termin Diterima</div>
          <div className="text-[28px] font-bold text-gray-900 text-center font-mono my-2">
            Rp 45.500.000
          </div>
          <div className="text-[11px] text-gray-400 text-center mb-4">dari Yayasan Karya Bangsa</div>
          <div className="space-y-2">
            {[
              ['Periode', '1–30 April 2026'],
              ['Rekening', 'BRI ****8821'],
              ['Tenggat Konfirmasi', '08 Apr 2026'],
            ].map(([k, v], i) => (
              <div key={k} className="flex justify-between py-1.5 border-b border-gray-100 text-xs">
                <span className="text-gray-500">{k}</span>
                <span className={`font-semibold ${i === 2 ? 'text-yellow-600' : 'text-gray-800'}`}>{v}</span>
              </div>
            ))}
            <div className="flex justify-between py-1.5 text-xs">
              <span className="text-gray-500">Status BGN</span>
              <span className={`font-bold ${confirmed ? 'text-green-600' : 'text-yellow-600'}`}>
                {confirmed ? 'Dikonfirmasi ✓' : 'Menunggu Konfirmasi'}
              </span>
            </div>
          </div>
        </div>

        {/* Confirm button */}
        <button
          onClick={() => setConfirmed(true)}
          disabled={confirmed}
          className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97]
            ${confirmed
              ? 'bg-green-500 text-white cursor-default'
              : 'bg-[#0f172a] text-white hover:bg-gray-800'
            }`}
        >
          {confirmed ? '✓ Dana Sudah Dikonfirmasi' : '✓ Konfirmasi Dana Diterima'}
        </button>
        <p className="text-[10px] text-gray-400 text-center -mt-1">
          Konfirmasi otomatis dilaporkan ke Dashboard BGN
        </p>

        {confirmed && (
          <div className="animate-slideUp bg-green-50 border border-green-200 rounded-xl p-3 text-center">
            <div className="text-[11px] font-bold text-green-700">✅ Laporan terkirim ke BGN</div>
            <div className="text-[10px] text-green-600 mt-0.5">07 Apr 2026 · 09:32 WIB · Tercatat di sistem</div>
          </div>
        )}

        {/* History */}
        <div>
          <div className="text-xs font-bold text-gray-700 mb-2.5">Riwayat Termin</div>
          <div className="space-y-0">
            {history.map((h, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-2.5 h-2.5 rounded-full mt-0.5 flex-shrink-0 ${h.status === 'ok' ? 'bg-green-500' : 'bg-red-400'}`} />
                  {i < history.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1" />}
                </div>
                <div className="pb-4">
                  <div className="text-xs font-semibold text-gray-800">{h.label}</div>
                  <div className="text-[10px] text-gray-500">{h.amount}</div>
                  <div className={`text-[10px] ${h.status === 'late' ? 'text-red-500 font-medium' : 'text-gray-400'}`}>
                    {h.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
