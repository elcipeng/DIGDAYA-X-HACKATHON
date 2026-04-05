export type AnomalyLevel = 'OK' | 'Yellow' | 'Red'
export type VTSZone = 'Hijau' | 'Kuning' | 'Merah'

export interface SPPGEntry {
  id: string
  name: string
  head: string
  kecamatan: string
  siswa: number
  vts: number
  anomHarga: AnomalyLevel
  anomQty: AnomalyLevel
  crossLayer: AnomalyLevel
  supplierOK: string
  zona: VTSZone
  lastUpdate: string
}

export const sppgData: SPPGEntry[] = [
  { id: 'SPPG-001', name: 'SPPG Mawar Indah', head: 'Ibu Sari Dewanti', kecamatan: 'Cibinong', siswa: 200, vts: 87, anomHarga: 'OK', anomQty: 'OK', crossLayer: 'OK', supplierOK: '100%', zona: 'Hijau', lastUpdate: '2 menit lalu' },
  { id: 'SPPG-002', name: 'SPPG Bintang Pagi', head: 'Pak Doni Hermawan', kecamatan: 'Cibinong', siswa: 185, vts: 72, anomHarga: 'Yellow', anomQty: 'OK', crossLayer: 'OK', supplierOK: '92%', zona: 'Kuning', lastUpdate: '5 menit lalu' },
  { id: 'SPPG-003', name: 'SPPG Harapan Baru', head: 'Ibu Wulandari', kecamatan: 'Gunung Putri', siswa: 220, vts: 31, anomHarga: 'Red', anomQty: 'Red', crossLayer: 'Red', supplierOK: '54%', zona: 'Merah', lastUpdate: '1 menit lalu' },
  { id: 'SPPG-004', name: 'SPPG Ceria Abadi', head: 'Pak Faisal Akbar', kecamatan: 'Gunung Putri', siswa: 150, vts: 91, anomHarga: 'OK', anomQty: 'OK', crossLayer: 'OK', supplierOK: '100%', zona: 'Hijau', lastUpdate: '10 menit lalu' },
  { id: 'SPPG-005', name: 'SPPG Tunas Bangsa', head: 'Ibu Rina Susanti', kecamatan: 'Cibinong', siswa: 175, vts: 55, anomHarga: 'Yellow', anomQty: 'Yellow', crossLayer: 'OK', supplierOK: '78%', zona: 'Kuning', lastUpdate: '3 menit lalu' },
  { id: 'SPPG-006', name: 'SPPG Maju Bersama', head: 'Pak Hendra Wijaya', kecamatan: 'Gunung Putri', siswa: 210, vts: 42, anomHarga: 'Red', anomQty: 'Yellow', crossLayer: 'Yellow', supplierOK: '61%', zona: 'Merah', lastUpdate: '7 menit lalu' },
  { id: 'SPPG-007', name: 'SPPG Cahaya Ilmu', head: 'Ibu Dewi Rahayu', kecamatan: 'Cibinong', siswa: 190, vts: 83, anomHarga: 'OK', anomQty: 'OK', crossLayer: 'OK', supplierOK: '97%', zona: 'Hijau', lastUpdate: '4 menit lalu' },
  { id: 'SPPG-008', name: 'SPPG Pelangi Nusantara', head: 'Pak Agus Pratama', kecamatan: 'Gunung Putri', siswa: 230, vts: 28, anomHarga: 'Red', anomQty: 'Red', crossLayer: 'Red', supplierOK: '41%', zona: 'Merah', lastUpdate: '1 menit lalu' },
  { id: 'SPPG-009', name: 'SPPG Karya Mandiri', head: 'Ibu Fitri Handayani', kecamatan: 'Cibinong', siswa: 160, vts: 78, anomHarga: 'OK', anomQty: 'OK', crossLayer: 'Yellow', supplierOK: '88%', zona: 'Hijau', lastUpdate: '6 menit lalu' },
  { id: 'SPPG-010', name: 'SPPG Generasi Emas', head: 'Pak Bambang Santoso', kecamatan: 'Gunung Putri', siswa: 195, vts: 63, anomHarga: 'Yellow', anomQty: 'OK', crossLayer: 'OK', supplierOK: '85%', zona: 'Kuning', lastUpdate: '8 menit lalu' },
  { id: 'SPPG-011', name: 'SPPG Sinar Nusa', head: 'Ibu Hani Kusuma', kecamatan: 'Cibinong', siswa: 178, vts: 76, anomHarga: 'OK', anomQty: 'OK', crossLayer: 'OK', supplierOK: '95%', zona: 'Hijau', lastUpdate: '12 menit lalu' },
  { id: 'SPPG-012', name: 'SPPG Mekar Jaya', head: 'Pak Rudi Santoso', kecamatan: 'Gunung Putri', siswa: 202, vts: 38, anomHarga: 'Red', anomQty: 'Yellow', crossLayer: 'Red', supplierOK: '52%', zona: 'Merah', lastUpdate: '2 menit lalu' },
]

export const statsData = {
  totalSPPG: 50,
  zonaHijau: 31,
  zonaKuning: 13,
  zonaMerah: 6,
  avgVTS: 68,
  anomaliHariIni: 14,
}
