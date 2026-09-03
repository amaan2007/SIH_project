'use client';

import { GraduationCap, Briefcase, Code2, Award, Plus } from 'lucide-react';

// Reusable card wrapper
function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-[#186A3B]" />
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
        </div>
        <button className="flex items-center gap-1 text-xs font-semibold text-[#186A3B] hover:text-[#145a32]">
          <Plus className="h-3 w-3" />
          Add
        </button>
      </div>

      <div className="mt-4 flex-1">{children}</div>

      <button className="mt-4 text-center text-sm font-semibold text-[#186A3B] hover:text-[#145a32]">
        View All
      </button>
    </div>
  );
}

// Timeline item
function TimelineItem({ title, sub, meta }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#186A3B]" />
      <div className="flex-1">
        <h4 className="text-sm font-bold text-slate-900">{title}</h4>
        <p className="mt-0.5 text-xs text-gray-500">{sub}</p>
        <p className="mt-0.5 text-xs text-gray-400">{meta}</p>
      </div>
    </div>
  );
}

// Skill badge
function SkillBadge({ label, color = 'green' }) {
  const colors = {
    green: 'border-[#186A3B]/30 bg-[#E8F3EE] text-[#186A3B]',
    blue: 'border-blue-200 bg-blue-50 text-blue-700',
  };
  return (
    <span className={`inline-block rounded-md border px-2.5 py-1 text-xs font-medium ${colors[color]}`}>
      {label}
    </span>
  );
}

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      
      {/* Education */}
      <InfoCard icon={GraduationCap} title="Education">
        <div className="space-y-4">
          <TimelineItem
            title="B.Tech in Computer Science"
            sub="XYZ Institute of Technology"
            meta="2020 - 2024  •  CGPA: 8.46/10"
          />
          <TimelineItem
            title="Higher Secondary (12th)"
            sub="XYZ Junior College"
            meta="2018 - 2020  •  87.6%"
          />
        </div>
      </InfoCard>

      {/* Experience */}
      <InfoCard icon={Briefcase} title="Experience">
        <div>
          <TimelineItem
            title="Frontend Developer Intern"
            sub="Tech Solutions Pvt. Ltd."
            meta="Jun 2023 - Aug 2023  •  3 months"
          />
          <ul className="mt-3 space-y-1.5 pl-5 text-xs text-gray-600">
            <li className="list-disc">Built responsive UI using React and Tailwind CSS</li>
            <li className="list-disc">Integrated REST APIs and handled states</li>
            <li className="list-disc">Improved performance and fixed UI bugs</li>
          </ul>
        </div>
      </InfoCard>

      {/* Skills */}
      <InfoCard icon={Code2} title="Skills">
        <div>
          <p className="text-xs font-semibold text-slate-900">Technical Skills</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'Git', 'Node.js'].map(
              (s) => (
                <SkillBadge key={s} label={s} />
              )
            )}
          </div>

          <p className="mt-4 text-xs font-semibold text-slate-900">Soft Skills</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {['Problem Solving', 'Teamwork', 'Communication', 'Time Management'].map((s) => (
              <SkillBadge key={s} label={s} color="blue" />
            ))}
          </div>
        </div>
      </InfoCard>

      {/* Certifications */}
      <InfoCard icon={Award} title="Certifications">
        <div className="space-y-4">
          <TimelineItem title="React.js Developer" sub="Meta" meta="Jul 2023" />
          <TimelineItem
            title="JavaScript Algorithms and Data Structures"
            sub="freeCodeCamp"
            meta="Mar 2023"
          />
        </div>
      </InfoCard>
    </div>
  );
}