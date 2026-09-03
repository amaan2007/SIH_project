'use client';

import { useState } from 'react';
import { Menu, Download, Sparkles } from 'lucide-react';
import Sidebar from '@/components/Sidebar/page'; // Adjust path if needed
import ProfileHeader from '@/components/Profile/ProfileHeader'; // Reusing header
import SkillStats from '@/components/SkillGap/SkillStats';
import SkillBreakdown from '@/components/SkillGap/SkillBreakdown';
import TopSkills from '@/components/SkillGap/TopSkills';
import CareerMatches from '@/components/SkillGap/CareerMatches';
import RecommendedCourses from '@/components/SkillGap/RecommendedCourses';

export default function SkillGapPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#FAFBFA]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="relative flex-1 h-full overflow-y-auto p-2 lg:p-4">
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

        {/* Main Content Area */}
        <div className="w-full rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-6 lg:p-8">
          <ProfileHeader />

          {/* Page Header */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Skill Gap Analysis</h1>
                <Sparkles className="h-5 w-5 text-[#186A3B]" />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Compare your current skills with job market requirements and bridge the gap.
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-gray-50">
              <Download className="h-4 w-4" />
              Download Report
            </button>
          </div>

          {/* Stats Row */}
          <div className="mt-6">
            <SkillStats />
          </div>

          {/* Middle Grid */}
          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
            {/* Left: Skill Breakdown (Spans 2 cols on extra large screens) */}
            <div className="xl:col-span-2">
              <SkillBreakdown />
            </div>

            {/* Right: Side Cards */}
            <div className="flex flex-col gap-6 xl:col-span-1">
              <TopSkills />
              <CareerMatches />
            </div>
          </div>

          {/* Bottom Courses */}
          <div className="mt-8">
            <RecommendedCourses />
          </div>
        </div>
      </main>
    </div>
  );
}