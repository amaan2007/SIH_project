'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '@/components/Sidebar/page'; // adjust path if needed
import Herosection from '@/components/Home/Herosection';
import ResumeSummary from '@/components/Home/ResumeSummary';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#FAFBFA]">
      
      {/* Sidebar (drawer on mobile, fixed on desktop) */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main className="relative flex-1 h-full overflow-y-auto p-2 lg:p-4">
        
        {/* MOBILE TOP BAR with Hamburger */}
        <div className="mb-2 flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-slate-900">SmartCareer</span>
          </div>
        </div>

        {/* Hero */}
        <div className="relative h-[calc(100vh-4.5rem)] min-h-[560px] w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 lg:h-[calc(100vh-2rem)]">
          <Herosection />
        </div>

        {/* Resume Summary */}
        <div className="mt-4">
          <ResumeSummary />
        </div>
      </main>
    </div>
  );
}