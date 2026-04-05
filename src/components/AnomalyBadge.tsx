'use client'
import { AnomalyLevel } from '@/data/mockData'

interface Props {
  level: AnomalyLevel
  showLabel?: boolean
}

const config = {
  OK:     { bg: 'bg-green-50',  text: 'text-green-700',  dot: 'bg-green-500',  label: 'OK' },
  Yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', dot: 'bg-yellow-500', label: 'Flag' },
  Red:    { bg: 'bg-red-50',    text: 'text-red-700',    dot: 'bg-red-500',    label: 'Red' },
}

export default function AnomalyBadge({ level, showLabel = true }: Props) {
  const c = config[level]
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${c.bg} ${c.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {showLabel && c.label}
    </span>
  )
}
