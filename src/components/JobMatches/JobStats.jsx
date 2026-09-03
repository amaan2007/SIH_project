'use client';

import { Briefcase, TrendingUp, Bookmark, Eye } from 'lucide-react';

export default function JobStats() {
  const stats = [
    {
      icon: Briefcase,
      value: '25',
      label: 'Best Matches',
      sub: 'High match score jobs',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      icon: TrendingUp,
      value: '12',
      label: 'New Matches',
      sub: 'Added this week',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Bookmark,
      value: '8',
      label: 'Saved Matches',
      sub: 'Jobs you saved',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Eye,
      value: '156',
      label: 'Total Matches',
      sub: 'Across all levels',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stat.iconBg}`}>
              <Icon className={`h-6 w-6 ${stat.iconColor}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm font-semibold text-slate-900">{stat.label}</p>
              <p className="mt-0.5 text-xs text-gray-500">{stat.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}