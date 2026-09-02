// Adjust path if needed
import Herosection from "@/components/Dashboard/Herosection"; // Adjust path if needed
import Sidebar from "@/components/Sidebar/page";

export default function Home() {
  return (
    // Main wrapper with gray background for the app feel
    <div className="flex h-screen w-full bg-[#FAFBFA] overflow-hidden">
      
      {/* Sidebar - Hidden on mobile, visible on lg screens */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative h-full p-2 lg:p-4 pl-0">
        {/* We wrap the hero section in a rounded container to match the UI gap */}
        <div className="h-full w-full overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 relative">
          <Herosection />
        </div>
      </main>
      
    </div>
  );
}