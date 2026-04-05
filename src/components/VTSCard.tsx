'use client'

interface Props {
  score: number
  size?: 'sm' | 'md'
}

function getColor(score: number) {
  if (score >= 75) return { bar: 'bg-green-500', text: 'text-green-700', ring: 'ring-green-200' }
  if (score >= 50) return { bar: 'bg-yellow-500', text: 'text-yellow-700', ring: 'ring-yellow-200' }
  return { bar: 'bg-red-500', text: 'text-red-700', ring: 'ring-red-200' }
}

export default function VTSCard({ score, size = 'md' }: Props) {
  const c = getColor(score)
  return (
    <div className="flex items-center gap-2">
      <div className={`h-1.5 rounded-full bg-gray-200 overflow-hidden ${size === 'sm' ? 'w-10' : 'w-14'}`}>
        <div
          className={`h-full rounded-full vts-fill ${c.bar}`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className={`text-[13px] font-bold min-w-[28px] ${c.text}`}>{score}</span>
    </div>
  )
}

export function VTSBadge({ score }: { score: number }) {
  const c = getColor(score)
  const label = score >= 75 ? 'Hijau' : score >= 50 ? 'Kuning' : 'Merah'
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${c.text} ${c.ring} ring-1 bg-white`}>
      {label}
    </span>
  )
}
