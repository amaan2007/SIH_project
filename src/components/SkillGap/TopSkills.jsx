'use client';

import { Check } from 'lucide-react';

export default function TopSkills() {
  const skills = [
    { num: 1, name: 'Next.js', gap: '25% gap', highDemand: true },
    { num: 2, name: 'React.js Advanced', gap: '20% gap' },
    { num: 3, name: 'Docker', gap: '30% gap' },
    { num: 4, name: 'PostgreSQL', gap: '30% gap' },
    { num: 5, name: 'TypeScript', gap: '15% gap', gapColor: 'text-amber-500' },
  ];

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h2 className="text-base font-bold text-slate-900">Top Skills to Learn</h2>
      
      <div className="mt-4 space-y-3">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F3EE] text-xs font-bold text-[#186A3B]">
                {skill.num}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-900">{skill.name}</span>
                {skill.highDemand && (
                  <span className="flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                    <Check className="h-3 w-3" /> High Demand
                  </span>
                )}
              </div>
            </div>
            <span className={`text-xs font-semibold ${skill.gapColor || 'text-red-500'}`}>
              {skill.gap}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-5 flex w-full justify-center gap-1 text-xs font-bold text-[#186A3B] hover:text-[#145a32]">
        View Learning Path →
      </button>
    </div>
  );
}