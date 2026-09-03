'use client';

import { Search, Bell, ChevronDown } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <header className="flex w-full items-center justify-between gap-4">
      {/* Search */}
      <div className="relative hidden w-full max-w-md sm:block lg:max-w-lg">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for jobs, skills, companies..."
          className="block w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm placeholder-gray-500 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      <div className="ml-auto flex items-center gap-3 sm:gap-4">
        {/* Notification */}
        <button className="relative rounded-full border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm hover:bg-gray-50">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            2
          </span>
        </button>

        {/* User */}
        <button className="flex items-center gap-2 rounded-full transition-colors hover:bg-gray-50 pr-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#186A3B] text-sm font-bold text-white">
            XY
          </div>
          <span className="hidden text-sm font-semibold text-slate-900 sm:block">XYZ</span>
          <ChevronDown className="hidden h-4 w-4 text-gray-500 sm:block" />
        </button>
      </div>
    </header>
  );
}