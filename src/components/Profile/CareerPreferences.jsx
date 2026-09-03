'use client';

import { Target, MapPin, Briefcase, BarChart3, TrendingUp, Pencil } from 'lucide-react';

export default function CareerPreferences() {
  const preferences = [
    { icon: Target, label: 'Preferred Role', value: 'Frontend Developer' },
    { icon: MapPin, label: 'Preferred Location', value: 'Bangalore, India' },
    { icon: Briefcase, label: 'Job Type', value: 'Full-time' },
    { icon: BarChart3, label: 'Experience Level', value: 'Entry Level (0-2 years)' },
    { icon: TrendingUp, label: 'Expected Salary', value: '6 - 8 LPA' },
  ];

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-[#186A3B]" />
          <h3 className="text-base font-bold text-slate-900">Career Preferences</h3>
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-900 shadow-sm hover:bg-gray-50">
          <Pencil className="h-3 w-3" />
          Edit
        </button>
      </div>

      {/* Grid */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {preferences.map((pref, i) => {
          const Icon = pref.icon;
          return (
            <div key={i} className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8F3EE]">
                <Icon className="h-4 w-4 text-[#186A3B]" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">{pref.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-900">{pref.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}