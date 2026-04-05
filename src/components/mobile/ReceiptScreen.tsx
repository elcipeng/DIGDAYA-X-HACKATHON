'use client'
import { useState } from 'react'

interface Props {
  onNext: () => void
}

export default function ReceiptScreen({ onNext }: Props) {
  const [ocrState, setOcrState] = useState<'idle' | 'scanning' | 'done'>('idle')
  const [showYellow, setShowYellow] = useState(false)

  const handleScan = () => {
    if (ocrState !== 'idle') return
    setOcrState('scanning')
    setTimeout(() => setOcrState('done'), 1000)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-[#0f172a] px-4 py-3.5 flex-shrink-0">
        <div className="text-white text-sm font-semibold">Input Transaksi</div>
        <div className="text-white/50 text-[10px] mt-0.5">SPPG Mawar Indah · 07 Apr 2026</div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-3.5 bg-[#f8f9ff] space-y-3">
        {/* Photo area */}
        <button
          onClick={handleScan}
          className="w-full bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-dashed border-blue-300 rounded-xl p-5 text-center transition-all hover:border-blue-500 active:scale-[0.98]"
        >
          <div className="text-3xl mb-1.5">
            {ocrState === 'idle' ? '📷' : ocrState === 'scanning' ? '⏳' : '✅'}
          </div>
          <div className="text-xs font-semibold text-blue-700">
            {ocrState === 'idle' ? 'Ketuk untuk foto nota' : ocrState === 'scanning' ? 'Memproses OCR...' : 'Berhasil diproses!'}
          </div>
        </button>

        {/* Yellow flag */}
        {showYellow && (
          <div className="animate-slideUp bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex gap-2.5">
            <span className="text-base">⚠️</span>
            <p className="text-[11px] text-yellow-800 font-medium leading-relaxed">
              OCR akurasi rendah. Diinput manual — ditandai <strong>Yellow Flag</strong> untuk audit acak BGN.
            </p>
          </div>
        )}

        {/* OCR Result */}
        {ocrState === 'done' && (
          <div className="animate-slideUp bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-blue-50 px-3 py-2 text-[10px] font-bold text-blue-700 uppercase tracking-wide flex items-center gap-1.5">
              <span>🤖</span> Hasil OCR Otomatis
            </div>
            {[
              ['Item', 'Telur Ayam Ras'],
              ['Kuantitas', '10 kg'],
              ['Harga/kg', 'Rp 28.000'],
              ['Total', 'Rp 280.000'],
              ['Toko', 'UD Sumber Rejeki'],
            ].map(([k, v], i, arr) => (
              <div key={k} className={`flex justify-between px-3 py-2 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <span className="text-xs text-gray-500">{k}</span>
                <span className="text-xs font-semibold text-gray-900">{v}</span>
              </div>
            ))}
          </div>
        )}

        {/* Fields */}
        {[
          { label: 'Item Pembelian', val: 'Telur Ayam Ras', ph: 'Nama barang' },
          { label: 'Kuantitas (kg)', val: ocrState === 'done' ? '10' : '', ph: 'Jumlah' },
          { label: 'Harga per Satuan', val: ocrState === 'done' ? 'Rp 28.000' : '', ph: 'Harga/kg' },
          { label: 'Supplier Terdaftar', val: 'UD Sumber Rejeki', ph: 'Pilih supplier' },
        ].map(f => (
          <div key={f.label}>
            <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1">{f.label}</div>
            <input
              defaultValue={f.val}
              placeholder={f.ph}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-xs text-gray-800 bg-white outline-none focus:border-blue-400 transition-colors"
            />
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="bg-white border-t border-gray-100 p-3 flex gap-2 flex-shrink-0">
        <button
          onClick={() => setShowYellow(true)}
          className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-[0.97] transition-all"
        >
          Input Manual
        </button>
        <button
          onClick={onNext}
          className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-[#0f172a] text-white hover:bg-gray-800 active:scale-[0.97] transition-all"
        >
          Kirim & Validasi →
        </button>
      </div>
    </div>
  )
}
