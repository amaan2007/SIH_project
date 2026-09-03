'use client';

import { Target, BarChart2, Medal } from 'lucide-react';

export default function GoalHeader() {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (28 / 100) * circumference;

  return (
    <div className="flex flex-col justify-between gap-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:flex-row md:items-center">
      
      {/* Goal */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F3EE]">
          <Target className="h-6 w-6 text-[#186A3B]" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Your Goal</p>
          <p className="text-base font-bold text-slate-900">Frontend Developer</p>
          <button className="text-xs font-semibold text-[#186A3B] hover:underline">Change Goal</button>
        </div>
      </div>

      {/* Dividers hidden on mobile */}
      <div className="hidden h-10 w-px bg-gray-100 md:block" />

      {/* Current Level */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F3EE]/50">
          <BarChart2 className="h-6 w-6 text-[#186A3B]" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Current Level</p>
          <p className="text-base font-bold text-slate-900">Beginner</p>
        </div>
      </div>

      <div className="hidden h-10 w-px bg-gray-100 md:block" />

      {/* Target Level */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
          <Medal className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Target Level</p>
          <p className="text-base font-bold text-slate-900">Job Ready</p>
        </div>
      </div>

      <div className="hidden h-10 w-px bg-gray-100 md:block" />

      {/* Progress Ring */}
      <div className="flex items-center gap-4 pr-4">
        <div className="relative h-14 w-14 shrink-0">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r={radius} stroke="#E5E7EB" strokeWidth="4" fill="none" />
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="#186A3B"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-slate-900">28%</span>
          </div>
        </div>
        <p className="text-xs font-bold text-slate-900">Overall Progress</p>
      </div>

    </div>
  );
}