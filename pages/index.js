import TopNavigation from "@components/TopNavigation"
import SideNavigation from "@components/SideNavigation"

export default function Home() {
  return (
    <body className="bg-zinc-500 text-zinc-200">
      <div className="flex flex-col border-2 border-green-500 h-screen w-screen">
        <TopNavigation />
        <div className="flex border-2 border-blue-500 flex-1">
          <SideNavigation />
          HOME PAGE
        </div>
      </div>
    </body>
  )
}
