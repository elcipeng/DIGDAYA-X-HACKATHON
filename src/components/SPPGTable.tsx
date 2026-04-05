'use client'
import { useState } from 'react'
import { sppgData, SPPGEntry, VTSZone } from '@/data/mockData'
import AnomalyBadge from './AnomalyBadge'
import VTSCard from './VTSCard'

function ZonaBadge({ zona }: { zona: VTSZone }) {
  const cfg = {
    Hijau:  'bg-green-100 text-green-700',
    Kuning: 'bg-yellow-100 text-yellow-700',
    Merah:  'bg-red-100 text-red-700',
  }
  const action = {
    Hijau: 'Perpanjang',
    Kuning: 'Monitor',
    Merah: 'Putus Kontrak',
  }
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${cfg[zona]}`}>
      {action[zona]}
    </span>
  )
}

export default function SPPGTable() {
  const [search, setSearch] = useState('')
  const [zoneFilter, setZoneFilter] = useState('')
  const [kecFilter, setKecFilter] = useState('')
  const [sortKey, setSortKey] = useState<keyof SPPGEntry>('vts')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')

  const handleSort = (key: keyof SPPGEntry) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('desc') }
  }

  const filtered = sppgData
    .filter(d => {
      const q = search.toLowerCase()
      const matchSearch = !q || (d.name + d.head + d.kecamatan + d.id).toLowerCase().includes(q)
      const matchZone = !zoneFilter || d.zona === zoneFilter
      const matchKec = !kecFilter || d.kecamatan === kecFilter
      return matchSearch && matchZone && matchKec
    })
    .sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey]
      const cmp = typeof av === 'number' ? (av as number) - (b[sortKey] as number) : String(av).localeCompare(String(bv))
      return sortDir === 'asc' ? cmp : -cmp
    })

  const SortIcon = ({ k }: { k: keyof SPPGEntry }) => (
    <span className="ml-0.5 opacity-40 text-[9px]">
      {sortKey === k ? (sortDir === 'asc' ? '▲' : '▼') : '↕'}
    </span>
  )

  const thClass = "px-3 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap cursor-pointer select-none hover:text-gray-700 transition-colors"

  return (
    <div>
      {/* Filter Bar */}
      <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex gap-2 items-center mb-4">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
          <input
            className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg bg-gray-50 text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-400 transition-colors"
            placeholder="Cari SPPG, kepala, kecamatan..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select
          className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 bg-white outline-none cursor-pointer focus:border-blue-400"
          value={zoneFilter}
          onChange={e => setZoneFilter(e.target.value)}
        >
          <option value="">Semua Zona VTS</option>
          <option value="Hijau">Zona Hijau</option>
          <option value="Kuning">Zona Kuning</option>
          <option value="Merah">Zona Merah</option>
        </select>
        <select
          className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 bg-white outline-none cursor-pointer focus:border-blue-400"
          value={kecFilter}
          onChange={e => setKecFilter(e.target.value)}
        >
          <option value="">Semua Kecamatan</option>
          <option value="Cibinong">Kec. Cibinong</option>
          <option value="Gunung Putri">Kec. Gunung Putri</option>
        </select>
        <button className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors">
          📊 Ekspor
        </button>
        <button className="text-xs bg-[#1a5faa] text-white rounded-lg px-4 py-1.5 font-medium hover:bg-blue-800 transition-colors">
          + Tambah SPPG
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className={thClass} onClick={() => handleSort('name')}>
                  SPPG <SortIcon k="name" />
                </th>
                <th className={thClass} onClick={() => handleSort('head')}>Kepala SPPG</th>
                <th className={thClass} onClick={() => handleSort('kecamatan')}>Kecamatan</th>
                <th className={thClass} onClick={() => handleSort('siswa')}>
                  Siswa <SortIcon k="siswa" />
                </th>
                <th className={thClass} onClick={() => handleSort('vts')}>
                  VTS Score <SortIcon k="vts" />
                </th>
                <th className={thClass}>Anomali Harga</th>
                <th className={thClass}>Anomali Qty</th>
                <th className={thClass}>Cross-Layer</th>
                <th className={thClass}>Supplier OK</th>
                <th className={thClass}>Rekomendasi</th>
                <th className={thClass}>Update</th>
                <th className={thClass}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d, i) => (
                <tr
                  key={d.id}
                  className="border-b border-gray-100 hover:bg-blue-50/40 transition-colors cursor-pointer group"
                >
                  <td className="px-3 py-3 whitespace-nowrap">
                    <div className="font-semibold text-gray-900 text-[13px] group-hover:text-blue-700 transition-colors">{d.name}</div>
                    <div className="text-[10px] text-gray-400 font-mono">{d.id}</div>
                  </td>
                  <td className="px-3 py-3 text-gray-700">{d.head}</td>
                  <td className="px-3 py-3 text-gray-500">{d.kecamatan}</td>
                  <td className="px-3 py-3 text-gray-700 font-medium">{d.siswa}</td>
                  <td className="px-3 py-3">
                    <VTSCard score={d.vts} />
                  </td>
                  <td className="px-3 py-3"><AnomalyBadge level={d.anomHarga} /></td>
                  <td className="px-3 py-3"><AnomalyBadge level={d.anomQty} /></td>
                  <td className="px-3 py-3"><AnomalyBadge level={d.crossLayer} /></td>
                  <td className="px-3 py-3 text-gray-700 font-medium">{d.supplierOK}</td>
                  <td className="px-3 py-3"><ZonaBadge zona={d.zona} /></td>
                  <td className="px-3 py-3 text-[10px] text-gray-400">{d.lastUpdate}</td>
                  <td className="px-3 py-3">
                    <button className="text-[11px] border border-gray-200 rounded-lg px-2.5 py-1 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors font-medium">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-2.5 border-t border-gray-100 text-[11px] text-gray-400 flex items-center justify-between">
          <span>Menampilkan {filtered.length} dari {sppgData.length} SPPG</span>
          <span>Pilot Kab. Bogor · 2 Kecamatan</span>
        </div>
      </div>
    </div>
  )
}
