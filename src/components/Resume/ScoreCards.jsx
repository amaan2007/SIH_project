'use client';

import { Briefcase } from 'lucide-react';

// Circular progress ring
function CircularProgress({ value }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-32 w-32">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#186A3B"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-slate-900">{value}</span>
        <span className="text-xs font-medium text-gray-400">/100</span>
      </div>
    </div>
  );
}

export default function ScoreCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      
      {/* Career Readiness */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Career Readiness Score</h3>
        <div className="mt-4 flex justify-center">
          <CircularProgress value={78} />
        </div>
        <p className="mt-4 text-center text-sm font-medium text-gray-600">
          Good Progress! 👍
        </p>
      </div>

      {/* Skill Match */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Skill Match Score</h3>
        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-5xl font-bold text-[#186A3B]">86</span>
          <span className="text-2xl font-medium text-[#186A3B]">%</span>
        </div>
        <span className="mt-3 inline-block rounded-full bg-[#E8F3EE] px-3 py-1 text-xs font-semibold text-[#186A3B]">
          Strong Match
        </span>
        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-[#186A3B]"
            style={{ width: '86%' }}
          />
        </div>
        <p className="mt-1.5 text-right text-xs text-gray-500">86%</p>
      </div>

      {/* Experience Level */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Experience Level</h3>
        <div className="mt-4 flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F3EE]">
            <Briefcase className="h-7 w-7 text-[#186A3B]" />
          </div>
          <h4 className="mt-3 text-xl font-bold text-slate-900">Strong</h4>
          <p className="mt-1 text-sm font-medium text-gray-600">3+ Years</p>
          <p className="mt-2 text-center text-xs text-gray-500">
            Well-qualified for mid-level roles
          </p>
        </div>
      </div>
    </div>
  );
}