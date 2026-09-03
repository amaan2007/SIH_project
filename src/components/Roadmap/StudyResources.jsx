'use client';

import { ArrowRight } from 'lucide-react';

export default function StudyResources() {
  const tabs = ['Recommended', 'Courses', 'Practice', 'Docs', 'Videos'];

  const resources = [
    {
      logo: '(A)',
      bg: 'bg-black text-white',
      name: 'freeCodeCamp',
      tag: 'Free',
      desc: 'Full curriculum with hands-on projects',
      btnText: 'Start Learning',
      btnColor: 'text-[#186A3B]',
    },
    {
      logo: 'MDN',
      bg: 'bg-black text-white',
      name: 'MDN Web Docs',
      tag: 'Free',
      desc: 'Official documentation by Mozilla',
      btnText: 'Visit',
      btnColor: 'text-[#186A3B]',
    },
    {
      logo: 'FM',
      bg: 'bg-blue-100 text-blue-600',
      name: 'Frontend Mentor',
      tag: 'Free',
      desc: 'Practice real-world challenges',
      btnText: 'Explore',
      btnColor: 'text-[#186A3B]',
    },
    {
      logo: 'O',
      bg: 'bg-gray-100 text-slate-800',
      name: 'The Odin Project',
      tag: 'Free',
      desc: 'Project based learning path',
      btnText: 'Start',
      btnColor: 'text-[#186A3B]',
    },
    {
      logo: 'JS',
      bg: 'bg-yellow-400 text-black',
      name: 'JavaScript.info',
      tag: 'Free',
      desc: 'Modern JavaScript guide',
      btnText: 'Visit',
      btnColor: 'text-[#186A3B]',
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm h-full flex flex-col">
      <div>
        <h2 className="text-base font-bold text-slate-900">Where to Study / Prepare</h2>
        <p className="mt-1 text-xs text-gray-500">Curated resources to help you learn and practice effectively.</p>
      </div>

      {/* Tabs */}
      <div className="mt-4 flex gap-4 border-b border-gray-100 overflow-x-auto no-scrollbar">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`whitespace-nowrap pb-2 text-xs font-semibold transition-colors ${
              i === 0
                ? 'border-b-2 border-[#186A3B] text-[#186A3B]'
                : 'text-gray-500 hover:text-slate-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Resource List */}
      <div className="mt-4 flex-1 space-y-4">
        {resources.map((res, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[10px] font-black ${res.bg}`}>
                {res.logo}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-slate-900">{res.name}</h4>
                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 uppercase">{res.tag}</span>
                </div>
                <p className="mt-0.5 text-[10px] text-gray-500">{res.desc}</p>
              </div>
            </div>
            <button className={`text-xs font-bold hover:underline ${res.btnColor}`}>
              {res.btnText}
            </button>
          </div>
        ))}
      </div>

      <button className="mt-4 flex w-full justify-center gap-1 text-xs font-bold text-[#186A3B] hover:text-[#145a32]">
        View All Resources <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}