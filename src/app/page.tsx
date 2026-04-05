import Sidebar from '@/components/Sidebar'
import DesktopDashboard from '@/components/DesktopDashboard'
import MobileFrame from '@/components/MobileFrame'

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f0f2f7]">
      <Sidebar />
      <DesktopDashboard />
      <MobileFrame />
    </div>
  )
}
