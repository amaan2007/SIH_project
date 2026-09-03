'use client';

import { User, ArrowRight } from 'lucide-react';

function CompletenessRing({ value }) {
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-20 w-20 shrink-0">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={radius} stroke="#E5E7EB" strokeWidth="6" fill="none" />
        <circle
          cx="40"
          cy="40"
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
        <span className="text-lg font-bold text-[#186A3B]">{value}%</span>
      </div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      
      {/* About Me */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:col-span-3">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-[#186A3B]" />
          <h3 className="text-base font-bold text-slate-900">About Me</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Passionate Frontend Developer with a strong foundation in building responsive
          and user-friendly web applications. Skilled in React, Next.js, JavaScript and
          modern web technologies. Eager to learn, build and contribute to impactful
          products.
        </p>
      </div>

      {/* Profile Completeness */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:col-span-2">
        <h3 className="text-sm font-semibold text-slate-900">Profile Completeness</h3>
        <div className="mt-3 flex items-center gap-4">
          <CompletenessRing value={80} />
          <div>
            <h4 className="text-sm font-bold text-slate-900">Great! Almost there</h4>
            <p className="mt-1 text-xs leading-relaxed text-gray-500">
              Complete a few more sections to get better job recommendations.
            </p>
            <button className="group mt-2 flex items-center gap-1 text-xs font-semibold text-[#186A3B] hover:text-[#145a32]">
              See How to Improve
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}