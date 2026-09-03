'use client';

import { ChevronRight, Atom, Database, Boxes, GitBranch } from 'lucide-react';

// Renders a segmented progress bar (5 segments)
function SegmentedBar({ percent }) {
  const segments = 5;
  const filled = Math.round((percent / 100) * segments);
  return (
    <div className="flex w-24 gap-1 sm:w-28">
      {[...Array(segments)].map((_, i) => (
        <div
          key={i}
          className={`h-2 flex-1 rounded-full ${i < filled ? 'bg-[#186A3B]' : 'bg-gray-100'}`}
        />
      ))}
    </div>
  );
}

export default function SkillBreakdown() {
  const skills = [
    { icon: Atom, iconColor: 'text-[#61DAFB]', bg: 'bg-[#61DAFB]/10', name: 'React.js', sub: 'Frontend', myProf: 70, reqLevel: 90, gap: '20%', priority: 'High', gapColor: 'text-red-500', badge: 'bg-red-50 text-red-600' },
    { icon: null, textIcon: 'N', iconColor: 'text-slate-900', bg: 'bg-slate-100', name: 'Next.js', sub: 'Frontend', myProf: 60, reqLevel: 85, gap: '25%', priority: 'High', gapColor: 'text-red-500', badge: 'bg-red-50 text-red-600' },
    { icon: null, textIcon: 'TS', iconColor: 'text-blue-600', bg: 'bg-blue-50', name: 'TypeScript', sub: 'Language', myProf: 65, reqLevel: 80, gap: '15%', priority: 'Medium', gapColor: 'text-amber-500', badge: 'bg-amber-50 text-amber-600' },
    { icon: null, textIcon: 'Node', iconColor: 'text-green-600', bg: 'bg-green-50', name: 'Node.js', sub: 'Backend', myProf: 75, reqLevel: 80, gap: '5%', priority: 'Medium', gapColor: 'text-amber-500', badge: 'bg-amber-50 text-amber-600' },
    { icon: Database, iconColor: 'text-blue-500', bg: 'bg-blue-50', name: 'PostgreSQL', sub: 'Database', myProf: 40, reqLevel: 70, gap: '30%', priority: 'High', gapColor: 'text-red-500', badge: 'bg-red-50 text-red-600' },
    { icon: Boxes, iconColor: 'text-blue-500', bg: 'bg-blue-50', name: 'Docker', sub: 'DevOps', myProf: 30, reqLevel: 60, gap: '30%', priority: 'High', gapColor: 'text-red-500', badge: 'bg-red-50 text-red-600' },
    { icon: GitBranch, iconColor: 'text-orange-600', bg: 'bg-orange-50', name: 'Git & GitHub', sub: 'Tools', myProf: 80, reqLevel: 80, gap: '0%', priority: 'Low', gapColor: 'text-emerald-500', badge: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Header & Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-bold text-slate-900">Skill Gap Breakdown</h2>
        <div className="flex flex-wrap items-center gap-2">
          <button className="rounded-lg bg-[#186A3B] px-3 py-1.5 text-xs font-semibold text-white">All</button>
          <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50">High Priority</button>
          <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50">Medium</button>
          <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50">Low Priority</button>
        </div>
      </div>

      {/* Table Content */}
      <div className="mt-5 flex-1 overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-gray-100 pb-3 text-xs font-semibold text-gray-500">
            <div className="col-span-3">Skill</div>
            <div className="col-span-3 text-center">Your Proficiency</div>
            <div className="col-span-3 text-center">Required Level</div>
            <div className="col-span-1 text-center">Gap</div>
            <div className="col-span-2 text-right">Priority</div>
          </div>

          {/* Rows */}
          <div className="mt-2 space-y-1">
            {skills.map((skill, i) => (
              <div key={i} className="group grid grid-cols-12 items-center rounded-xl p-2 transition-colors hover:bg-gray-50">
                
                {/* Skill Name */}
                <div className="col-span-3 flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${skill.bg}`}>
                    {skill.icon ? <skill.icon className={`h-5 w-5 ${skill.iconColor}`} /> : <span className={`text-xs font-bold ${skill.iconColor}`}>{skill.textIcon}</span>}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{skill.name}</p>
                    <p className="text-[11px] text-gray-500">{skill.sub}</p>
                  </div>
                </div>

                {/* My Prof */}
                <div className="col-span-3 flex items-center justify-center gap-3">
                  <span className="w-8 text-right text-xs font-semibold text-slate-900">{skill.myProf}%</span>
                  <SegmentedBar percent={skill.myProf} />
                </div>

                {/* Req Level */}
                <div className="col-span-3 flex items-center justify-center gap-3">
                  <span className="w-8 text-right text-xs font-semibold text-slate-900">{skill.reqLevel}%</span>
                  <SegmentedBar percent={skill.reqLevel} />
                </div>

                {/* Gap */}
                <div className="col-span-1 text-center text-xs font-semibold">
                  <span className={skill.gapColor}>{skill.gap}</span>
                </div>

                {/* Priority */}
                <div className="col-span-2 flex items-center justify-end gap-3">
                  <span className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${skill.badge}`}>
                    {skill.priority}
                  </span>
                  <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="mt-4 flex w-full justify-center gap-1 py-2 text-xs font-bold text-[#186A3B] hover:text-[#145a32]">
        View Full Skill Comparison →
      </button>
    </div>
  );
}