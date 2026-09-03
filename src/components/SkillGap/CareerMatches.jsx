'use client';

export default function CareerMatches() {
  const matches = [
    { role: 'Frontend Developer', match: '72% Match', percent: 72 },
    { role: 'Backend Developer', match: '68% Match', percent: 68 },
    { role: 'Full Stack Developer', match: '64% Match', percent: 64 },
  ];

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">Best Career Matches for You</h2>
        <button className="text-xs font-bold text-[#186A3B] hover:text-[#145a32]">View All</button>
      </div>

      <div className="mt-5 space-y-4">
        {matches.map((item, i) => (
          <div key={i}>
            <div className="mb-1.5 flex justify-between">
              <span className="text-sm font-bold text-slate-900">{item.role}</span>
              <span className="rounded bg-[#E8F3EE] px-1.5 py-0.5 text-[10px] font-bold text-[#186A3B]">
                {item.match}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full rounded-full bg-[#186A3B]" style={{ width: `${item.percent}%` }} />
            </div>
          </div>
        ))}
      </div>

      <button className="mt-5 flex w-full justify-center gap-1 text-xs font-bold text-[#186A3B] hover:text-[#145a32]">
        Explore Job Matches →
      </button>
    </div>
  );
}