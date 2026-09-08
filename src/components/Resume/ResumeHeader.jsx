'use client';

import Image from 'next/image';
import { Search, Bell } from 'lucide-react';

export default function ResumeHeader() {
  return (
    <>
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

    <header className="flex w-full items-center justify-between gap-4">
      
      <div className="ml-auto flex items-center gap-3 sm:gap-4">
        <button className="relative rounded-full border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm hover:bg-gray-50">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
        </button>
        <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
          <Image
            src="/Avatar_hero.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="h-full w-full object-cover"
            unoptimized
          />
        </div>
      </div>
    </header>
  </>
  );
}