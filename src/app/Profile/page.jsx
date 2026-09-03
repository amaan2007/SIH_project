'use client';

import { useState } from 'react';
import { Menu, Pencil } from 'lucide-react';
import Sidebar from '@/components/Sidebar/page';
import ProfileHeader from '@/components/Profile/ProfileHeader';
import ProfileCard from '@/components/Profile/ProfileCard';
import PersonalInfo from '@/components/Profile/PersonalInfo';
import AboutMe from '@/components/Profile/AboutMe';
import InfoCards from '@/components/Profile/InfoCards';
import CareerPreferences from '@/components/Profile/CareerPreferences';

export default function ProfilePage() {
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
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-base font-bold text-slate-900">SmartCareer</span>
        </div>

        {/* Content */}
        <div className="w-full rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-4 sm:p-6 lg:p-8">
          <ProfileHeader />

          {/* Title Row */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">My Profile</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your personal info, skills and career preferences
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-gray-50">
              <Pencil className="h-4 w-4" />
              Edit Profile
            </button>
          </div>

          {/* Top Row: Profile Card + Personal Info + About/Completeness */}
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <ProfileCard />
            </div>

            <div className="flex flex-col gap-4 lg:col-span-2">
              <PersonalInfo />
              <AboutMe />
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="mt-4">
            <InfoCards />
          </div>

          {/* Career Preferences */}
          <div className="mt-4">
            <CareerPreferences />
          </div>
        </div>
      </main>
    </div>
  );
}