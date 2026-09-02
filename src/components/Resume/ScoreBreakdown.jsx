'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';

// Radar Chart Component (pure SVG)
function RadarChart() {
  const categories = [
    { label: 'Skills', value: 80 },
    { label: 'Experience', value: 85 },
    { label: 'Projects', value: 75 },
    { label: 'Education', value: 80 },
    { label: 'Achievements', value: 70 },
  ];

  const size = 240;
  const center = size / 2;
  const maxRadius = 90;
  const levels = 4;

  // Get point on radar
  const getPoint = (index, value) => {
    const angle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
    const radius = (value / 100) * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  // Data polygon points
  const dataPoints = categories
    .map((cat, i) => {
      const p = getPoint(i, cat.value);
      return `${p.x},${p.y}`;
    })
    .join(' ');

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full">
      {/* Grid pentagons */}
      {Array.from({ length: levels }).map((_, level) => {
        const scale = ((level + 1) / levels) * 100;
        const points = categories
          .map((_, i) => {
            const p = getPoint(i, scale);
            return `${p.x},${p.y}`;
          })
          .join(' ');
        return (
          <polygon
            key={level}
            points={points}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        );
      })}

      {/* Axis lines */}
      {categories.map((_, i) => {
        const p = getPoint(i, 100);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        );
      })}

      {/* Data polygon */}
      <polygon
        points={dataPoints}
        fill="#186A3B"
        fillOpacity="0.15"
        stroke="#186A3B"
        strokeWidth="2"
      />

      {/* Data points */}
      {categories.map((cat, i) => {
        const p = getPoint(i, cat.value);
        return <circle key={i} cx={p.x} cy={p.y} r="4" fill="#186A3B" />;
      })}

      {/* Labels */}
      {categories.map((cat, i) => {
        const p = getPoint(i, 125);
        return (
          <g key={i}>
            <text
              x={p.x}
              y={p.y - 5}
              textAnchor="middle"
              className="fill-slate-900 text-[10px] font-semibold"
            >
              {cat.label}
            </text>
            <text
              x={p.x}
              y={p.y + 8}
              textAnchor="middle"
              className="fill-gray-500 text-[10px]"
            >
              {cat.value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ScoreBreakdown() {
  const topSkills = [
    { name: 'JavaScript', value: 90, color: 'bg-[#186A3B]' },
    { name: 'React.js', value: 85, color: 'bg-[#186A3B]' },
    { name: 'HTML', value: 95, color: 'bg-[#186A3B]' },
    { name: 'CSS', value: 88, color: 'bg-[#186A3B]' },
    { name: 'Node.js', value: 75, color: 'bg-[#186A3B]' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      
      {/* Score Breakdown - Radar */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Score Breakdown</h3>
        <div className="mt-2 flex justify-center">
          <div className="h-64 w-64">
            <RadarChart />
          </div>
        </div>
      </div>

      {/* Top Skills */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Top Skills</h3>
        <div className="mt-4 space-y-4">
          {topSkills.map((skill, i) => (
            <div key={i}>
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#186A3B]" />
                  <span className="text-sm font-medium text-slate-900">{skill.name}</span>
                </div>
                <span className="text-xs font-semibold text-gray-600">{skill.value}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className={`h-full rounded-full ${skill.color}`}
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <button className="group mt-5 flex w-full items-center justify-end gap-1 text-sm font-semibold text-[#186A3B] hover:text-[#145a32]">
          View All Skills
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}