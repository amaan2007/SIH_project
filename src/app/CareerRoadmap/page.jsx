'use client';

import { useState } from 'react';
import { Menu, Pencil, Download } from 'lucide-react';
import Sidebar from '@/components/Sidebar/page'; // Adjust path if needed
import ProfileHeader from '@/components/Profile/ProfileHeader';
import GoalHeader from '@/components/Roadmap/GoalHeader';
import LearningPlan from '@/components/Roadmap/LearningPlan';
import StudyResources from '@/components/Roadmap/StudyResources';
import RoadmapSidebar from '@/components/Roadmap/RoadmapSidebar';
import AiCoachBanner from '@/components/Roadmap/AiCoachBanner';

export default function CareerRoadmapPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#FAFBFA]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="relative flex-1 h-full flex-col overflow-y-auto p-2 lg:p-4">
        {/* Mobile Top Bar */}
        <div className="mb-2 flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-base font-bold text-slate-900">SmartCareer</span>
        </div>

        {/* Content Wrapper */}
        <div className="flex min-h-full flex-col w-full rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-6 lg:p-8">
          <ProfileHeader />

          {/* Page Title & Actions */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Career Roadmap</h1>
              <p className="mt-1 text-sm text-gray-500">
                Your personalized plan to become a Frontend Developer
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-gray-50">
                <Pencil className="h-4 w-4" />
                Edit Goal
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-[#186A3B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#145a32]">
                <Download className="h-4 w-4" />
                Download Roadmap
              </button>
            </div>
          </div>

          {/* Top Status Bar */}
          <div className="mt-6">
            <GoalHeader />
          </div>

          {/* Main 3-Column Grid */}
          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12 flex-1">
            {/* Left: Learning Plan */}
            <div className="xl:col-span-5">
              <LearningPlan />
            </div>

            {/* Middle: Resources */}
            <div className="xl:col-span-4">
              <StudyResources />
            </div>

            {/* Right: Sidebar Widgets */}
            <div className="xl:col-span-3">
              <RoadmapSidebar />
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-6 mt-auto pt-6">
            <AiCoachBanner />
          </div>
        </div>
      </main>
    </div>
  );
}