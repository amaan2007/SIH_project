'use client';

import { Sparkles, Award, Key, Rocket, ArrowRight, FileCheck } from 'lucide-react';

export default function AIRecommendations() {
  const recommendations = [
    {
      icon: Award,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500',
      btnColor: 'border-orange-300 text-orange-600 hover:bg-orange-50',
      title: 'Add More Achievements',
      desc: 'Include quantifiable achievements with numbers and metrics.',
    },
    {
      icon: Key,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      btnColor: 'border-blue-300 text-blue-600 hover:bg-blue-50',
      title: 'Improve Keywords',
      desc: 'Add more relevant keywords to increase ATS match rate.',
    },
    {
      icon: Rocket,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      btnColor: 'border-purple-300 text-purple-600 hover:bg-purple-50',
      title: 'Enhance Projects',
      desc: 'Add more details about your projects and the impact you created.',
    },
  ];

  return (
    <div className="space-y-4">
      
      {/* AI Recommendations Card */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#186A3B]" />
            <h3 className="text-sm font-semibold text-slate-900">AI Recommendations</h3>
          </div>
          <button className="group flex items-center gap-1 text-sm font-semibold text-[#186A3B] hover:text-[#145a32]">
            View All Insights
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {recommendations.map((rec, i) => {
            const Icon = rec.icon;
            return (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 transition-all hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${rec.iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${rec.iconColor}`} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{rec.title}</h4>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-gray-600">{rec.desc}</p>
                <button
                  className={`mt-4 w-full rounded-lg border bg-white px-3 py-1.5 text-xs font-semibold transition-colors ${rec.btnColor}`}
                >
                  Improve
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Recent Activity</h3>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F3EE]">
              <FileCheck className="h-5 w-5 text-[#186A3B]" />
            </div>
            <p className="text-sm text-slate-900">Resume uploaded and analyzed</p>
          </div>
          <span className="text-xs text-gray-500">31 May 2025 • 10:30 AM</span>
        </div>
      </div>
    </div>
  );
}