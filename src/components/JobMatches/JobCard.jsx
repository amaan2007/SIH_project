'use client';

import { useState } from 'react';
import {
  MapPin,
  Briefcase,
  Clock,
  BadgeCheck,
  CheckCircle2,
  Bookmark,
  ArrowRight,
} from 'lucide-react';

// Circular match progress
function MatchRing({ value }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-24 w-24 shrink-0">
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
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-slate-900">{value}%</span>
        <span className="text-[10px] font-medium text-gray-500">Match</span>
      </div>
    </div>
  );
}

export default function JobCard({ job }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center">
        
        {/* LEFT: Company Info */}
        <div className="lg:col-span-3">
          <div className="flex items-start gap-3">
            {/* Logo */}
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-100 shadow-sm ${job.logoColor}`}
            >
              <span className={`text-xl font-bold ${job.logoText}`}>{job.logo}</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-bold text-slate-900">{job.company}</h3>
                {job.verified && (
                  <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-600">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verified
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm font-semibold text-slate-900">{job.role}</p>

              <div className="mt-2 flex flex-col gap-1 text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3 w-3" />
                    {job.jobType}
                  </span>
                </div>
                <span className="mt-1 inline-block w-max rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">
                  <Clock className="mr-1 inline h-3 w-3" />
                  Posted {job.postedAgo}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER: Match Ring */}
        <div className="flex justify-center lg:col-span-2">
          <MatchRing value={job.matchPercent} />
        </div>

        {/* WHY IT'S A GREAT MATCH */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold text-slate-900">Why it's a great match</h4>
          <ul className="mt-2 space-y-1.5">
            {job.reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                {reason}
              </li>
            ))}
          </ul>
          <button className="group mt-3 flex items-center gap-1 text-xs font-semibold text-[#186A3B] hover:text-[#145a32]">
            View Details
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* TOP MATCHING SKILLS */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold text-slate-900">Top Matching Skills</h4>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {job.skills.map((skill, i) => (
              <span
                key={i}
                className="rounded-md border border-[#186A3B]/30 bg-[#E8F3EE] px-2 py-0.5 text-[11px] font-medium text-[#186A3B]"
              >
                {skill}
              </span>
            ))}
          </div>
          {job.extraSkills > 0 && (
            <p className="mt-2 text-xs text-gray-500">+ {job.extraSkills} more</p>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col items-end gap-2 lg:col-span-2">
          <button
            onClick={() => setSaved(!saved)}
            className={`self-end rounded-lg border p-1.5 transition-colors ${
              saved
                ? 'border-[#186A3B] bg-[#E8F3EE] text-[#186A3B]'
                : 'border-gray-200 bg-white text-gray-400 hover:text-gray-600'
            }`}
            aria-label="Save job"
          >
            <Bookmark className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
          </button>

          <button className="w-full rounded-xl bg-[#186A3B] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#145a32] lg:w-auto">
            Apply Now
          </button>

          <button className="text-xs font-semibold text-gray-600 hover:text-slate-900">
            Save Job
          </button>
        </div>
      </div>
    </div>
  );
}