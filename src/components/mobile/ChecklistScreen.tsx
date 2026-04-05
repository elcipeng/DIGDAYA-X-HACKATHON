'use client'
import { useState } from 'react'

const items = [
  { id: 'c1', label: 'Makanan datang tepat waktu?' },
  { id: 'c2', label: 'Jumlah porsi sesuai jumlah siswa?' },
  { id: 'c3', label: 'Tampilan sesuai foto standar BGN?' },
  { id: 'c4', label: 'Kondisi makanan baik (tidak basi)?' },
]

type CheckState = 'idle' | 'yes' | 'no'

export default function ChecklistScreen() {
  const [checks, setChecks] = useState<Record<string, CheckState>>({ c1: 'idle', c2: 'idle', c3: 'idle', c4: 'idle' })
  const [qrScanned, setQrScanned] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const toggle = (id: string) => {
    setChecks(prev => {
      const cur = prev[id]
      return { ...prev, [id]: cur === 'idle' || cur === 'no' ? 'yes' : 'no' }
    })
  }

  const vals = Object.values(checks)
  const answered = vals.filter(v => v !== 'idle').length
  const yesCount = vals.filter(v => v === 'yes').length
  const pct = answered === 4 ? Math.round((yesCount / 4) * 100) : null
  const porsiOk = checks.c2 === 'yes'

  const handleSubmit = () => {
    if (answered < 4) { alert('Lengkapi semua item checklist terlebih dahulu.'); return }
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-[#0f172a] px-4 py-3.5 flex-shrink-0">
        <div className="text-white text-sm font-semibold">Checklist Sekolah</div>
        <div className="text-white/50 text-[10px] mt-0.5">SDN Cibinong 01 · 200 Siswa</div>
      </div>

      <div className="flex-1 overflow-y-auto p-3.5 bg-[#f8f9ff] space-y-3">
        {/* QR Scan */}
        <button
          onClick={() => setQrScanned(true)}
          className={`w-full rounded-xl p-4 text-center border-2 border-dashed transition-all active:scale-[0.98]
            ${qrScanned
              ? 'bg-green-50 border-green-400'
              : 'bg-blue-50 border-blue-300 hover:border-blue-500'
            }`}
        >
          <div className="text-3xl mb-1">{qrScanned ? '✅' : '⬛'}</div>
          <div className={`text-xs font-semibold ${qrScanned ? 'text-green-700' : 'text-blue-700'}`}>
            {qrScanned
              ? 'QR Teridentifikasi: SPPG-009 · Batch #APR-007'
              : 'Ketuk untuk scan QR boks pengiriman'}
          </div>
        </button>

        {/* Checklist Items */}
        <div className="space-y-2">
          <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wide">
            Checklist Penerimaan Makanan
          </div>
          {items.map(item => {
            const state = checks[item.id]
            return (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all active:scale-[0.98]
                  ${state === 'yes' ? 'border-green-400 bg-green-50'
                    : state === 'no' ? 'border-red-400 bg-red-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
              >
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm flex-shrink-0 transition-all
                  ${state === 'yes' ? 'bg-green-500 border-green-500 text-white'
                    : state === 'no' ? 'bg-red-500 border-red-500 text-white'
                    : 'border-gray-300 text-transparent'
                  }`}>
                  {state === 'yes' ? '✓' : state === 'no' ? '✗' : '·'}
                </div>
                <span className={`text-xs font-medium flex-1
                  ${state === 'yes' ? 'text-green-800' : state === 'no' ? 'text-red-800' : 'text-gray-800'}`}>
                  {item.label}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full
                  ${state === 'yes' ? 'bg-green-100 text-green-700'
                    : state === 'no' ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-400'
                  }`}>
                  {state === 'yes' ? 'YA' : state === 'no' ? 'TIDAK' : '—'}
                </span>
              </button>
            )
          })}
        </div>

        {/* Score summary */}
        {pct !== null && (
          <div className="animate-slideUp bg-white rounded-xl border border-gray-200 p-3.5">
            <div className="flex justify-between items-center pb-2 mb-2 border-b border-gray-100">
              <span className="text-xs font-bold text-gray-800">Skor Hari Ini</span>
              <span className={`text-sm font-bold ${pct >= 75 ? 'text-green-600' : 'text-yellow-600'}`}>{pct}%</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-gray-500">Status deteksi</span>
                <span className={`font-semibold ${pct >= 75 ? 'text-green-600' : 'text-yellow-600'}`}>
                  {pct >= 75 ? 'Skor Baik' : 'Perlu Perhatian'}
                </span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-gray-500">Cross-layer flag</span>
                <span className={`font-semibold ${porsiOk ? 'text-green-600' : 'text-red-600'}`}>
                  {porsiOk ? 'Konsisten ✓' : '⚠ Porsi kurang — Cek hulu'}
                </span>
              </div>
            </div>
          </div>
        )}

        {submitted && (
          <div className="animate-slideUp bg-green-50 border border-green-200 rounded-xl p-3 text-center">
            <div className="text-sm mb-1">✅</div>
            <div className="text-[11px] font-bold text-green-700">Laporan terkirim ke BGN</div>
            <div className="text-[10px] text-green-600">Data dikompilasi ke VTS hari ini</div>
          </div>
        )}
      </div>

      <div className="bg-white border-t border-gray-100 p-3 flex-shrink-0">
        <button
          onClick={handleSubmit}
          className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#0f172a] text-white hover:bg-gray-800 active:scale-[0.97] transition-all"
        >
          Kirim Laporan ke BGN
        </button>
      </div>
    </div>
  )
}
