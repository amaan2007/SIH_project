'use client';

import { ChevronDown, SlidersHorizontal } from 'lucide-react';

// Reusable dropdown pill
function FilterPill({ label, active = false }) {
  return (
    <button
      className={`flex items-center gap-1.5 rounded-xl border px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? 'border-[#186A3B] bg-[#E8F3EE] text-[#186A3B]'
          : 'border-gray-200 bg-white text-slate-900 hover:bg-gray-50'
      }`}
    >
      {label}
      <ChevronDown className="h-4 w-4" />
    </button>
  );
}

export default function JobFilters() {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <FilterPill label="All Matches" active />
      <FilterPill label="Experience Level" />
      <FilterPill label="Job Type" />
      <FilterPill label="Location" />
      <FilterPill label="Sort by: Best Match" />

      {/* Filters Button - Right aligned */}
      <button className="ml-auto flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-gray-50">
        <SlidersHorizontal className="h-4 w-4" />
        Filters
      </button>
    </div>
  );
}