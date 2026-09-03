'use client';

import { ShieldCheck, ArrowRight, Video } from 'lucide-react';

export default function RoadmapSidebar() {
  const skills = [
    { name: 'HTML', progress: 80, color: 'bg-[#186A3B]' },
    { name: 'CSS', progress: 60, color: 'bg-orange-400' },
    { name: 'JavaScript', progress: 30, color: 'bg-red-500' },
    { name: 'React.js', progress: 0, color: 'bg-gray-200' },
    { name: 'Git & GitHub', progress: 20, color: 'bg-red-500' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Skills Gap Card */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900">Skills Gap (vs Job Ready)</h3>
        <div className="mt-4 space-y-3">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="mb-1 flex justify-between text-[11px] font-semibold text-slate-900">
                <span>{skill.name}</span>
                <span>{skill.progress}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-gray-100">
                <div className={`h-full rounded-full ${skill.color}`} style={{ width: `${skill.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
        <button className="mt-5 flex w-full justify-center gap-1 text-[11px] font-bold text-[#186A3B] hover:underline">
          View Full Skill Gap <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Focus On What Matters */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F3EE]">
            <ShieldCheck className="h-4 w-4 text-[#186A3B]" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Focus on What Matters</h4>
            <p className="mt-1 text-[10px] text-gray-500 leading-relaxed">Improve your low skills to become job ready faster.</p>
          </div>
        </div>
        <button className="mt-3 w-full rounded-lg border border-gray-200 bg-white py-1.5 text-[11px] font-bold text-slate-700 hover:bg-gray-50">
          View Skill Gap Report
        </button>
      </div>

      {/* Daily Goal */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900">Daily Goal</h3>
        <p className="text-[10px] text-gray-500">Keep the streak going!</p>
        
        <div className="mt-4 flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="28" stroke="#E5E7EB" strokeWidth="6" fill="none" />
              <circle cx="32" cy="32" r="28" stroke="#186A3B" strokeWidth="6" fill="none" strokeDasharray="175.9" strokeDashoffset="58.6" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-slate-900">2/3</span>
              <span className="text-[8px] font-medium text-gray-500">topics</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">You're doing great!</p>
            <p className="text-[10px] text-gray-500 mt-0.5">Complete 1 more topic to hit your goal.</p>
          </div>
        </div>

        <button className="mt-4 w-full rounded-lg border border-gray-200 bg-white py-2 text-[11px] font-bold text-slate-700 hover:bg-gray-50">
          Continue Learning
        </button>
      </div>

      {/* Need help deciding? */}
      <div className="rounded-2xl border border-gray-100 bg-[#FAFBFA] p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F3EE]">
            <Video className="h-4 w-4 text-[#186A3B]" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Need help deciding?</h4>
            <p className="mt-1 text-[10px] text-gray-500 leading-relaxed">Talk to our career coach and get guidance.</p>
          </div>
        </div>
        <button className="mt-3 w-full rounded-lg border border-gray-200 bg-white py-1.5 text-[11px] font-bold text-[#186A3B] hover:bg-gray-50">
          Book a Session
        </button>
      </div>

    </div>
  );
}