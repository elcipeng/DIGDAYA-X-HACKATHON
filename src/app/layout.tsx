import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SADAR — Closed-Loop MBG Audit System',
  description: 'Digitalisasi Pengawasan Anggaran MBG — PIDI DIGDAYA X HACKATHON 2026',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
