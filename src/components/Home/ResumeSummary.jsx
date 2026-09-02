import React from 'react';
import { 
  FileText, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

export default function ResumeSummary() {
  // Data array for the stat cards - easy to update
  const stats = [
    {
      icon: FileText,
      label: 'Overall Score',
      value: '78',
      suffix: '/100',
      status: 'Good',
      statusColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      progress: 78,
      progressColor: 'bg-emerald-600',
    },
    {
      icon: Target,
      label: 'Job Match',
      value: '85',
      suffix: '%',
      status: 'Strong Match',
      statusColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      progress: 85,
      progressColor: 'bg-blue-600',
    },
    {
      icon: BarChart3,
      label: 'Key Skills',
      value: '12',
      suffix: '/18',
      status: 'Matched',
      statusColor: 'text-purple-600',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      progress: 66,
      progressColor: 'bg-purple-600',
    },
    {
      icon: Zap,
      label: 'Improvement Areas',
      value: '5',
      suffix: '',
      status: 'To Improve',
      statusColor: 'text-gray-500',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500',
      progress: 40,
      progressColor: 'bg-orange-500',
    },
    {
      icon: CheckCircle2,
      label: 'ATS Score',
      value: '82',
      suffix: '/100',
      status: 'Good',
      statusColor: 'text-emerald-600',
      iconBg: 'bg-red-50',
      iconColor: 'text-red-500',
      progress: 82,
      progressColor: 'bg-emerald-600',
    },
  ];

  return (
    <section className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
      
      {/* HEADER */}
      <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Your Resume Summary
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Here's a quick overview of your resume analysis
          </p>
        </div>
        <button className="group flex items-center gap-1.5 text-sm font-semibold text-[#186A3B] hover:text-[#145a32] transition-colors">
          View Full Analysis
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Icon + Label */}
              <div className="mb-3 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconBg}`}>
                  <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {stat.label}
                </span>
              </div>

              {/* Value */}
              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-base font-medium text-gray-400">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Status Label */}
              <p className={`mb-3 text-sm font-medium ${stat.statusColor}`}>
                {stat.status}
              </p>

              {/* Progress Bar */}
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div 
                  className={`h-full rounded-full ${stat.progressColor} transition-all`}
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* NEXT STEP BANNER */}
      <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#F0F7F3] p-5 sm:flex-row sm:items-center sm:p-6">
        
        {/* Left: Icon + Text */}
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#186A3B]">
            <Sparkles className="h-5 w-5 text-white" fill="white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Your Next Step
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              You're doing great! Most roles you're targeting require TypeScript skills. Improving this can increase your match rate even more.
            </p>
          </div>
        </div>

        {/* Right: CTA Button */}
        <button className="group flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-[#186A3B] bg-white px-5 py-2.5 text-sm font-semibold text-[#186A3B] transition-all hover:bg-[#186A3B] hover:text-white sm:w-auto">
          View Skill Gap
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
       
      </div>
    </section>
  );
}