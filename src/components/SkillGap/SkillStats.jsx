'use client';

import { Shield, BookOpen, Target, Info } from 'lucide-react';

function CircularProgress({ value }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-16 w-16">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={radius} stroke="#E5E7EB" strokeWidth="6" fill="none" />
        <circle
          cx="36"
          cy="36"
          r={radius}
          stroke="#186A3B"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-slate-900">{value}%</span>
      </div>
    </div>
  );
}

export default function SkillStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Card 1 */}
      <div className="flex items-center justify-between rounded-2xl border border-[#186A3B]/20 bg-[#F4FBF7] p-5 shadow-sm">
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-xs font-semibold text-gray-600">Overall Match Score</h3>
            <Info className="h-3 w-3 text-gray-400" />
          </div>
          <p className="mt-1 text-3xl font-bold text-slate-900">72%</p>
          <p className="mt-1 text-xs font-medium text-[#186A3B]">Good Match</p>
        </div>
        <CircularProgress value={72} />
      </div>

      {/* Card 2 */}
      <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-xs font-semibold text-gray-600">Skills You Have</h3>
            <Info className="h-3 w-3 text-gray-400" />
          </div>
          <p className="mt-1 text-3xl font-bold text-slate-900">28</p>
          <p className="mt-1 text-xs font-medium text-gray-500">Strong Skills</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
          <Shield className="h-6 w-6 text-purple-600" />
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-xs font-semibold text-gray-600">Skills You Need</h3>
            <Info className="h-3 w-3 text-gray-400" />
          </div>
          <p className="mt-1 text-3xl font-bold text-slate-900">12</p>
          <p className="mt-1 text-xs font-medium text-gray-500">Skills to Learn</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
          <BookOpen className="h-6 w-6 text-orange-600" />
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-xs font-semibold text-gray-600">High Priority Gaps</h3>
            <Info className="h-3 w-3 text-gray-400" />
          </div>
          <p className="mt-1 text-3xl font-bold text-slate-900">5</p>
          <p className="mt-1 text-xs font-medium text-gray-500">Focus Areas</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
          <Target className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </div>
  );
}