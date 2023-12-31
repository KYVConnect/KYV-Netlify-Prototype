import TopNavigation from "@components/TopNavigation"
import SideNavigation from "@components/SideNavigation"
import MainContent from "@components/MainContent"

export default function Home() {
  return (
    <body className="bg-zinc-800 text-zinc-200">
      <div className="flex flex-col border-2 border-green-500 h-screen w-screen">
        <TopNavigation />
        <div className="flex border-2 border-blue-500 flex-1">
          <SideNavigation />
          <MainContent />
        </div>
      </div>
    </body>
  )
}
