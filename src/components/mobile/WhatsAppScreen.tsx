'use client'
import { useState } from 'react'

export default function WhatsAppScreen() {
  const [replied, setReplied] = useState<1 | 2 | null>(null)

  const confirm = (choice: 1 | 2) => {
    if (replied !== null) return
    setReplied(choice)
  }

  return (
    <div className="flex flex-col h-full">
      {/* WA Header bar */}
      <div className="bg-[#128C7E] px-3.5 py-2.5 flex items-center gap-2.5 flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-base flex-shrink-0">🤖</div>
        <div>
          <div className="text-white text-[13px] font-semibold">SADAR Bot</div>
          <div className="text-white/70 text-[10px]">UD Sumber Rejeki · +62 812 xxxx 4521</div>
        </div>
        <div className="ml-auto flex gap-2 text-white/70 text-sm">
          <span>📞</span><span>⋮</span>
        </div>
      </div>

      {/* Chat body */}
      <div className="flex-1 wa-pattern overflow-y-auto p-3 space-y-2.5">
        {/* Timestamp */}
        <div className="flex justify-center">
          <span className="text-[10px] text-gray-500 bg-white/70 px-3 py-0.5 rounded-full">Hari ini, 09:14</span>
        </div>

        {/* Incoming message */}
        <div className="max-w-[88%] bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 shadow-sm">
          <p className="text-[12px] text-gray-900 leading-relaxed">
            🔔 <span className="font-bold text-[#128C7E]">SADAR System</span><br /><br />
            Konfirmasi pembelian:<br />
            📦 <strong>Telur Ayam Ras</strong> — 10 kg<br />
            💰 <strong>Rp 280.000</strong><br />
            🏪 SPPG Mawar Indah<br />
            📅 07 Apr 2026, 09:12<br /><br />
            Balas <strong>1</strong> jika <strong>BENAR</strong><br />
            Balas <strong>2</strong> jika <strong>SALAH</strong>
          </p>
          <div className="text-[9px] text-gray-400 mt-1 text-right">09:14 ✓</div>
        </div>

        {/* Reply bubble */}
        {replied !== null && (
          <div className="animate-slideUp flex justify-end">
            <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm">
              <p className="text-[13px] font-bold text-gray-800">{replied}</p>
              <div className="text-[9px] text-gray-400 mt-0.5 text-right">09:15 ✓✓</div>
            </div>
          </div>
        )}

        {/* Confirmation */}
        {replied === 1 && (
          <div className="animate-slideUp bg-green-50 border border-green-200 rounded-xl p-3 text-center">
            <div className="text-sm mb-1">✅</div>
            <div className="text-[11px] font-bold text-green-700">Transaksi TERVALIDASI DUA ARAH</div>
            <div className="text-[10px] text-green-600 mt-1">Dikunci pukul 09:15 · Hash: A3F2...9C1</div>
          </div>
        )}
        {replied === 2 && (
          <div className="animate-slideUp bg-red-50 border border-red-200 rounded-xl p-3 text-center">
            <div className="text-sm mb-1">🚨</div>
            <div className="text-[11px] font-bold text-red-700">Transaksi ditolak oleh supplier</div>
            <div className="text-[10px] text-red-600 mt-1">Red Flag otomatis dikirim ke Dashboard BGN</div>
          </div>
        )}
      </div>

      {/* Action buttons */}
      {replied === null ? (
        <div className="bg-white border-t border-gray-100 p-3 flex gap-2 flex-shrink-0">
          <button
            onClick={() => confirm(1)}
            className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-[#25D366] text-white hover:bg-[#1db954] active:scale-[0.97] transition-all"
          >
            1 — BENAR ✓
          </button>
          <button
            onClick={() => confirm(2)}
            className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-red-50 text-red-600 border border-red-300 hover:bg-red-100 active:scale-[0.97] transition-all"
          >
            2 — SALAH ✗
          </button>
        </div>
      ) : (
        <div className="bg-white border-t border-gray-100 p-3 flex-shrink-0">
          <div className="text-center text-[11px] text-gray-400">
            {replied === 1 ? '✅ Respons terkirim · Transaksi terkunci' : '⚠️ Transaksi dibatalkan · BGN diberitahu'}
          </div>
        </div>
      )}
    </div>
  )
}
