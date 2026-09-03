'use client';

import { List, Calendar, Check, ChevronDown, ChevronUp, PlayCircle, Circle, CheckCircle2 } from 'lucide-react';

export default function LearningPlan() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Your Personalized Learning Plan</h2>
          <p className="text-xs text-gray-500 mt-1">A step-by-step plan to build the skills you need.</p>
        </div>
        <div className="hidden sm:flex items-center rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
          <button className="flex items-center gap-1.5 rounded-md bg-[#186A3B] px-3 py-1.5 text-xs font-semibold text-white">
            <List className="h-3.5 w-3.5" /> Roadmap
          </button>
          <button className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50">
            <Calendar className="h-3.5 w-3.5" /> Timeline
          </button>
        </div>
      </div>

      {/* Timeline container */}
      <div className="relative mt-6 pl-4">
        {/* Continuous vertical line */}
        <div className="absolute left-[1.35rem] top-2 bottom-6 w-0.5 bg-gray-200" />
        <div className="absolute left-[1.35rem] top-2 h-48 w-0.5 bg-[#186A3B]" /> {/* Active line segment */}

        {/* STEP 1: Completed */}
        <div className="relative mb-6 flex items-start gap-4">
          <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#186A3B] text-white shadow-sm ring-4 ring-white">
            <span className="text-xs font-bold">1</span>
          </div>
          <div className="flex w-full items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Foundation</h3>
              <p className="mt-0.5 text-[11px] text-gray-500">2 - 3 Weeks • Learn the basics of web development.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#E8F3EE] px-2.5 py-1 text-[10px] font-bold text-[#186A3B]">Completed</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* STEP 2: In Progress (Expanded) */}
        <div className="relative mb-6 flex items-start gap-4">
          <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#186A3B] text-white shadow-sm ring-4 ring-white">
            <span className="text-xs font-bold">2</span>
          </div>
          <div className="w-full rounded-2xl border-2 border-[#186A3B]/20 bg-[#FAFBFA] p-1 shadow-sm">
            <div className="rounded-xl bg-white p-4">
              
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Core Frontend Skills</h3>
                  <p className="mt-0.5 text-[11px] font-medium text-gray-500">6 - 8 Weeks</p>
                  <p className="mt-1.5 text-xs text-gray-600">Master HTML, CSS, JavaScript and DOM.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#E8F3EE] px-2.5 py-1 text-[10px] font-bold text-[#186A3B]">In Progress</span>
                  <ChevronUp className="h-4 w-4 text-gray-600" />
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-5 rounded-xl bg-gray-50 p-4">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  <span>Stage Progress</span>
                  <span className="text-slate-900">60%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[60%] rounded-full bg-[#186A3B]" />
                </div>
                <p className="mt-2 text-[10px] font-medium text-gray-500">Completed 6 / 10 topics</p>
              </div>

              {/* Topic List */}
              <div className="mt-4 space-y-3">
                {/* Topic 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#186A3B]" />
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Introduction to HTML</p>
                      <p className="text-[10px] text-gray-500">Structure, elements, attributes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-semibold text-gray-500">
                    <span>45 min</span>
                    <span className="flex items-center gap-1 text-red-600"><PlayCircle className="h-3 w-3" /> Video</span>
                    <CheckCircle2 className="h-4 w-4 text-[#186A3B]" />
                  </div>
                </div>

                {/* Topic 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#186A3B]" />
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Text Formatting & Lists</p>
                      <p className="text-[10px] text-gray-500">Headings, paragraphs, links, lists</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-semibold text-gray-500">
                    <span>30 min</span>
                    <span className="flex items-center gap-1 text-red-600"><PlayCircle className="h-3 w-3" /> Video</span>
                    <CheckCircle2 className="h-4 w-4 text-[#186A3B]" />
                  </div>
                </div>

                {/* Topic 3 (Active) */}
                <div className="flex items-center justify-between rounded-lg bg-blue-50/50 p-2 -mx-2">
                  <div className="flex items-center gap-3">
                    <PlayCircle className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Forms & Input Elements</p>
                      <p className="text-[10px] text-gray-500">Forms, inputs, labels, buttons</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-semibold text-gray-500">
                    <span>50 min</span>
                    <span className="flex items-center gap-1">📺 freeCodeCamp</span>
                    <button className="rounded border border-gray-200 bg-white px-2 py-1 hover:bg-gray-50">Continue</button>
                  </div>
                </div>

                {/* Topic 4 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Circle className="h-4 w-4 text-gray-300" />
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Tables & Semantic HTML</p>
                      <p className="text-[10px] text-gray-500">Tables, semantic tags</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-semibold text-gray-500">
                    <span>40 min</span>
                    <span className="flex items-center gap-1 text-blue-500">W W3Schools</span>
                    <button className="rounded border border-gray-200 bg-white px-2 py-1 hover:bg-[#E8F3EE] hover:text-[#186A3B] hover:border-[#186A3B]">Start</button>
                  </div>
                </div>
              </div>

              <button className="mt-4 flex w-full justify-center text-[11px] font-bold text-[#186A3B] hover:underline">
                View All 10 Topics
              </button>
            </div>
          </div>
        </div>

        {/* STEPS 3, 4, 5: Upcoming */}
        {[
          { num: 3, title: 'Advanced Concepts', time: '6 - 7 Weeks', desc: 'Dive deeper into modern frontend concepts.' },
          { num: 4, title: 'Real World Projects', time: '6 - 8 Weeks', desc: 'Build projects and apply your skills.' },
          { num: 5, title: 'Job Preparation', time: '4 - 5 Weeks', desc: 'Prepare for interviews and land your dream job.' },
        ].map((step) => (
          <div key={step.num} className="relative mb-6 flex items-start gap-4">
            <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white shadow-sm ring-4 ring-white">
              <span className="text-xs font-bold">{step.num}</span>
            </div>
            <div className="flex w-full items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                <p className="mt-0.5 text-[11px] text-gray-500">{step.time} • {step.desc}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-bold text-purple-600">Upcoming</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}